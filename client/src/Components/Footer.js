import React from "react";
import './Footer.css'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <hr
                style={{
                    color: "white",
                    width: "80%",
                    margin: "auto",
                }}
            />
            <br />
            <p>Copyright ⓒ Communify {year}</p>
        </footer>
    );
}

export default Footer;