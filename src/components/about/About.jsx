import "./about.css"
import sitting from "../../img/sitting.png"

var cosmoBirthday = new Date("08/29/2020");

function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function getImageUrls(){
    const imageUrls = []

    fetch("https://v1.nocodeapi.com/zitaoy/instagram/ttAXmddtSzUstNwF")
    .then((res) => res.json())
    .then((json) => {
        json.data.map(item => {
            if (item.media_type === "IMAGE") {
                imageUrls.push(item.media_url);
            }
        });
    })
    return imageUrls;
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
                <p className="a-sub"> 
                Meow! I'm a kitty with white fur and pretty blue eyes. I like it when you rub my belly and take small naps during the day. But when it's really dark outside, I turn into a brave monster hunter! I protect my parents from scary things that try to harm them.
                </p>
                <p className="a-sub"> 
                I once saved my mommy from a scary white snake under the bed! But the next morning, she got mad at me for some reason and was talking about an iphone charger. Humans can be silly sometimes, meow~
                </p>
                <ul className="a-sub-2">
                <li><b>Name:</b> Cosmo</li>
                <li><b>Breed:</b> British Shorthair</li>
                <li><b>Age:</b> {calculateAge(cosmoBirthday)} years old</li>
                <li><b>Birthplace:</b> Ukraine</li>
                <li><b>Favorite food:</b> freeze dried chicken</li>
                <li><b>Favorite toy:</b> Supreme bouncy ball</li>
                <li><b>Skills:</b> making biscuits, soccer, and hunting white snakes</li>
                </ul>
                <p className="a-desc">
                    Meow meow meow~
                </p>
            </div>
        </div>
    )
}

export default About