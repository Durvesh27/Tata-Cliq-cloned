import SecondNav from "./SecondNav";
import './Checkout.css'
function Checkout(){
return(
    <div>
   <SecondNav/>
   <div className="check-parent">
   <div className="checkout">
  <h1 className="check-title">Checkout</h1>
  <div className="check-flex">
    <div className="check-left">
     <div className="check-sec1">
        <p className="check-sec11">
            <span className="check-span1">1</span>
            <h4>Add Shipping Address</h4>
        </p>
        <p className="check-sec12">
            Clear all
        </p>
     </div>

     <div className="check-sec2">

        <div className="check-sec21">
            <div className="check21-sec1">
            <input type="text" placeholder="First Name(Required)*" className="input1 in-width"/>
        <input type="text" placeholder="Last Name(Required)*" className="input1 in-width"/>
            </div>

<input type="text" placeholder="City/District(Required)*" className="input1" style={{width:"100%"}}/>
<input type="text" placeholder="State(Required)*" className="input1" style={{width:"100%"}}/>
<select className="input1" style={{width:"100%",backgroundColor:"#F5F2F3"}}>
    <option >Landmark</option>
</select>
<div className="check-sec3">
        <div style={{display:"flex",alignItems:"center"}}>
        <input type="radio" className="width20"/>
        <span style={{fontSize:"14px",fontWeight:600,marginLeft:"8px"}}>Home</span>
        </div>
        <div style={{display:"flex",alignItems:"center"}}>
        <input type="radio" className="width20"/>
        <span style={{fontSize:"14px",fontWeight:600,marginLeft:"8px"}}>Office</span>
        </div>
 
     </div>
        </div>

        <div className="check-sec21" style={{marginTop:"13px"}}>
        <input type="text" placeholder="Enter your Pincode(Required)*" className="input1" style={{width:"100%"}}/>
        <textarea placeholder="Flat/House No., Floor, Building/Company/Apartment Name, Road/Street Name, Area, Colony,Sector, Village (Required)*" className="input1" style={{width:"100%",height:"100px",fontFamily:"arial",fontSize:"13.5px",resize:"none",marginTop:"25px"}}></textarea>
        <input type="text" placeholder="Enter 10 digit mobile number" className="input1" style={{width:"100%",paddingLeft:"40px"}}/>
        <b className="b">+91</b>
        </div>

     </div>
<div className="check-sec4">
  <h5 style={{color:"rgb(255, 23, 68)",fontSize:"14px"}}>Cancel</h5>  
  <button className="check-btn1">
  Save & Continue
  </button>
</div>
 
    </div>
    <div className="check-right">
        <div style={{padding:"30px",background:"white"}}>
        <div className="cart-right2" style={{padding:0}} >
           <div className="right2-flex">
           <div>Bag Total</div>
            <div>₹5244.00</div>
           </div>
           <div className="right2-flex">
           <div>Shipping Charge</div>
            <div style={{color:'#00964d'}}>FREE</div>
           </div>

           <div className="right2-flex">
           <div>Bag Subtotal</div>
            <div>₹5244.00</div>
           </div>
           <div className="right2-flex">
           <div>Product Discount(s)</div>
            <div>-₹1260.00</div>
           </div>
           <p style={{color:"#417505"}}>You will save ₹1260.00 on this order</p>
        </div>
        <div className="cart-right-3" style={{padding:0,paddingTop:"20px"}}>
           
            <h3>Total Payable</h3>
            <h3 style={{fontWeight:"600"}}>₹ 3984</h3>
        
        </div>
     
        </div>
        <div className="cart-right4">
            <img src="https://www.tatacliq.com/src/cart/components/img/lock.svg" alt="" />
            <p>Safe and secure payments. Easy returns. 100% Authentic products.</p>
        </div>
    </div>
  </div>
  </div>
   </div>

    </div>
)
}
export default Checkout;