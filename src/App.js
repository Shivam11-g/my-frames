import React, {useState} from 'react';
import { useLocation, Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import Admin from './admin'
import Card from './frameCard'



function App() {

  const [Data, setData] = useState([]);
  const [New, setNew] = useState('');
  const [state, setState] = useState('');
  
  const [Full, setFull] = useState('');
  const [Half, setHalf] = useState('');
  const [Rimless, setRimless] = useState('');
  
  const [Rect, setRect] = useState('');
  const [Round, setRound] = useState('');
  const [Cat, setCat] = useState('');
  const [Sqr, setSqr] = useState('');
// const queryString = require('query-string');
// var parsed = queryString.parse(this.props.location.search);
// console.log(parsed.param); // replace param with your own 


//   const url = new URLSearchParams(useLocation().search)
//   console.log(url);
  
  return (
    <BrowserRouter>
      <div>
        <center><Link to='/list' >List</Link>  <Link className='ml-5 ' to='/admin'>Admin</Link></center>
        <Route path='/list' component={List}></Route>
        <Route path='/admin' component={Admin}></Route>
      </div>
    </BrowserRouter>
  );




function List(props) {


    const parsed = props.location.search;
    console.log(props.location.search); // replace param with your own 

    const handelSubmit = (e) => {
      e.preventDefault()
      setState('loading...')

        const url = 'https://my-frames.herokuapp.com/frame?' + New + parsed + Full + Half + Rimless + Sqr + Rect + Round + Cat;
        console.log(url);
        setFull('')
        setHalf('')
        setRimless('')
        setNew('')
        setSqr('')
        setRound('')
        setCat('')
        setRect('')
        
        fetch(url)
            .then(function (data) {
                return data.json();
            })
            .then((json) => {     
                setState('')           
                setData(json);
            });
    }

    return ( 
    <div>

      <form id="search"  onSubmit={handelSubmit}>
        <div className="dropdown  m-1 " >
          <button className="btn btn-secondary dropdown-toggle px-4" type="button" data-toggle="dropdown">Sort
            <span className="caret" /></button>
          <ul className="dropdown-menu">
            <li><a onClick={event => setNew('&price=1')}>Price: Low to High</a></li>
            <li><a onClick={event => setNew('&price=-1')}>Price: High to Low</a></li>
            <li><a onClick={event => setNew('&addedOn=true')}>New Arrival</a></li>
            <li><a onClick={event => setNew('&bought=true')}>Bestseller</a></li>
            <li><a onClick={event => setNew('&saving=true')}>Biggest Saving</a></li>
          </ul>
        </div>

      <span style={{float:'right', position:'relative', top:"-30px", right:"120px", fontWeight:'bold'}}>Filter</span>

       <div className="mx-3" style={{float:'right'}}>Frame Type
          <div className="form-check ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" onClick={event => setFull('&frameType=Full Rim')} />
            <label className="form-check-label" htmlFor="inlineCheckbox1" >Full Rim</label>
          </div>
          <div className="form-check ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" onClick={event => setHalf('&frameType=Half Rim')} />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Half Rim</label>
          </div>
          <div className="form-check ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" onClick={event => setRimless('&frameType=Rimless')} />
            <label className="form-check-label" htmlFor="inlineCheckbox3">Rimless</label>
          </div>
        </div>
        <div style={{float:'right'}}>Frame Shape
          <div className="form-check ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox4" onClick={event => setSqr('&frameShape=square')} />
            <label className="form-check-label" htmlFor="inlineCheckbox4">Square</label>
          </div>
          <div className="form-check ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox5" onClick={event => setRect('&frameShape=rectangle')} />
            <label className="form-check-label" htmlFor="inlineCheckbox5" >Rectangle</label>
          </div>
          <div className="form-check ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox6" onClick={event => setRound('&frameShape=round')} />
            <label className="form-check-label" htmlFor="inlineCheckbox6">Rounded</label>
          </div>
          <div className="form-check ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox7" onClick={event => setCat('&frameShape=cat eye')} />
            <label className="form-check-label" htmlFor="inlineCheckbox7">Cat eye</label>
          </div>
        </div>

        <center><button onSubmit={handelSubmit} type="Submit" className="btn btn-primary my-3 px-5 py-2" > Show</button> {state}</center>
      </form>

      <div className = "d-flex justify-content-around flex-wrap" >
            {Data.map((val, index) => { console.log(val);
              return (
                <Card
                  available={val.available}
                  image={val.image}
                  brand={val.brand}
                  frameShape = {val.frameShape}
                  frameType = {val.frameType}
                  bought = {val.bought}
                  wishlisted = {val.wishlisted}
                  rating={val.rating}
                  addedOn={val.addedOn}
                  gender={val.gender}
                  color={val.color}
                  width={val.width}
                  saving={val._saving}
                  newPrice={val.newPrice}
                  oldPrice={val.oldPrice}
                  key={index}
                />
              );
            })}
      </div> 
    </div>
    )
}

}




export default App;
