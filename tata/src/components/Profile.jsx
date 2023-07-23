import Footer from './Footer'
import Navbar from './Navbar'
import './Profile.css'
const Profile=()=>{
return(
   <>
   <Navbar/>
    <div style={{marginTop:"100px",padding:"80px 0",background:"#ECECEC"}}>
    <div className="profileMain">
        <div className="profile-1">
            <h5 className='p1'>Menu</h5>
            <div className='restP'>
            <div className='p2'>
                <img src="https://www.tatacliq.com/src/general/components/img/WL5.svg" alt="" />
                <p className='p21'>My Wishlist</p>
            </div>
            <div className='p2'>
                <img src="https://www.tatacliq.com/src/general/components/img/order-history.svg" alt="" />
                <p className='p21'>Order History</p>
            </div>
            <div className='p2'>
                <img src="https://www.tatacliq.com/src/account/components/img/Neupass_monochrome.svg" alt="" />
                <p className='p21'>Neu Pass</p>
            </div>
            <div className='p2'>
                <img src="https://www.tatacliq.com/src/account/components/img/addressbook.svg" alt="" />
                <p className='p21'>Address Book</p>
            </div>
            <div className='p2'>
                <img src="https://www.tatacliq.com/src/account/components/img/brand.svg" alt="" />
                <p className='p21'>Brands</p>
            </div>
            <div className='p2'>
                <img src="https://www.tatacliq.com/src/account/components/img/card.svg" alt="" />
                <p className='p21'>Saved Payments</p>
            </div>
            <div className='p2'>
                <img src="https://www.tatacliq.com/src/account/components/img/alert.svg" alt="" />
                <p className='p21'>Alerts & Coupons</p>
            </div>
            <div className='p2'>
                <img src="https://www.tatacliq.com/src/account/components/img/giftCards.svg" alt="" />
                <p className='p21'>Gift Card</p>
            </div>
            <div className='p2'>
                <img src="https://www.tatacliq.com/src/account/components/img/cliqCash.svg" alt="" />
                <p className='p21'>CliQ Cash</p>
            </div>
            <div className='p2'>
                <img src="https://www.tatacliq.com/src/account/components/img/addressbook.svg" alt="" />
                <p className='p21'>Manage Notifications</p>
            </div>
            <div className='p2' style={{marginTop:"20px"}}>
                <img src="https://www.tatacliq.com/src/account/components/img/settingsRed.svg" alt="" />
                <p className='p21' style={{color:"#ff1744"}}>Profile</p>
            </div>
            </div>

        </div>
        <div className="profile-2">
            <h4 className="p1">
                General Information
            </h4>
            <div className='profile-2-cont'>
            <div className="p2-name">
                <h3>Basic</h3>
                <p className='edit'>Edit</p>
            </div>
            <div className='p2-item'>
            <div className="p2-col1">
                <p>First Name</p>
                <p>Last Name</p>
                <p>Date of Birth</p>
            </div>
            <div className="p2-col2">
                <p className='p2-box'>Durvesh</p>
                <p className='p2-box' style={{marginTop:"13px",marginBottom:"10px"}}>Nakhawa</p>
                <p className='p2-box'>06-10-1998</p>
            </div>
            </div>
            <div className="p2-name">
                <h3>Contact Details</h3>
                <p className='edit'>Edit</p>
            </div>
  
            <div className='p2-item'>
            <div className="p2-col1">
                <p>Mobile Number</p>
                <p>Email</p>
             
            </div>
            <div className="p2-col2">
                <p className='p2-box'>+91-8369041343</p>
                <p className='p2-box' style={{marginTop:"13px"}}>durveshnakhawa27@gmail.com</p>
            </div>
            </div>
            <div className="p2-name">
                <h3>Personal Details</h3>
                <p className='edit'>Edit</p>
            </div>
            <div className='p2-item'>
            <div className="p2-col1">
                <p>Gender</p>
            </div>
            <div className="p2-col2">
                <p className='p2-box'>MALE</p>
            </div>
            </div>
            </div>
        </div>
        <div className="profile-3">
       <div className="p3-box">
        <div className="d-box">
            D
        </div>
        <h5 className="d-name">
            Durvesh Nakhawa
        </h5>
        <p className='d-email'>durveshnakhawa27@gmail.com</p>
       </div>
        </div>
    </div>
    </div>
    <Footer/>
    </>
)
}
export default Profile