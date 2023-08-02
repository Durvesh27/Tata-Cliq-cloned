import cartlogo from './tataLogo.png'
import './Cart.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
function Cart(){
    const[Kart,setKart]=useState([])
    const[logged,setLogged]=useState(false)
    const[final,setFinal]=useState(0)
    const user=JSON.parse(localStorage.getItem("Current"))
    const data=JSON.parse(localStorage.getItem("Users"))
    // const{state,login,logout}=useContext(AuthContext)
    const router=useNavigate()
    useEffect(() => {
      if (user?.email) {
          setLogged(true);
      } else {
          setLogged(false);
      }
      },[])
    
    
    useEffect(()=>{
        if(user?.email){
            for(let i=0;i<data.length;i++) {
            if(data[i].email===user?.email){
            setKart(data[i].cart);
            break;
            }
            } 
            }else{
                alert("Please login")
            }
    },[])
    
    useEffect(()=>{
    if(Kart?.length){
    var totalPrice=0;
    Kart.forEach((i)=>{
    totalPrice+=i.price1;
    })
    }
    setFinal(totalPrice)
    },[Kart])

    

    function delItem(id){  
    let update=Kart.filter((item)=>{
    return id!==item.id
    })
    
    data.forEach((ele)=>{
      if(ele.email===user.email && ele.password===user.password){
        ele.cart=update;
    
      }
    })

    localStorage.setItem("Users",JSON.stringify(data))
    alert("Item Deleted")
    setKart(update)
    }
    
    function ClearCart(){
      data.forEach((ele)=>{
        if(ele.email===user.email && ele.password===user.password){
          ele.cart=[];
      
        }
      })
      localStorage.setItem("Users",JSON.stringify(data))
      alert("Proceed to Checkout")
      setKart([])
      }
    

    return(
        <>
{
    logged && Kart?.length ? 

<div className='Cart'>
<div className='cartParent'>
    <div className="CartNav">
        <div className='logo-div'>
        <img src={cartlogo} alt="" />
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

<div className="cart-section">
    <h1 className='sec-h1'>My Bag</h1>
    <div className="sec-right">
    <span className='city'>Uran,  400702</span>
    <span className='pin'>Change PIN code</span>
    </div>
</div>
<div className="cart-body">
    <h5 className='cart-top'>Apply a relevant coupon code here to avail any additional discount. Applicable cashback if any will be credited to your account as per T&C.</h5>
    <div className="cart-main">
        <div className="cart-left">
            <div className='cart-left1'>
                <img src="https://www.tatacliq.com/src/cart/components/img/Delivery.svg" alt="" />
                <p >Congratulations NeuPass User!! Your order is eligible for </p>
            </div>
            {/* <div className="cart-left2">
                <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017558261_437Wx649H_202305151927301.jpeg" alt="" />
                <div className='left2-box'>
                <div className='left21'>
                    <p>Titan NR1802NL02 Workwear Analog Watch for Men</p>
                    <img src="https://www.tatacliq.com/src/general/components/img/deliveryIcon.svg" alt="" />
                    <p style={{fontSize:"13px"}}>Delivery by 13th Jul  |  <span style={{color:"green",fontWeight:600}}>FREE</span></p>
                </div>
                <div className="left22">₹3245.00</div>
                <div className="left23">
                    <div>
                    <span style={{marginRight:"5px"}}>Quantity:</span>
                    <select>
                        <option >1</option>
                        <option >2</option>
                        <option >3</option>
                        <option >4</option>
                    </select>
                    </div>
                    <div className='left-23flex'>
                        <p style={{display:"flex",alignItems:"center"}}>
                        <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" alt=""/>
                        <p>Save to Wishlist</p>
                        </p>
                        <p>Remove</p>
                    </div>
                </div>
                </div>

            </div> */}
            {
                Kart?.length && Kart.map((pro)=>(

           
            <div className="cart-left2">
                <img src={pro?.imgsrc} alt="" />
                <div className='left2-box'>
                <div className='left21'>
                    <p>{pro?.sec}</p>
                    <img src="https://www.tatacliq.com/src/general/components/img/deliveryIcon.svg" alt="" />
                    <p style={{fontSize:"13px"}}>Delivery by 13th Jul  |  <span style={{color:"green",fontWeight:600}}>FREE</span></p>
                </div>
                <div className="left22">₹ {pro?.price1} <del style={{color:"grey",margin:"0 5px"}}>₹ {pro?.price1*2}</del><span style={{color:"green"}}>₹ {Math.round(pro?.price1/2)} Off</span></div>
               <p className='left221'><span style={{marginRight:"50px"}}>Colour:Black</span>  <span>Size:L</span></p>
                <div className="left23">
                    <div>
                    <span style={{marginRight:"5px"}}>Quantity:</span>
                    <select>
                        <option >1</option>
                        <option >2</option>
                        <option >3</option>
                        <option >4</option>
                    </select>
                    </div>
                    <div className='left-23flex'>
                        <p style={{display:"flex",alignItems:"center"}}>
                        <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" alt=""/>
                        <p>Save to Wishlist</p>
                        </p>
                        <p onClick={()=>delItem(pro?.id)}>Remove</p>
                    </div>
                </div>
                </div>

            </div>

                ))
}
            <div className="cart-left3">
            <button className='cart-btn' onClick={()=>router("/mens-multiple-product")}>
                Continue Shopping
            </button>
            </div>

        </div>
        <div className="cart-right">
        <div className="cart-right1">
            <div style={{display:"flex"}}>
                <img src="https://www.tatacliq.com/src/general/components/img/coupon.png" alt="" />
                <h4>Check for Coupons</h4>
            </div>
            <i class="fa-solid fa-angle-right"></i>
        </div>
        <div className="cart-right2">
           <div className="right2-flex">
           <div>Bag Total</div>
            <div>₹ {final}</div>
           </div>
           <div className="right2-flex">
           <div>Shipping Charge</div>
            <div style={{color:'#00964d'}}>FREE</div>
           </div>

           <div className="right2-flex">
           <div>Bag Subtotal</div>
            <div>₹ {final}</div>
           </div>
           <div className="right2-flex">
           <div>Product Discount(s)</div>
            <div>-₹ {Math.round(final/3)}</div>
           </div>
           <p style={{color:"#417505"}}>You will save ₹ {Math.round(final/3)} on this order</p>
        </div>
        <div className="cart-right-3">
            <div>
            <h3>Total</h3>
            <h3 style={{fontWeight:"600"}}>₹ {Math.round(final-final/3)}</h3>
            </div>
<button className='right-btn' onClick={ClearCart}>
    Checkout
</button>
        </div>
        <div className="cart-right4">
            <img src="https://www.tatacliq.com/src/cart/components/img/lock.svg" alt="" />
            <p>Safe and secure payments. Easy returns. 100% Authentic products.</p>
        </div>
        </div>
    </div>
</div>
<div className="cart-footer">
        <p style={{fontSize:"14px"}} className='footer2'>Need Help ?   Contact Us  |  FAQ</p>
        <div className='footer1'>
            <p style={{fontSize:"14px",fontWeight:600}} ><span style={{color:"#06b12d"}}>SSL</span> SECURED PAYMENT</p>
            <p style={{fontSize:"12px"}} >Your information is protected by 256-bit SSL encryption</p>
        </div>
    </div>
</div>:

<div>
<div className='cartParent'>
    <div className="CartNav">
        <div className='logo-div'>
        <img src={cartlogo} alt="" />
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


<div style={{height:"607px",display:"flex",justifyContent:"center",alignItems:"center"}}>
<div>
<h2 style={{textAlign:"center"}}>Cart Empty</h2>
<h3 style={{color:"grey"}}>Add Items to the Cart!</h3>
</div>

</div>
</div>
}
</>
    )

}
export default Cart;