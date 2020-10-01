import React, { Component } from 'react';
class Footer extends React.Component {
    render(){
        return(
         <div>
         <div className="footer"  style={{backgroundColor:"#ebebe0"}}>
         <p style={{fontSize:"20px"}}>
         <b>Contacts</b>
         <br />
         <br />
         <i className="fa fa-map-marker" style={{fontSize:"24px"}}>  Test Address, Test City TX,US,100000</i><br /><br />
         <i style={{fontSize:"24px"}} className="fa">&#xf095;  Phone:(555)555-5555</i><br /><br />
         <i style={{fontSize:"24px"}} className="fa">&#xf1f1;</i>   <i style={{fontSize:"24px"}} className="fa">&#xf1f0;</i>   <i style={{fontSize:"24px"}} className="fa">&#xf1f4;</i>
         <i style={{fontSize:"24px"}} className="fa">&#xf099;</i>   <i style={{fontSize:"24px"}}className="fa">&#xf09a;</i>
        </p>
        </div>
        </div>)
    }
}
export default Footer
