import cartlogo from './tataLogo.png'
import './Cart.css'
import { Link } from 'react-router-dom';
function SecondNav(){
    return(
<div className='cartParent'>
    <div className="CartNav">
        <div className='logo-div'>
            <Link to="/">
            <img src={cartlogo} alt="" />
            </Link>
        </div>
        <div className='cart-flex'>
        <div className="cart-user">
        </div>
        <Link to='/profile'>
       <h5 style={{textDecoration:"none",color:"white"}}>Durvesh</h5>
        </Link>
       <i class="fa-solid fa-angle-down" style={{marginTop:"5px"}}></i>
        </div>

    </div>
</div>
    )

}
export default SecondNav;
