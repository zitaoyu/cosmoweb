import React from "react";
import './gallery.css';
import Photo from "../photo/Photo.jsx";

class Gallery extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("https://v1.nocodeapi.com/zitaoy/instagram/ttAXmddtSzUstNwF")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const { DataisLoaded, items } = this.state;
        console.log(items)
        if (!DataisLoaded) return <div>
            <h1 className="g-title"> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "g">
            <h1 className="g-title"> My recent instagram posts:</h1>
            <div className="g-photos">
            {items.data.map(item => (
                <Photo key={item.id} link={item.permalink} img={item.media_url} caption={item.caption}></Photo>
            ))}
            </div>
        </div>
        );
    }
}
   
export default Gallery;