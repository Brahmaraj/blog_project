import React from "react";
import {NavLink} from "react-router-dom";
import "./style.css";

const Header = () => {

    const clickStyleHandler = (isActive) => {
        return {
            color: isActive? "green" : "black"
        }
    }

        return(
            <>
            <div className="header_container">
                <NavLink  style={({isActive})=>clickStyleHandler(isActive)} to="/home" className="headerButton">Home</NavLink>
                <NavLink style={({isActive})=>clickStyleHandler(isActive)} to="/category/tourism" className="headerButton">Tourism</NavLink>
                <NavLink style={({isActive})=>clickStyleHandler(isActive)} to="/category/fitness" className="headerButton">Fitness</NavLink>
                <NavLink style={({isActive})=>clickStyleHandler(isActive)} to="/category/food" className="headerButton">Food</NavLink>
                <NavLink style={({isActive})=>clickStyleHandler(isActive)} to="/category/technology" className="headerButton">Technology</NavLink>
            </div>
            <hr style={{marginBottom:"30px"}}/>
            </>
        )
    }

export default Header;