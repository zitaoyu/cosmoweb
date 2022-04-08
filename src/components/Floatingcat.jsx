import React from "react";
import CAT from "../img/floatingcat.png"
import "./floactingcat.css";


class Floatingcat extends React.Component {

    constructor(props) {
        super(props);
   
        this.state = {
            x: 50,
            y: 100
        };
    }

    render() {
        /*
        Unfinished code

        if(document.getElementById("cat") != null){
            const cat = document.getElementById("cat");
            cat.style.left = "30%";
        }
        */
        return (
            <img id="cat" src={CAT} alt="" className="cat"></img>
        );
    }
}
   
export default Floatingcat;