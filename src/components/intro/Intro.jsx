import "./intro.css"
import Me from "../../img/face_big.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Cosmo</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">British Shorthair</div>
                            <div className="i-title-item">Biscuit Maker</div>
                            <div className="i-title-item">Plastic Hunter</div>
                            <div className="i-title-item">Shoe Scratcher</div>
                        </div>
                    </div>
                    <div className="i-desc">
                    Hi there! Welcome to my website where you can learn more about me and see some really cool pictures of me too! I hope you like my page and if you do, you can follow me on Instagram too! Meow meow~
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg">
                    
                </div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro