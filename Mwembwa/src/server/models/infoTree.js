const mongoose = require("mongoose");

//schema de la data base

const infoTreeSchema = mongoose.Schema({
    y_lambert72: Number,
    arbotag: Number,
    date_donnees: Date,
    x_lambda: Number,
    geoloc: {
        lat: Number,
        lon: Number,
    },
    hauteur_totale: Number,
    x_lambert72: Number,
    y_phi: Number,
    nom_complet: String,
    diametre_cime: Number,
    circonf: Number,
    owner: {type: String, required: true, default: null},
});

module.exports = mongoose.model("Tree", infoTreeSchema);
