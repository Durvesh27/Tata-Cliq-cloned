import { Link } from 'react-router-dom'
import './Home.css'
import logo from './tataLogo.png'
function Navbar() {
  return (
    <>
      <div className="body">
        <div className="navbar">
          <div className='left'>
            <img src={logo} alt="" />
          </div>
          <div className='right'>

            <div className='right1'>
              <div style={{ marginLeft: "5px" }}>Tata CLiQ Luxury</div>
              <div style={{ display: "flex" }} className='p-list'>
                <p>CLiQ Cash</p>
                <p>Gift Card</p>
                <p>CLiQ Care</p>
                <p>Track Orders</p>
                <p>Sign-in/Sign-up</p>
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
      <div className='category-index' style={{marginBottom:0}}>
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
             <Link to='/wishlist'>
              <i className="fa-regular fa-heart fa-2x" style={{ padding: "0 10px",color:"white" }}></i>
              </Link>
              <Link to="/cart" >
                <i className="fa-solid fa-bag-shopping fa-2x" style={{ padding: "0 10px", color: "white" }}></i>
              </Link>
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
    </>
  )
}
export default Navbar