import React, { useState } from 'react';
import axios, {post } from 'axios'

function Admin() {

    const [state, setState] = useState('');
    var Image
    
    const change=(e)=>{
        let file = e.target.files
        let reader = new FileReader();
        reader.readAsDataURL(file[0]);
        
        reader.onload=(e)=>{
            Image = e.target.result;
            
        }
    }

    const trriger=(e)=>{
        e.preventDefault();
        setState('Loading...')
        
        let brand = e.target.brand.value
        let image = Image
        let frameType = e.target.frameType.value
        let frameShape = e.target.frameShape.value;
        let bought = e.target.bought.value;
        let wishlisted = e.target.wishlisted.value;
        let rating = parseFloat(e.target.rating.value)
        let gender = e.target.gender.value;
        let color = e.target.color.value;
        let width = e.target.width.value;
        let newPrice = e.target.newPrice.value
        let oldPrice = e.target.oldPrice.value
        
        // console.log(rating);
        

        const url = 'https://my-frames.herokuapp.com/frame?'
        const formData = { brand, image, frameType, frameShape, bought, wishlisted, rating, gender, color, width, newPrice, oldPrice}
        // console.log(formData);
        
         return axios.post(url, formData).then((res) => {
            setState('Successful')
            alert('Submited')
        }).catch((err) => console.log(err))        
        
    }

    return (
      <div className="container mt-3">
        <h3 className="my-4">Admin Page</h3>
        <form onSubmit={trriger}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="brand">Brand</label>
              <input type="text" className="form-control" name="brand" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="img">Image</label>
              <input
                type="file"
                className="form-control btn-secondary"
                name="img"
                onChange={(e) => change(e)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="frameType">Frame Type</label>
              <input type="text" className="form-control" name="frameType" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="frameShape">Frame Shape</label>
              <input type="text" className="form-control" name="frameShape" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="wishlisted">Wishlisted</label>
              <input type="number" className="form-control" name="wishlisted" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="bought">No. of Purchases</label>
              <input type="number" className="form-control" name="bought" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="gender">For Gender</label>
              <input type="text" className="form-control" name="gender" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="color">Color</label>
              <input type="text" className="form-control" name="color" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="rating">
                Star Rating (enter float value between 0 and 5)
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                className="form-control"
                name="rating"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="width">Width in 'mm'</label>
              <input type="number" className="form-control" name="width" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="newPrice">New Price</label>
              <input type="number" className="form-control" name="newPrice" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="oldPrice">Old Price</label>
              <input type="number" className="form-control" name="oldPrice" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary px-4">
            {" "}
            Submit{" "}
          </button><p>{state}</p>
        </form>
      </div>
    );
}

export default Admin