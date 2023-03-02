import "./about.css"
import sitting from "../../img/sitting.png"

var cosmoBirthday = new Date("08/29/2020");

function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

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
                <p className="a-sub"> I'm a very brave boy, I once hunt down a white snake under the bed to protect my mommy at night. 
                She got mad at me in the morning for some reason. Human are stupid. Meoooow~</p>
                <ul className="a-sub">
                <li><b>Name:</b> Cosmo</li>
                <li><b>Breed:</b> British Shorthair</li>
                <li><b>Age:</b> {calculateAge(cosmoBirthday)} years old</li>
                <li><b>Birthplace:</b> Ukraine</li>
                <li><b>Favorite food:</b> freeze dried chicken</li>
                <li><b>Favorite toy:</b> Supreme bouncy ball</li>
                <li><b>Skills:</b> making biscuits, soccer, and bullying things that are smaller than me</li>
                </ul>
                <p className="a-desc">
                    Meow meow meow~
                </p>
            </div>
        </div>
    )
}

export default About