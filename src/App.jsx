import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
// import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
/** 
 * Thêm vào dòng 24 để hiện Testimonials
 * <Testimonials />
*/
const App = () => {
    return (
        <>
            <Header />
            <About />
            <Experience />
            <Portfolio />

            <Contact />
            <Testimonials />
            <Footer />
        </>
    )
}

export default App