import React, { useState } from "react";
import "./Dashboard.css";
import player from "./data/player.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLeaf,
    faTree,
    faUserCircle,
    faSignOutAlt,
    faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import ModalSettings from "./components/ModalSettings";
import ModalRules from "./components/ModalRules";
import ModalLogout from "./components/ModalLogout";

function Dashboard() {
    // Modal settings
    const [showRules, setShowRules] = useState(false);

    const handleCloseRules = () => setShowRules(false);
    const handleShowRules = () => setShowRules(true);

    // // Modal rules
    const [showSettings, setShowSettings] = useState(false);

    const handleCloseSettings = () => setShowSettings(false);
    const handleShowSettings = () => setShowSettings(true);

    // // Modal Logout
    const [showLogout, setShowLogout] = useState(false);

    const handleCloseLogout = () => setShowLogout(false);
    const handleShowLogout = () => setShowLogout(true);

    return (
        <div className="structure-div">
            <img className="profile-pic" src={player} alt="player picture" />
            <h2 className="player-info">Player Name</h2>
            <div className="leaves-tree">
                <p className="p-leaves-tree">
                    <FontAwesomeIcon icon={faLeaf} /> 150
                </p>
                <p className="p-leaves-tree">
                    <FontAwesomeIcon icon={faTree} /> 40
                </p>
            </div>
            <h2 className="box1">Leaderboard</h2>
            <p className="delete-bootstrap-margin">
                Lorem ipsum dolor sit amet.
            </p>
            <p className="delete-bootstrap-margin">
                Lorem ipsum dolor sit amet.
            </p>
            <p className="delete-bootstrap-margin">
                Lorem ipsum dolor sit amet.
            </p>
            <h2 className="box2">Game Logs</h2>
            <p className="delete-bootstrap-margin">
                Lorem ipsum dolor sit amet.
            </p>
            <p className="delete-bootstrap-margin">
                Lorem ipsum dolor sit amet.
            </p>
            <p className="delete-bootstrap-margin">
                Lorem ipsum dolor sit amet.
            </p>
            <div className="settings-signout">
                <FontAwesomeIcon
                    onClick={() => handleShowSettings()}
                    icon={faUserCircle}
                />
                <FontAwesomeIcon
                    onClick={() => handleShowRules()}
                    icon={faQuestionCircle}
                />
                <FontAwesomeIcon
                    onClick={() => handleShowLogout()}
                    icon={faSignOutAlt}
                />
            </div>

            <ModalRules
                showRules={showRules}
                handleCloseRules={handleCloseRules}
            />
            <ModalLogout
                showLogout={showLogout}
                handleCloseLogout={handleCloseLogout}
            />
        </div>
    );
}

export default Dashboard;
