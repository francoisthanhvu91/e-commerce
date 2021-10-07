import React from 'react'
import Navbar from './../components/navbar'
import Footer from './../components/footer'

const Main = () => {
    return (
        <div>
            <Navbar/>
            <div className="container mx-auto">
                <p>Main</p>
            </div>
            <Footer />
        </div>
    )
}

export default Main
