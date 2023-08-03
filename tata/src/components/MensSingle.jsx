import { useParams } from 'react-router-dom';
import './MensSngle.css'
import Navbar from './Navbar'
import SData from './SData';
import SData1 from './SData1';
import { useState } from 'react';
import { useEffect } from 'react';


const MensSingle=()=>{
const[singleData,setSingleData]=useState()
const[userEmail,setUserEmail]=useState("")
const {userId}=useParams();


useEffect(()=>{
    SData.forEach((data)=>{
        if(data?.id==userId){
        setSingleData(data)
    }
})
},[])

useEffect(()=>{
    SData1.forEach((data1)=>{
        if(data1?.id==userId){
        setSingleData(data1)
    }
})
},[])
// console.log(singleData,"Data")

// useEffect(()=>{
//   const user=JSON.parse(localStorage.getItem("Current-User"))
//   if(user.role==="Seller"){
//     setUser(true)
//   }
// },[])
useEffect(()=>{
const myUser=JSON.parse(localStorage.getItem("Current-User"))
setUserEmail(myUser.email)
},[])
// useEffect(()=>{
// const products=JSON.parse(localStorage.getItem("Products"))
// products.forEach((pro)=>{
// if(pro.id===userId){
//   setItem(pro)
// }
// })
// },[])

function addCart(){
    if(userEmail){
        let users=JSON.parse(localStorage.getItem("Users"))
        let user=JSON.parse(localStorage.getItem("Current-User"))
        for(let i=0;i<users.length;i++){
        if(users[i].email===user?.email){
        users[i].cart.push(singleData)
        alert("Item Added to Cart")
        localStorage.setItem("Users",JSON.stringify(users))
        break;
        }
        }
    }else{
        alert("Login for Shopping")
    }
    
    
    }
  
return(
    <>
    <Navbar/>
    <div style={{marginTop:"100px",paddingTop:"30px"}}>
     <div className="main">
        <div className="left-sections">
            <div className="left1">
            <img src={singleData?.imgsrc} alt="" />
            <img src={singleData?.imgsrc} alt="" />
            </div>
           <div className="left2">
           <img src={singleData?.imgsrc} />
            <img src={singleData?.imgsrc} />
            <img src={singleData?.imgsrc} />
           </div>
   
        </div>
        <div className="right-sections">
            <div className='right-sec1'>
           <img src="https://www.tatacliq.com/src/assets/ProductNudgeIcons/Wishlisted.svg" alt="" />
           <span style={{marginLeft:"5px"}}>Popular: Recently wishlisted 80 times</span>
            </div>
            <div className="right-sec2">
            <h3>{singleData?.pri}</h3>
            <p style={{color:"#4a4a4a",fontSize:"15px",marginTop:"3px",marginBottom:"8px"}}>{singleData?.sec}</p>
            <p style={{color:"grey"}}><b style={{marginRight:"5px",color:"black"}}>{singleData?.price1}</b>MRP:<del style={{marginRight:"5px"}}>{singleData?.pri2}</del><span style={{color:"#338715",fontWeight:"600"}}>53% Off</span></p>
            <p style={{color:"#4a4a4a",fontSize:"12px",marginTop:"3px",marginBottom:"8px"}}>Inclusive of all Taxes</p>
            <p style={{color:"#ff1744",fontSize:"13.5px",fontWeight:"600",marginBottom:"8px"}}>Use MENSEOSS coupon to get 10% off on cart value 1999/- and above.</p>
            <span style={{fontSize:"14px",fontWeight:600,border:"1px solid #49a862",borderRadius:"2px",padding:"2px 4px",backgroundColor:"#49a862",color:"white"}}>{singleData?.rating}<i class="fa-solid fa-star fa-xs" style={{color:"white",marginLeft:"6px"}}></i></span>
            <span style={{marginLeft:"5px"}}><b>14</b> Rating</span>
            </div>
<div className="right-sec3">
<div className="sec31">
    <h5>Select Size</h5>
    <p style={{color:"#ff1744",fontSize:"13.5px",fontWeight:"600"}}>Size Guide</p>
</div>
<div className="sec32">
    <p>XS</p>
    <p>S</p>
    <p>M</p>
    <p>L</p>
    <p>XL</p>
    <p>XXL</p>
</div>
<p className="sec33">Size out of stock? <span style={{color:"#ff1744",fontWeight:"600"}}>View Similar</span></p>
<div className="sec34">
Model is 6'0"/185 cms and is wearing an M size<br/>
100% Cotton, Machine wash
</div>
</div>
<div className="right-sec4">
    <h4 style={{marginBottom:"30px"}}>Available Offers</h4>
    <div className="sec41">
        <img src="https://assets.tatacliq.com/medias/sys_master/images/27678831411230.png" alt="" />
        <div>
        <p style={{fontWeight:550}}>10% Instant Discount on Kotak Bank Credit Cards only.</p>
        <p>Min Purchase: ₹2500  |  Max Discount: ₹1000  <span style={{color:"#4c74e3"}}>more</span></p>
        </div>
       
    </div>
    <div className="sec41">
    <img src="https://assets.tatacliq.com/medias/sys_master/images/27678831280158.png" alt="" />
        <div>
        <p style={{fontWeight:550}}>15% Instant Discount on ICICI Bank Credit Cards only.</p>
        <p>Min Purchase: ₹15000  |  Max Discount: ₹1000  <span style={{color:"#4c74e3"}}>more</span></p>
        </div>
       
    </div>
    <div className="sec41">
        <img src="https://assets.tatacliq.com/medias/sys_master/images/27678831280158.png" alt="" />
        <div>
        <p style={{fontWeight:550}}>10% Instant Discount on ICICI Net Banking</p>
        <p>Min Purchase: ₹25000  |  Max Discount: ₹1000  <span style={{color:"#4c74e3"}}>more</span></p>
        </div>
       
    </div>
    <div className="sec41">
        <img src="https://www.tatacliq.com/src/pdp/components/img/userOfferIcon.svg" alt="" />
        <div>
        <p style={{fontWeight:600}}>Use Code CLIQ500 get 10% off on min. Purchase of Rs.2500 | Max discount 500</p>
        <p>Use Code: CLIQ500 | Min Purchase: ₹2500  <span style={{color:"#4c74e3"}}>more</span></p>
        </div>
       
    </div>
</div>
<div className='right-sec5'>
<h4>Ship</h4>
<div className="sec51">
    <p>Uran, 400702</p>
    <p style={{color:'#da1c5c',fontWeight:600}}>Change pincode</p>
</div>
<div className="sec52">
    <img src="https://www.tatacliq.com/src/general/components/img/deliveryIcon.svg" alt="" />
    <span>Delivery by<b>   13th Jul</b> </span>
</div>
<div className="sec53">
    <img src="https://www.tatacliq.com/src/general/components/img/cod.svg" alt="" />
    <p>Cash on Delivery |  <b style={{color:"#338715"}}>Available</b> </p>
</div>
<div className="sec54">
    <img src="https://www.tatacliq.com/src/general/components/img/returnReplacementIcon.svg" alt="" />
    <p>30 Days Easy Return | <b style={{color:"#da1c5c"}}>Know more</b> </p>
</div>
<div className="sec55">
    <p>Sold By 1 Puma Sports India Pvt Ltd</p>
    <i class="fa-solid fa-angle-right"></i>
</div>
</div>
<div className="right-sec6">
<h4 style={{marginBottom:"20px"}}>Product Details</h4>
<p style={{fontSize:"15px"}}>Adorn vibrant hues of latest fashion trends with this cool black crew neck t-shirt from the latest collection of the iconic Puma. Well crafted in premium cotton for a soft</p>
<div className="sec61">
    <div className="fit">
        Fit
    </div>
    <p>Slim Fit</p>
</div>
<div className="sec61 ">
    <div className="fit">
        Pattern
    </div>
    <p>Print</p>
</div>
<div className="sec62">
    <div style={{display:"flex"}}>
    <img src="https://www.tatacliq.com/src/pdp/components/img/moreProduct.svg" alt="" />
        <div style={{marginLeft:"15px"}}>
        <p style={{fontWeight:600}}>More Product Information</p>
        <p>Manufacturing, Packaging & Import info</p>
        </div>


    </div>
    <i class="fa-solid fa-angle-right"></i>

</div>
</div>
<div className="right-sec7">
    <h3>Customers thought the product's fit was</h3>
    <div style={{display:"flex",marginTop:"15px",fontSize:"15px"}}>
    <div className="sec71">
        <h4 style={{fontSize:"16px"}}>As expected (88%)</h4>
        <p>Too tight (8%)</p>
        <p>Too loose (4%)</p>
    </div>
    <div className="sec72">
    <div className="line">
        <p className="line1A"></p>
        <p className="line1B"></p>
    </div>
    <div className="line">
        <p className="line2A"></p>
        <p className="line2B"></p>
    </div>
    <div className="line">
        <p className="line3A"></p>
        <p className="line3B"></p>
    </div>
    </div>
    </div>

</div>
<div className="right-sec8">
  <h4>From The Brand</h4> 
  <div className="sec81">
    <div className="sec811">
        <div className='flex811'>
    <img src="https://assets.tatacliq.com/medias/sys_master/images/31345385275422.png" alt="" />
    <p style={{fontSize:"15px"}}><b>Puma</b></p>
        </div>
<p style={{fontSize:"15px",color:"grey",marginTop:"10px",lineHeight:"25px"}}>Comfort and style are synonymous with Puma, making it one of the leading brands of apparel and sports shoes in the world. You can take your pick from the Puma apparels, footwear and accessories collection available here on Tata Cliq.</p>
    </div>
 <button className="sec812">
    Visit Store
 </button>

    </div> 
</div>
<div className="sec90">
<div className="sec91">
    <img src="https://www.tatacliq.com/src/pdp/components/img/new-share-icon.svg" alt="" />
</div>
<div className="sec91" style={{marginRight:0}}>
    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" alt="" />
</div>
<button className='sec92'>Buy Now</button>
<button className='sec93' onClick={addCart}>Add to Bag</button>
</div>

        </div>
     </div>
     <div className="bottom">

    
     <div className="bottom1">
            <h3 style={{fontWeight:"550"}}>RATINGS AND REVIEWS</h3>
            <div className="bottom1-content">
            <div className="div1">
                <span className='span4'>4</span>
                <img src="https://www.tatacliq.com/src/pdp/components/PdpBeautyDesktop/img/green-filled-star.svg" alt="" />
            <div className="div2">1 Rating</div>
            </div>
            </div>
        </div>

        <div className="bottomB">
    <div className="B1">
    <div className="point"></div>
    <div className='bott-line'></div>
    </div>
    <h3 className="B2">Shop more</h3>
    <div className="B1">
    <div className='bott-line'></div>
    <div className="point"></div>
    </div>
        </div>
 <div className="bottom2">
    <div className='bottom2-btn'>
   <p> More T-Shirts & Polos by Puma</p>
   <i class="fa-solid fa-chevron-right"></i>
    </div>
    <div className='bottom2-btn'>
   <p> More T-Shirts & Polos by Puma</p>
   <i class="fa-solid fa-chevron-right"></i>
    </div>
    <div className='bottom2-btn'>
   <p> More T-Shirts & Polos by Puma</p>
   <i class="fa-solid fa-chevron-right"></i>
    </div>
 </div>
 <h2 style={{marginTop:"50px",marginBottom:"20px"}}>More from Puma</h2>
 <div className="bottom3">
<div className="B3-item">
    <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017554565_437Wx649H_202305151656271.jpeg" alt="" />
    <p style={{fontSize:"15px"}}>Puma black slim fit printed Cotton T-Shirt</p>
    <p style={{fontSize:"14px"}}><b>Rs.749</b><del style={{color:"grey"}}>    Rs.1799   </del><span style={{color:"green"}}>53% Off</span></p>
</div>
<div className="B3-item">
    <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017553767_437Wx649H_202305151626221.jpeg" alt="" />
    <p style={{fontSize:"15px"}}>Puma black slim fit printed Cotton T-Shirt</p>
    <p style={{fontSize:"14px"}}><b>Rs.749</b><del style={{color:"grey"}}>   Rs.1799   </del><span style={{color:"green"}}>53% Off</span></p>
</div>
<div className="B3-item">
    <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000017311759_437Wx649H_202304210613231.jpeg" alt="" />
    <p style={{fontSize:"15px"}}>Puma black slim fit printed Cotton T-Shirt</p>
    <p style={{fontSize:"14px"}}><b>Rs.749</b><del style={{color:"grey"}}>   Rs.1799  </del><span style={{color:"green"}}>53% Off</span></p>
</div>
<div className="B3-item">
    <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016643506_437Wx649H_202303181347001.jpeg" alt="" />
    <p style={{fontSize:"15px"}}>Puma black slim fit printed Cotton T-Shirt</p>
    <p style={{fontSize:"14px"}}><b>Rs.749</b><del style={{color:"grey"}}>   Rs.1799    </del><span style={{color:"green"}}>53% Off</span></p>
</div>
<div className="B3-item">
    <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016728967_437Wx649H_202303181356291.jpeg" alt="" />
    <p style={{fontSize:"15px"}}>Puma black slim fit printed Cotton T-Shirt</p>
    <p style={{fontSize:"14px"}}><b>Rs.749</b><del style={{color:"grey"}}>    Rs.1799    </del><span style={{color:"green"}}>53% Off</span></p>
</div>
 </div>
 <h2 style={{marginTop:"50px",marginBottom:"20px"}}>Similar Products</h2>
 <div className="bottom3">
<div className="B3-item">
    <img src="https://img.tatacliq.com/images/i12/437Wx649H/MP000000018165931_437Wx649H_202306300208461.jpeg" alt="" />
    <p style={{fontSize:"15px"}}>Reebok Cotton T-Shirt</p>
    <p style={{fontSize:"14px"}}><b>Rs.749</b><del style={{color:"grey"}}>    Rs.1799   </del><span style={{color:"green"}}>53% Off</span></p>
</div>
<div className="B3-item">
    <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000018112402_437Wx649H_202306252337291.jpeg" alt="" />
    <p style={{fontSize:"15px"}}>Reebok Cotton T-Shirt</p>
    <p style={{fontSize:"14px"}}><b>Rs.749</b><del style={{color:"grey"}}>    Rs.1799   </del><span style={{color:"green"}}>53% Off</span></p>
</div>
<div className="B3-item">
    <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000018099535_437Wx649H_202306241226111.jpeg" alt="" />
    <p style={{fontSize:"15px"}}>Reebok Cotton T-Shirt</p>
    <p style={{fontSize:"14px"}}><b>Rs.749</b><del style={{color:"grey"}}>    Rs.1799   </del><span style={{color:"green"}}>53% Off</span></p>
</div>
<div className="B3-item">
    <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000018077788_437Wx649H_202306230403041.jpeg" alt="" />
    <p style={{fontSize:"15px"}}>Reebok Cotton T-Shirt</p>
    <p style={{fontSize:"14px"}}><b>Rs.749</b><del style={{color:"grey"}}>    Rs.1799   </del><span style={{color:"green"}}>53% Off</span></p>
</div>
<div className="B3-item">
    <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000018076423_437Wx649H_202306230307101.jpeg" alt="" />
    <p style={{fontSize:"15px"}}>Reebok Cotton T-Shirt</p>
    <p style={{fontSize:"14px"}}><b>Rs.749</b><del style={{color:"grey"}}>    Rs.1799   </del><span style={{color:"green"}}>53% Off</span></p>
</div>

 </div>
 </div>
    </div>
    </>
)
}
export default MensSingle 