import './Wishlist.css'
function WishCard(props){
return(
<>

<div className="wish-item">
<img src={props.image} alt="" />
<div className="wish-text">
<button className="wish-btn">Add to Bag</button>
<h4 style={{fontSize:"15px"}}>{props.title}</h4>
<p   style={{fontSize:"14.5px",color:"grey"}}>{props.description}</p>
<p style={{fontSize:"14px",margin:"10px 0"}}><span><b>{props.price1}</b></span><span style={{textDecoration:"line-through",marginLeft:"5px",color:"grey"}}>{props.price2}</span><span style={{marginLeft:"5px",color:"green"}}>{props.discount}% Off</span></p>
</div>
</div>

</>


)
}
export default WishCard;
