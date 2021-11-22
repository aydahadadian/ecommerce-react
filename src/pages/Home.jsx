import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Category from '../components/Category'
import { categories } from '../data'
import { categories2 } from '../data'
import Products from '../components/Products'
import ProSlider from '../components/ProSlider'
import {popularProducts} from "../data"
import Slider from '../components/Slider'


const Home = () => {
   
    
    return (
        <>
            <Navbar />
            <Announcement /> 
            <Slider />
            <Category categoryData={categories} hover="light"/>
            
             <Products />

           <ProSlider data={popularProducts} title="Recommended for you"/>
          
            <Category categoryData={categories2} hover="dark"/>
            <Newsletter />
            <Footer />
            
        </>
    )
}

export default Home
