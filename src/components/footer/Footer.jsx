import React from 'react'
import "./footer.css"

const Footer = () => {
    const links = [
        "about",
        "skincare",
        "makeup",
        "supplements",
        "contact"
    ]
    return (
        <footer className="bg-dark text-light flex justify-between">
            <a className="text-2xl font-black text-red font-krona m-4" href='/'>Welly</a>

                <div className="flex items-center">
                    {links.map(link => (
                        <a href="/" className="m-4">{link}</a>
                    ))}
                </div>
        </footer>
        )
    }

    export default Footer
