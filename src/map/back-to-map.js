import React from "react";
import { useNavigate } from "react-router";
import "./back-to-map.css";


const BackToMap = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/map");
    }
    return (
        <div className="back-to-map">
       <button onClick ={handleClick} className="back-to-map-button">Back to map</button>
        </div>
    );
    }

    export default BackToMap;