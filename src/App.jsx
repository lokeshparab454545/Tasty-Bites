import './App.css'
import Footer from './component/Footer/Footer'
import Hero from './component/Hero/Hero'
import Menu from './component/Menu/Menu'
import Navbar from './component/Navbar/Navbar'
import Review from './component/Review/Slider'
import Services from './component/Services/Services'
// import Testimonials from './component/Review/Testimonial'
// import Review from './component/Reviews/Review'
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Services />
      <Review />
      <Footer />

    </>
  )
}

export default App
