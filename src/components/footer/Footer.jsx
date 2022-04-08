import "./footer.css"

const Footer = () => {
    return (
        <div className="f">
            <p className="f-github">
               This is a personal project, source code can be found at: 
            </p>
            <a href="https://github.com/zitaoyu/cosmoweb_sourcecode.git" className="f-github">
                Source code
            </a>
        </div>
    )
}

export default Footer