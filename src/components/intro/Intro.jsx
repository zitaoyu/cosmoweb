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
                        Welcome to my portfolio website, nice to meet you! 
                        In this page, you can learn more about me and view very cool pictures of me.
                        I hope you enjoy reading my page, and if you like... drop a follow to instagram, meow meow ~
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