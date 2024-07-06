import React from "react";
import Apptitle from "../Components/Apptitle";
import Button from "../Components/button";

export default class homepage extends React.Component{
    render() {
        return(
            <html>
                <Apptitle></Apptitle>
                <Button name="Login" orange></Button>
                <Button name="Register"></Button>
                
            </html>
        );
    }
}