import { useState } from "react";
import "./ProductForm.css";

function ProductForm(){

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');


    function titlechangeHandler(event){
        setTitle(event.target.value);
        console.log(event.target.value);

    }
    function datechangeHandler(event){
        setDate(event.target.value);
        console.log(event.target.value);
    }


    return (
        <form>
            <div>
                <label>Title</label>
                <input type="text" onChange={titlechangeHandler} ></input>
            </div>
            <div>
                <label>Date</label>
                <input type="date" min="2023-01-01" max="2023-12-12" onChange={datechangeHandler}></input>
            </div>
            <div>
                <button type="submit">Add Product</button>
            </div>
        </form>
    )
}

export default ProductForm;
