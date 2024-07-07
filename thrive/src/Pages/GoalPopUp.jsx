import React from "react";
import { Link } from "react-router-dom"
import TextBox from "../Components/textBox.jsx";
import Button from "../Components/button";
import "../CSS/GoalPopUp.css";

export default class GoalsPopUp extends React.Component {
    render() {
        return (
            <div class="GoalPopUp">
                <h1>Add New Goal</h1>
                <div id="Options1">
                    <p>
                        <select name="Choose a catagory">
                            <option value="Exercise goal">Exercise goal</option>
                            <option value="Productivity goal">Productivity goal</option>
                            <option value="Study goal">Work goal</option>
                        </select>
                    </p>
                    <p>
                        <TextBox placeholder="Write a short description"> </TextBox>
                    </p>
                    <p>
                        <Link to="/home"><Button name="Add Goal"></Button></Link>
                    </p>
                    <p>

                        <select name="Your community">
                            <option value="Exercise community">Exercise goal</option>
                            <option value="Productivity community">Productivity goal</option>
                            <option value="Study community">Work goal</option>
                        </select>
                    </p>
                    <p>Add a goal to gain access to this community</p>
                </div>
            </div>
            


        );
    }
}