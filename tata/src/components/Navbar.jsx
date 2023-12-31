import { Link, useNavigate } from 'react-router-dom'
import './Home.css'
import logo from './tataLogo.png'
import { useState } from 'react'
import Login from './Login'
import Register from './Register'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from './AuthContext'
function Navbar() {
  const{logout,state}=useContext(AuthContext)
  const [toggle, setToggle] = useState(false)
  const [getLogged, setGetLogged] = useState(false)
  const[logged,setLogged]=useState(false)
  const[show ,setShow]=useState(true)
  // const[type,showType]=useState(false)
  const router=useNavigate();
  
  function getProfile() {
    setToggle(!toggle)
  }
  
  useEffect(()=>{
    if(state?.user?.email){
     setLogged(true)
    }
  },[state])
  // console.log(state)
  // useEffect(()=>{
  // const users=JSON.parse(localStorage.getItem("Users"))
  // if(users?.role==="Seller"){
  //   showType(true)
  // }
  // },[])
  return (
    <div>
      <div className="body">
        <div className="navbar">
          <div className='left'>
            <img src={logo} alt="" onClick={()=>router("/")}/>
          </div>
          <div className='right'>

            <div className='right1'>
              <div style={{ marginLeft: "5px" }}>Tata CLiQ Luxury</div>
              <div style={{ display: "flex" }} className='p-list'>
                <p>CLiQ Cash</p>
                <p>Gift Card</p>
                <p>CLiQ Care</p>
                <p>Track Orders</p>
                <div  onMouseLeave={()=>setToggle(!toggle)} >
{
  logged? 

                  
                  <div onMouseEnter={getProfile} style={{display:"flex"}}>
                  <div className="cart-user" style={{width:"20px",height:"20px",marginRight:"5px"}}>
                  </div>
                 <h5 style={{textDecoration:"none",color:"white",fontSize:"13px"}}>{state.user.name}</h5>
                 {/* <i class="fa-solid fa-angle-down" style={{marginTop:"5px"}}></i> */}
                  </div>:
                  <p onMouseEnter={getProfile} >Sign-in/Sign-up</p>

}            


                  <div className='profile-box' style={toggle ? { display: "block" } : { display: "none" }}>
                    <button className='login-btn' onClick={() => setGetLogged(!getLogged)}>Login/Register</button>
                    <div className='login-flex'>
                      <div className='login-icon-img'>
                        <img src="https://www.tatacliq.com/src/general/components/img/profile.png" alt="" />
                      </div>
                      <span style={{ color: "black" }} onClick={()=>router('/profile')}>My Account</span>
                    </div>
                    <div className='login-flex'>
                      <div className='login-icon-img'>
                        <img src="https://www.tatacliq.com/src/general/components/img/order-history.svg" alt="" />
                      </div>
                      <span style={{ color: "black" }}>Order History</span>
                    </div>
                    <div className='login-flex'>
                      <div className='login-icon-img' >
                        <img src="https://www.tatacliq.com/src/general/components/img/WL7.svg" alt="" />

                      </div>
                      <span style={{ color: "black" }}>My Wishlist</span>
                    </div>
                    <div className='login-flex'>
                      <div className='login-icon-img'>
                        <img src="https://www.tatacliq.com/src/account/components/img/alert.svg" alt="" />

                      </div>
                      <span style={{ color: "black" }}>Alert & Coupon</span>
                    </div>
                    <div className='login-flex'>
                      <div className='login-icon-img'>
                        <img src="https://www.tatacliq.com/src/account/components/img/giftCards.svg" alt="" />

                      </div>
                      <span style={{ color: "black" }}>Gift Card</span>
                    </div>
                    <div className='login-flex' style={{ marginBottom: 0 }}>
                      <div className='login-icon-img'>
                        <img src="https://www.tatacliq.com/src/account/components/img/cliqCash.svg" alt="" />

                      </div>
                      {
                        logged?
                        <span style={{ color: "black" }} onClick={logout}>CLiQ Cash</span>:
                        <span style={{ color: "black" }} >CLiQ Cash</span>
                        
                      }
                      
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className='right2'>
              <div className='nav-sel'>
                <div>Categories</div>
                <i class="fa-solid fa-angle-down angle1" ></i>
                <div className='category-box'>
                  <div className='category-index'>
                    <h4><Link to="/mens-multiple-product">Men's Fashion</Link></h4>
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                  <div className='category-index'>
                    <h4><Link to="/women-multiple-product">Women's Fashion</Link></h4>
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                  <div className='category-index'>
                    <h4><Link to="/kids-multiple-product">Kids's Fashion</Link></h4>
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                  <div className='category-index'>
                    <h4><Link to="/home-multiple-product">Home & Kitchen</Link></h4>
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                  <div className='category-index'>
                    <h4><Link to="/beauty-multiple-product">Beauty</Link></h4>
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                  <div className='category-index'>
                    <h4><Link to="/gadget-multiple-product">Gadgets</Link></h4>
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                  <div className='category-index'>
                    <h4><Link to="/jewellery-multiple-product">Jewellery</Link></h4>
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                  <div className='category-index' style={{ marginBottom: 0 }}>
                    <h4><Link to="/accessories-multiple-product">Accessories</Link></h4>
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                </div>
              </div>
              <div className='nav-sel'>
                <div>Brands</div>
                <i class="fa-solid fa-angle-down"></i>
              </div>

              <input type="search" placeholder='Search for Categories' className='nav-ip' />
              <i className="fa-solid fa-magnifying-glass fa-lg" style={{ position: "absolute", top: "29px", left: "311px", color: "white", opacity: 0.6 }}></i>
         
              <div>
              <Link to='/wishlist'>
                <i className="fa-regular fa-heart fa-2x" style={{ padding: "0 10px", color: "white" }}></i>
              </Link>
              <Link to="/cart" >
                <i className="fa-solid fa-bag-shopping fa-2x" style={{ padding: "0 10px", color: "white" }}></i>
               
              </Link>
              </div>
              

            </div>
          </div>
        </div>

      </div>

      {/* <div className='category-box'>
      <div className='category-index'>
      <h4>Men's Fashion</h4>
      <i class="fa-solid fa-angle-right"></i>
      </div>
      <div className='category-index'>
      <h4>Women's Fashion</h4>
      <i class="fa-solid fa-angle-right"></i>
      </div>
      <div className='category-index'>
      <h4>Kids's Fashion</h4>
      <i class="fa-solid fa-angle-right"></i>
      </div>
      <div className='category-index'>
      <h4>Home & Kitchen</h4>
      <i class="fa-solid fa-angle-right"></i>
      </div>
      <div className='category-index'>
      <h4>Beauty</h4>
      <i class="fa-solid fa-angle-right"></i>
      </div>
      <div className='category-index'>
      <h4>Gadgets</h4>
      <i class="fa-solid fa-angle-right"></i>
      </div>
      <div className='category-index'>
      <h4>Jewellery</h4>
      <i class="fa-solid fa-angle-right"></i>
      </div>
      <div className='category-index' style={{marginBottom:0}}>
      <h4>Accessories</h4>
      <i class="fa-solid fa-angle-right"></i>
      </div>
    </div> */}
      {
        show?

        getLogged &&
        <Login logged={getLogged} setLogged={setGetLogged} show={show} setShow={setShow}/>:
        getLogged &&
        <Register logged={getLogged} setLogged={setGetLogged} show={show} setShow={setShow}/>
      }
    </div>
  )
}
export default Navbar