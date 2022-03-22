import "./about.css"
import sleeping from "../../img/sleeping.jpg"
import sitting from "../../img/sitting.png"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={sitting} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About me</h1>
                <p className="a-sub">
                    I was born in Ukraine, and I'm 2 years old. 
                    I've moved many times when I was little, so I'm scared of moving.
                    I love wet food, but I would have stinky poop.
                    I'm a very brave cat and I love exploring unknown areas.
                </p>
                <p className="a-desc">
                    Meow meow meow!
                </p>
            </div>
        </div>
    )
}

export default About