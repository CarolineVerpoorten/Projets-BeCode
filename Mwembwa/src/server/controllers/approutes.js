const Tree = require("../models/infoTree");

exports.createTree = (req, res, next) => {
    delete req.body._id;
    const tree = new Tree({
        ...req.body,
    });
    thing
        .save()
        .then(() => res.status(201).json({message: "Objet enregistré !"}))
        .catch((error) => res.status(400).json({error}));
};

exports.getAllTree = (req, res, next) => {
    Tree.find()
        .then((trees) => res.status(200).json(trees))
        .catch((error) => res.status(400).json({error}));
    name: req.body.name;
};

exports.getOneTree = (req, res, next) => {
    Tree.findById(req.params.id)
        .then((tree) => res.status(200).json(tree))
        .catch((error) => res.status(400).json({error}));
};

const treesIn100MeterRadius = (tree) => ({
    $geoNear: {
        near: {
            coordinates: tree.geoloc,
        },
        maxDistance: 100,
    },
});

const groupOfTreesValue = () => ({
    $group: {
        _id: null,
        treeValue: {
            $sum: {
                $ceil: {
                    $multiply: ["$diametre_cime", "$hauteur_totale"],
                },
            },
        },
    },
});

exports.treePrice = async (tree, user) => {
    try {
        const treeValue = Math.ceil(tree.diametre_cime * hauteur_totale);
        let treePrice = treeValue;

        if (tree.owner === null) {
            return treePrice;
        } else {
            const currentOwner = tree.owner;
            const valueOfTargettedPlayersTreesWithin100m = await Tree.aggregate(
                [
                    treesIn100MeterRadius(tree),
                    {
                        $match: {owner: mongoose.Types.ObjectId(currentOwner)},
                    },
                    groupOfTreesValue(),
                ],
            );

            const amountOfTreesWithin100m = await Tree.aggregate([
                treesIn100MeterRadius(tree),
                {$group: {_id: null, count: {$sum: 1}}},
            ]);

            const amountOfTargettedPlayersTreesWithin100m = await Tree.aggregate(
                [
                    treesIn100MeterRadius(tree),
                    {
                        $match: {owner: mongoose.Types.ObjectId(currentOwner)},
                    },
                    {$group: {_id: null, count: {$sum: 1}}},
                ],
            );

            const valueOtherPeopleTreesWithin100m = await Tree.aggregate([
                treesIn100MeterRadius(tree),
                {
                    $match: {
                        $and: [
                            {
                                owner: {
                                    $ne: mongoose.Types.ObjectId(currentOwner),
                                },
                            },
                            {owner: {$type: "objectId"}},
                        ],
                    },
                },
                groupOfTreesValue(),
            ]);

            const valueOfCurrentPlayerTreesWithin100m = await Tree.aggregate([
                treesIn100MeterRadius(tree),
                {
                    $match: {owner: mongoose.Types.ObjectId(user)},
                },
                groupOfTreesValue(),
            ]);

            treePrice =
                treeValue +
                valueOfTargettedPlayersTreesWithin100m[0].treeValue *
                    (amountOfTreesWithin100m[0].count /
                        amountOfTargettedPlayersTreesWithin100m[0].count) +
                valueOtherPeopleTreesWithin100m[0].treeValue -
                valueOfCurrentPlayerTreesWithin100m[0].treeValue;

            return treePrice;
        }
    } catch (error) {
        console.log(error);
    }
    return true;
};
