// import { fireEvent } from '@testing-library/react';
import React from 'react';
import PropTypes from 'prop-types';
// import { NavLink} from 'react-router-dom';
// import About from './About';



function Navbar(props) {
 
    let[over, setOver] = React.useState(false);

    
    let dropDownStyle = {
      position: "relative", display: "inline-block", padding: "0px 5px 0px 5px"
    }
    
    let dropBtnStyle = {
      color:'black',
      backgroundImage: "linear-gradient(to bottom right,red,orange,yellow,green,blue,indigo,violet)",opacity:'0.7',
      borderRadius:"5px",
      padding: "5px 7px 5px 7px",
      width: "90px",
      fontSize: "0.98rem",
      fontWeight: "bold",
      marginLeft: "1rem"
    }
    
    let dropDownContentStyle = {
      display: "none", 
      width: "90px", padding: '7% 10% 7% 15%',borderRadius:"5px",
      position: "absolute", backgroundColor: "pink",color:"black",
      boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",zIndex: '1',
      marginLeft: "1rem", marginTop: "1px"
    }
    
    if(over){
      dropDownContentStyle.display="block"
    }
    else{
      dropDownContentStyle.display="none"
    }

  
  
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
        <div className="container-fluid">
          {/* <NavLink className="navbar-brand" to="/">TextUtils</NavLink> */}
          <a className="navbar-brand" href="#">TextUtils</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <NavLink className="nav-link active" aria-current="page" to="/">{props.firstElement}</NavLink> */}
                <a className="nav-link active" aria-current="page" href="#">{props.firstElement}</a>
              </li>
              {/* <li className="nav-item"> */}
                {/* <NavLink className="nav-link" to="/about">{props.title}</NavLink> */}
                {/* <a className="nav-link" href="/about">{props.title}</a> */}
              {/* </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
  
            {/* below is code of dropDown Menu */}
              <div className="dropDown" style={dropDownStyle}>
                <button className="dropBtn" style={dropBtnStyle} onMouseOver={()=>setOver(true)} onMouseOut={()=>setOver(false)}>Themes</button>
                <div className="dropDownContent" style={dropDownContentStyle} onMouseOver={()=>setOver(true)} onMouseOut={()=>setOver(false)}>
                  <input type="checkbox" id="normalMode" onClick={props.themeChange}/>
                  <label htmlFor="normalMode" style={{paddingLeft: '5px'}}>Light</label>
                  <br />
                  <input type="checkbox" id="redMode" onClick={props.themeChange}/>
                  <label htmlFor="redMode" style={{paddingLeft: '5px'}}>Red</label>
                  <br />
                  <input type="checkbox" id="blueMode" onClick={props.themeChange}/>
                  <label htmlFor="blueMode" style={{paddingLeft: '5px'}}>Blue</label>
                  <br />
                  <input type="checkbox" id="greenMode" onClick={props.themeChange}/>
                  <label htmlFor="greenMode" style={{paddingLeft: '5px'}}>Green</label>
                </div>
              </div>
            {/* above is code of dropDown Menu */}
          </div>
        </div>
       
      </nav> 
  );
}


Navbar.propTypes = {
    title : PropTypes.string,
    firstElement : PropTypes.string
};

Navbar.defaultProps={
    title : 'props.title',
    firstElement : 'props.firstElement'
}
export default Navbar;

