import './Mens-Multiple-products.css'
import MensCard from './MensCard'
import SData from './SData'
import Navbar from "./Navbar"
import { v4 as uuidv4 } from 'uuid';
const MensMultiple = () => {


    // console.log(SData)
    return (
        <>
        <Navbar/>
        <div style={{ marginTop: "100px" }}>
            <h1 className='main-1'>Men's Winter wear</h1>
            <p className='main-2'>110480 products</p>
            <div style={{ display: "flex", alignItems: "center", paddingBottom: "20px" }}>
                <select style={{ marginLeft: "65%", padding: "10px", width: "20%", fontSize: "14px" }}>
                    <option>Sort by :   Popularity </option>
                </select>

                <img src="https://www.tatacliq.com/src/plp/components/img/list.svg" alt="" style={{ marginLeft: "20px" }} />
            </div>


            <div className="main">
                <div className="left-section">
                    <div className='left-sec1'>
                        <p style={{ fontWeight: 600 }}>Filters</p>
                        <p style={{ color: "#DA1C5C", fontSize: "14px", fontWeight: 600 }}> Clear All</p>
                    </div>
                    <div className='left-sec2'>
                        <p style={{ marginBottom: "12px", fontWeight: 600 }}>Department</p>
                        <span style={{ padding: "5px 10px", backgroundColor: "#F5F5F5", borderRadius: "20px", fontSize: "14px", color: "grey" }}>Mens Clothing</span>
                    </div>
                    <div className='left-sec2'>
                        <p style={{ marginBottom: "12px", fontWeight: 600 }}>Category</p>
                        <span style={{ padding: "5px 10px", backgroundColor: "#F5F5F5", borderRadius: "20px", fontSize: "14px", color: "grey" }}>Casual Wear<i class="fa-solid fa-xmark fa-lg" style={{ marginLeft: "8px" }}></i></span>
                    </div>
                    <div className="left-sec3">
                        <p style={{ marginBottom: "12px", fontWeight: 600 }}>Product</p>
                        <div style={{ lineHeight: "45px" }}>
                            <div className='left-sec3-flex'>
                                <div className="sec3-left">
                                    <input type="radio" style={{ width: "20px", height: "20px" }} />
                                    <span style={{ marginLeft: "8px", fontWeight: 600 }}>T-Shirts & Polos</span>
                                </div>
                                <div style={{ color: "#C5C5C5", fontWeight: 600 }}>
                                    10439
                                </div>
                            </div>
                            <div className='left-sec3-flex'>
                                <div className="sec3-left">
                                    <input type="radio" style={{ width: "20px", height: "20px" }} />
                                    <span style={{ marginLeft: "8px", fontWeight: 600 }}>Shirts</span>
                                </div>
                                <div style={{ color: "#C5C5C5", fontWeight: 600 }}>
                                    1055
                                </div>
                            </div>
                            <div className='left-sec3-flex'>
                                <div className="sec3-left">
                                    <input type="radio" style={{ width: "20px", height: "20px" }} />
                                    <span style={{ marginLeft: "8px", fontWeight: 600 }}>Sweat Shirts</span>
                                </div>
                                <div style={{ color: "#C5C5C5", fontWeight: 600 }}>
                                    1022
                                </div>
                            </div>
                            <div className='left-sec3-flex'>
                                <div className="sec3-left">
                                    <input type="radio" style={{ width: "20px", height: "20px" }} />
                                    <span style={{ marginLeft: "8px", fontWeight: 600 }}>Jackets</span>
                                </div>
                                <div style={{ color: "#C5C5C5", fontWeight: 600 }}>
                                    1044
                                </div>
                            </div>
                            <div className='left-sec3-flex'>
                                <div className="sec3-left">
                                    <input type="radio" style={{ width: "20px", height: "20px" }} />
                                    <span style={{ marginLeft: "8px", fontWeight: 600 }}>Sweaters</span>
                                </div>
                                <div style={{ color: "#C5C5C5", fontWeight: 600 }}>
                                    855
                                </div>
                            </div>
                            <div className='left-sec3-flex'>
                                <div className="sec3-left">
                                    <input type="radio" style={{ width: "20px", height: "20px" }} />
                                    <span style={{ marginLeft: "8px", fontWeight: 600 }}>Shorts</span>
                                </div>
                                <div style={{ color: "#C5C5C5", fontWeight: 600 }}>
                                    24
                                </div>
                            </div>
                            <div className='left-sec3-flex'>
                                <div className="sec3-left">
                                    <input type="radio" style={{ width: "20px", height: "20px" }} />
                                    <span style={{ marginLeft: "8px", fontWeight: 600 }}>Blazers</span>
                                </div>
                                <div style={{ color: "#C5C5C5", fontWeight: 600 }}>
                                    596
                                </div>
                            </div>
                            <div className='left-sec3-flex'>
                                <div className="sec3-left">
                                    <input type="radio" style={{ width: "20px", height: "20px" }} />
                                    <span style={{ marginLeft: "8px", fontWeight: 600 }}>Others</span>
                                </div>
                                <div style={{ color: "#C5C5C5", fontWeight: 600 }}>
                                    32
                                </div>
                            </div>
                            <div className='left-sec3-flex'>
                                <div className="sec3-left">
                                    <input type="radio" style={{ width: "20px", height: "20px" }} />
                                    <span style={{ marginLeft: "8px", fontWeight: 600 }}>Trousers & Chinos</span>
                                </div>
                                <div style={{ color: "#C5C5C5", fontWeight: 600 }}>
                                    1022
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="left-sec4">
                        <span>Brand</span>
                        <i class="fa-solid fa-plus" style={{ color: "grey" }}></i>
                    </div>
                    <div className="left-sec4">
                        <span>Size</span>
                        <i class="fa-solid fa-plus" style={{ color: "grey" }}></i>
                    </div>
                    <div className="left-sec4">
                        <span>Type</span>
                        <i class="fa-solid fa-plus" style={{ color: "grey" }}></i>
                    </div>
                    <div className="left-sec4">
                        <span>Colour</span>
                        <i class="fa-solid fa-plus" style={{ color: "grey" }}></i>
                    </div>
                    <div className="left-sec4">
                        <span>Price</span>
                        <i class="fa-solid fa-plus" style={{ color: "grey" }}></i>
                    </div>
                    <div className="left-sec4">
                        <span>Fit</span>
                        <i class="fa-solid fa-plus" style={{ color: "grey" }}></i>
                    </div>
                    <div className="left-sec4">
                        <span>Discount</span>
                        <i class="fa-solid fa-plus" style={{ color: "grey" }}></i>
                    </div>
                    <div className="left-sec4">
                        <span>Fabric</span>
                        <i class="fa-solid fa-plus" style={{ color: "grey" }}></i>
                    </div>
                    <div className="left-sec4">
                        <span>Sleeve</span>
                        <i class="fa-solid fa-plus" style={{ color: "grey" }}></i>
                    </div>
                    <div className="left-sec4" >
                        <span>Collar</span>
                        <i class="fa-solid fa-plus" style={{ color: "grey" }}></i>
                    </div>
                    <div className="left-sec4" style={{ borderBottom: "1px solid grey" }}>
                        <span>Kurta</span>
                        <i class="fa-solid fa-plus" style={{ color: "grey" }}></i>
                    </div>

                </div>
                <div className="right-section">
                    {
                        SData.map((val) => {
                            return <MensCard imgsrc={val.imgsrc} primary={val.pri} secondary={val.sec} price1={val.price1} price2={val.price2} rating={val.rating} qty={val.qty} priceDisc={val.priceDisc} priceDrop={val.priceDrop} limStock={val.limStocks} userId={val.id}/>
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}
export default MensMultiple