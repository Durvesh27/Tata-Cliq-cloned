
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import SData from './SData';
import SData1 from './SData1';

const AddProducts = () => {
    const [addProduct, setAddProduct] = useState({ pri: "", price1: "", imgsrc: "", category: "Other" })
    const router = useNavigate()

    const handleChange = (e) => {
        setAddProduct({ ...addProduct, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
    

        e.preventDefault()
        if (addProduct.pri && addProduct.price1 && addProduct.imgsrc && addProduct.category) {
            if(addProduct.category=="Men"){
            let proData=JSON.parse(localStorage.getItem("Products"))
            proData.push(addProduct)
            localStorage.setItem("Products",JSON.stringify(proData))
            }
            
            // if(addProduct.category=="Women"){
            // SData1.push(addProduct)
            // }
            // const proArray = JSON.parse(localStorage.getItem("Products")) || []
            const randomId=uuidv4()
            addProduct["id"]=randomId;
            // proArray.push(addProduct)
            // localStorage.setItem("Products", JSON.stringify(proArray))
            // setProductData({ name: "", price: "", image: "", category: "Other" })
            alert("Product Added Successfully")
            // router('/all-products')
        } else {
            alert("Please fill the all fields.")
        }
    }

    const selectRole = (e) => {
        setAddProduct({ ...addProduct, ["category"]: e.target.value })
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("Current-User"))
        // if (user) {
        //     if (user?.role === "Buyer") {
        //         alert("You are not a Seller.")
        //         router('/')
        //     }
        // } else {
        //     alert("You are not logged user")
        // }
    }, [])

  return (
<div style={{ width: "30%", margin: "auto", lineHeight: "30px", paddingTop:"100px" }}>
          <h2 style={{textAlign:"center",marginBottom:"15px"}}>Add Products</h2>
        <form onSubmit={handleSubmit} style={{padding:"20px",border:"1px solid black"}}>
            <label>Product Name</label><br />
            <input type="text" name="pri" onChange={handleChange} className='input' /><br />

            <label>Product Price</label><br />
            <input type="number" name="price1" className='input' onChange={handleChange}/><br />

            <label>Product Catgory</label><br />
            <select onChange={selectRole} style={{ padding: "5px 0", width: "100%" }} className='input'>
                <option value="Other">Other</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
                <option value="Accessories">Accessories</option>
            </select><br />

            <label>Product Image</label><br />
            <input type="text" name="imgsrc" onChange={handleChange} className='input' /><br />

            <input type='submit' value="Add Product" />
        </form>
    </div> 
   

  )
}

export default AddProducts
