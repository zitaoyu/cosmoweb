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
                            <div className="i-title-item">A sleepy cat</div>
                            <div className="i-title-item">A annoying cat</div>
                            <div className="i-title-item">A playful cat</div>
                            <div className="i-title-item">A fluffy cat</div>
                            <div className="i-title-item">British shorthair</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        Welcome to my portfolio website, nice to meet you!
                        I like to get my belly rubbed.
                        I love to sleep through the morning then annoy my mom at night.
                        I'm covered with white hair and I have a pair of beautiful blue eyes.
                        I hope you enjoy reading my page, meow meow ~
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