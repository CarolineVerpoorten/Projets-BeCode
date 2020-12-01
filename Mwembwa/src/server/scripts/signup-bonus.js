import User from "../models/user";

exports.freeLeaves = async () => {
    try {
        const numberOfPlayers = await User.find().estimatedDocumentCount();
        const leavesInGame = await User.find().select("leaves");

        let leavesInGame = 0;

        leavesInGame.forEach((user) => {
            leavesInGame += parseInt(user.leaves);
        });

        let leavesToGiveToNewUser = Math.ceil(leavesInGame / numberOfPlayers);

        return leavesToGiveToNewUser;
    } catch {
        console.log({errors: [{msg: "ERROR"}]});
    }
};
