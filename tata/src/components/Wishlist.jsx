import Footer from "./Footer";
import Navbar from "./Navbar";
import WishCard from "./WishCard";
import './Wishlist.css'
import Wish from './Wish.jsx';
function Wishlist() {
  return (
    <>
      <Navbar />
      <div className="wishlist">
        <div className="wish">
          <h1 className="wish-h1">Wishlist</h1>
          <div className="wish-flex">
            {
              Wish.map(item =>
                <WishCard image={item.image} title={item.title} description={item.description} price1={item.price1} price2={item.price2} discount={item.discount} />
              )
            }
          </div>

        </div>

      </div>

      <Footer />
    </>
  )
}
export default Wishlist;