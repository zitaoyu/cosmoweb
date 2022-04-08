import React from "react";
import CAT from "../img/floatingcat.jpg"
import CAT2 from "../img/kiss.png"
import "./floactingcat.css";

var current = new Date();

class Floatingcat extends React.Component {

    constructor(props) {
        super(props);
   
        this.state = {
            x: 50,
            y: 100
        };
    }

    render() {
        if(document.getElementById("cat") != null){
            const cat = document.getElementById("cat");
            cat.style.left = "30%";

        }
        var current = new Date();
        console.log(current)
        return (
            <img id="cat" src={CAT} alt="" className="ontop"></img>
        );
    }
}
   
export default Floatingcat;

<marquee behavior="scroll" direction="up" className="ontop">
    <img src={CAT2} alt=""></img>
</marquee>;