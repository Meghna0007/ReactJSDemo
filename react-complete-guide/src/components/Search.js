import React, { Component } from 'react';
class Search extends React.Component {
    render(){
        return(
            <div>
                <br /><br />
               
                
<div className = "titlediv">
<span className="search">
<form className="example" action="action_page.php">
<input type="text" placeholder="Search.." name="search" /> 
<button type="submit"><i className="fa fa-search"></i></button>
<button align="right"> <i className="fa fa-shopping-cart" style-color="orange" ></i>
</button>
</form>
</span>
</div>
</div>
        )
        }
    }

    export default Search