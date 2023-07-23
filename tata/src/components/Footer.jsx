import './Home.css'
function Footer(){
return(
    <div className='footer'>
    <div style={{margin:"auto",width:"588px",height:"114px"}}>
    <img src="https://www.tatacliq.com/src/general/components/img/Frame22222.svg" alt="" />
    </div>
    <div style={{width:"80%",margin:"auto",display:"flex",justifyContent:"space-between",marginTop:"30px",fontSize:"14px",marginBottom:"50px"}}>
        <div>
            <p style={{fontWeight:650}}>Tata MarketPlace</p>
            <p>About us</p>
            <p>Careers</p>
            <p>Sell with us</p>
            <p>Terms of use</p>
        </div>
        <div>
            <p style={{fontWeight:650}}>Customer Service</p>
            <p>Shopping</p>
            <p>Offers & Promotions</p>
            <p>Payments</p>
            <p>Cancellation</p>
        </div>
        <div>
            <p style={{fontWeight:650}}>My Tata CLiQ</p>
            <p>My Account</p>
            <p>My Orders</p>
            <p>My Shopping</p>
            <p>My Wishlist</p>
        </div>
        <div style={{lineHeight:"25px"}}>
        <p style={{fontWeight:650}} >Tata CLiQ Offerings</p>
        Watches for Men | Campus Shoes | Sandals for Men | <br/>Sneakers for Men | Reebok Shoes | Cotton Kurtis | Woodland Shoes |Jumpsuits |<br/> Allen Solly |Sparx Shoes | Gold Rings | Formal Shoes for Men | Sports Shoes for Men |<br/>Wallets for Men |Ladies Watches | Trolley Bags | Handbags for Women |
        </div>
    </div>
    </div>
)
}
export default Footer