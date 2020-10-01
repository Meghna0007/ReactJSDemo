import React, { Component } from 'react';
class SpecialProducts extends React.Component {
    render(){
        return(<div style={{backgroundColor: "#ebebe0"}}>
                <div className="row">
    <div className="column">
 
        <h3>Special products</h3>
        <pre style={{fontSize:"20px"}}>{`
New Arrivals
Coming Soon
Sale
Bestsellers `}</pre>
    </div>
  
  <div className="column">
    
  <h3>Information</h3>
    <pre style={{fontSize:"20px"}} >{`     
Terms&Conditions
Shipping
Sitemap
     `} </pre>
  </div>
  
  <div className="column">
  <h3> My Account</h3>
    <pre style={{fontSize:"20px"}} >{`
Sign In
Register
         `}</pre>
  </div>
</div>
</div>
)
        }
    }
    export default SpecialProducts