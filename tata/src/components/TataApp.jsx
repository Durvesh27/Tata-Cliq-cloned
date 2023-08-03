import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import MensMultiple from "./MensMultiple"
import MensSection from "./MensSection"
import MensSingle from "./MensSingle"
import Profile from "./Profile"
import WomenMultiple from "./WomenMultiple"
import KidsMultiple from "./KidsMultiple"
import HomeMultiple from "./HomeMultiple"
import BeautyMultiple from "./BeautyMultiple"
import GadgetMultiple from "./GadgetMultiple"
import JewelleryMultiple from "./JewelleryMultiple"
import AccessoriesMultiple from "./AccessoriesMultiple"
import Cart from "./Cart"
import Checkout from "./Checkout"
import Wishlist from "./Wishlist"
import Register from "./Register"
import Login from "./Login"
import AddProducts from "./AddProducts"


function TataApp(){
    return(
        <>
     <Routes>
     <Route exact path='/' element={<Home />} />
     <Route exact path='/mens-section' element={<MensSection />} />
     <Route exact path='/mens-multiple-product' element={<MensMultiple/>}/> 
     <Route exact path='/women-multiple-product' element={<WomenMultiple/>}/> 
     <Route exact path='/kids-multiple-product' element={<KidsMultiple/>}/> 
     <Route exact path='/home-multiple-product' element={<HomeMultiple/>}/> 
     <Route exact path='/beauty-multiple-product' element={<BeautyMultiple/>}/> 
     <Route exact path='/gadget-multiple-product' element={<GadgetMultiple/>}/> 
     <Route exact path='/jewellery-multiple-product' element={<JewelleryMultiple/>}/> 
     <Route exact path='/accessories-multiple-product' element={<AccessoriesMultiple/>}/> 
     <Route exact path='/mens-single-product/:userId' element={<MensSingle/>}/> 
     <Route exact path='/profile' element={<Profile/>}/>  
     <Route exact path='/cart' element={<Cart/>}/> 
     <Route exact path='/checkout' element={<Checkout/>}/> 
     <Route exact path='/wishlist' element={<Wishlist/>}/> 
     <Route exact path='/register' element={<Register/>}/> 
     <Route exact path='/login' element={<Login/>}/> 
     <Route exact path='/add-products' element={<AddProducts/>}/> 
     </Routes>

        </>
    
    )
}
export default TataApp