import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Head from './Components/Head/Head';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import Second from './Components/Second/Second';
import Third from './Components/Third/THIRD.JSX';
import Title from './Components/Title/Title';
import AboutUs from './Components/AboutUs/AboutUs';
import AboutUsCards from './Components/AboutUsCards/AboutUsCards';
import AboutUsTwo from './Components/AboutUsTwo/AboutUsTwo';
import Services from './Components/Services/Services';
import Appointment from './Components/Appointment/Appointment';
import Departments from './Components/Departments/Departments';
import TestimonialsOne from './Components/TestimonialsOne/TestimonialsOne';
import Doctors from './Components/Doctors/Doctors';
import Slider from './Components/Slider/Slider';
import Pricing from './Components/Pricing/Pricing.jsx';
import Accordions from './Components/Accordion/Accordion.jsx';
import ContactUs from './Components/ContactUs/Contactus.jsx';
import Footer from './Components/Footer/Footer.jsx';




function App() {



  return (
    <>
    <header className='sticky-top'>
    <Head/>
    <NavBar/>
    </header>
    <Hero/>
    <Second/>
    <Third/>
    <Title Title='About Us' subTitle='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit' />
    <AboutUs/>
    <AboutUsCards/>
    <AboutUsTwo/>
    <Title Title='Services' subTitle='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit' />
    <Services/>
    <Appointment/>
    <Title Title='Departments' subTitle='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'/>
    <Departments/>
    <Title Title='Testimonials' subTitle='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'/>
    <TestimonialsOne/>
    <section style={{backgroundColor : '#f7fcfc'}}>
    <Title Title='Doctors' subTitle='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'/>
    <Doctors/>
    </section>
    <Title Title='Gallary' subTitle='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'/>
    <Slider/>
    <Title Title='Pricing' subTitle='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'/>
    <Pricing/>
    <section style={{backgroundColor : '#f7fcfc'}}>
    <Title Title='Frequently Asked Questions' subTitle='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'/>
    <Accordions/>
    </section>
    <Title Title='Contact' subTitle='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'/>
    <ContactUs/>
    <section style={{backgroundColor : '#f7fcfc'}}>
    <Footer/>
    </section> 
    </>
  )
}

export default App
