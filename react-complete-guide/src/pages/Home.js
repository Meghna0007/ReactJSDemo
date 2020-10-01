import React, { Component } from 'react';
class Home extends React.Component {
    render(){
        return(<div>
            
            <span className="login" >
<a href="#" className="button">Sign In</a>
<button className="button">Register</button>

<select>
<div className="icon-bar">
<a><i className="fa fa-globe"></i></a>
<option>English</option>
<option>French</option>
<option>Hindi</option>
</select>
<div className="login">
<a href="#" className="button">Sign In</a>
<button className="button">Register</button>
<div className="icon-bar">
<select>
<a><i className="fa fa-globe"></i></a>
<option>English</option>
<option>French</option>
<option>Hindi</option>
</select>
</div>
</div>
</div>
<br />
<br />
<div className="titlediv">
{/*  }<!-- The form --> */
<div className="search">
<form className="example" action="action_page.php" >
<input type="text" placeholder="Search.." name="search" /> 
<button type="submit"><i className="fa fa-search"></i></button>
<button align="right"> <i className="fa fa-shopping-cart style="color="orange"></i>
</button>
</form>

<div className="header">
<h1 className="header">ONLINE <span className="store">STORE</span></h1>
</div>


<div className="topnav">
  <a href="#Categories">Categories</a>
  <a href="#Shipping">Shipping</a>
  <a href="#Bestsellers">Bestsellers</a>
  <a href="#Sale">Sale</a>
  <a href="#New Arrivals">New Arrivals</a>
  <a href="#Coming soon">Coming soon</a>
  <a href="#Contact us">Contact us</a>
</div>

<div className="container">
<img src="assets/images/onlinePic.png" style="width:100%" alt="Online Pic" />
<button className="btn">View More</button>
</div>

<p>This demo online store is powered by X-Cart.</p>
<p>This service is for demo purpose only.</p>

<h3><B>Bestsellers</B></h3>
<table style-width="100%"  border="1px" solid ="#ebebe0" frame="box" cellpadding="0" cellspacing="0" border-collapse="collapse;">
<div className="content">
<tr>
<td style-border-right="1px" solid ="#ebebe0">
  <img src="assets/images/product2.png" alt="T-shirt" style="width:100%" />
</td>
<td style-border-right="1px" solid ="#ebebe0">
  <img src="assets/images/product1.png" alt="Yoda Plush Backpack" style="width:100%" />
</td>

<td style-border-right= "1px" solid ="#ebebe0">
  <img src="assets/images/product4.png" alt="Pyramid Brain Twist" style-width="100%" />
</td>

<td style-border-right="1px" solid ="#ebebe0">
  <img src="assets/images/product5.png" alt="Bare Metal Bender" style-width="100%" />
</td>

<td style-border-right="1px" solid ="#ebebe0">
  <img src="assets/images/product7.png" alt="Albert Einstein Action Figure" style-width="100%"/>
</td>

<td>
  <img src="assets/images/product9.png" alt="Mini Solar-Powered Car" style-width="100%" />
</td>
</tr>
<tr>
<td style-border-right="1px" solid= "#ebebe0">
  <p align left className ="card">T-shirt</p>
  <p className="price">$19.99</p>
  <span className="fa fa-star checked" style-color=" orange"></span>
  <span className="fa fa-star checked" style-color= "orange"></span>
  <span className="fa fa-star checked" style-color="orange"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
  <p>
<i className="fa fa-shopping-cart" style-color="orange"float="right" margin-right="9px"></i>
</p></td>
<td style-border-right="1px" solid="#ebebe0">
  <p align left className ="card">T-shirt</p>
  <p className="price">$19.99</p>
  <span className="fa fa-star checked" style-color="orange"></span>
  <span className="fa fa-star checked" style-color="orange"></span>
  <span className="fa fa-star checked" style-color ="orange"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
  <p>
<i className="fa fa-shopping-cart" style-color="orange"float="right" margin-right="9px"></i></p></td>
<td style-border-right= "1px" solid= "#ebebe0">
  <p align left className ="card">T-shirt</p>
  <p className="price">$19.99</p>
 <span className="fa fa-star checked" style-color="orange"></span>
  <span className="fa fa-star checked" style-color= "orange"></span>
  <span className="fa fa-star checked" style-color="orange"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
<p>
<i className="fa fa-shopping-cart" style-color="orange"float="right" margin-right="9px"></i></p></td>

<td style-border-right="1px" solid=" #ebebe0">
  <p align left className ="card">T-shirt</p>
  <p className="price">$19.99</p>
<span className="fa fa-star checked" style-color= "orange"></span>
  <span className="fa fa-star checked" style-color="orange"></span>
  <span className="fa fa-star checked" style-color="orange"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
<p> 
<i className="fa fa-shopping-cart" style-color="orange"float="right" margin-right="9px"></i></p></td>

<td style-border-right="1px" solid ="#ebebe0">
  <p align left className ="card">T-shirt</p>
  <p className="price">$19.99</p>
<span className="fa fa-star checked" style-color="orange"></span>
  <span className="fa fa-star checked" style-color=" orange"></span>
  <span className="fa fa-star checked" style-color="orange"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
<p>
<i className="fa fa-shopping-cart" style-color="orange"float="right" margin-right="9px"></i></p></td>

<td>
  <p align left className ="card">T-shirt</p>
  <p className="price">$19.99</p>
  <span className="fa fa-star checked" style-color="orange"></span>
  <span className="fa fa-star checked" style-color="orange"></span>
  <span className="fa fa-star checked" style-color="orange"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
  <p>
  <i className="fa fa-shopping-cart" style-color="orange"float="right" margin-right="9px"></i></p></td>
  </tr>
</div>
</table>

<table>
<tr>
<td><img src="assets/images/product2.png" alt="T-shirt" style-width="200px"height="200px" /></td>
<td><img src="assets/images/product1.png" alt="Yoda Plush Backpack" style-width="200px"height="200px"  /></td>
<td></td><td></td><td></td><td></td></tr>
<tr>
<td><p align="center" className ="card">Apparel</p></td>
<td><p align="center" className ="card">Toys</p></td>
<td></td><td></td><td></td><td></td></tr>
</table>



<h3><B>Featured products</B></h3>

<table style-width="100%" border="1px" solid="#ebebe0" frame="box" cellpadding="0" cellspacing="0" border-collapse="collapse">
<tr>
<td style-border-right="1px" solid="#ebebe0">
  <img src="assets/images/product2.png" alt="T-shirt" style-width="100%" />
</td>

<td style-border-right= "1px" solid=" #ebebe0">
  <img src="assets/images/product1.png" alt="Yoda Plush Backpack" style-width="100%" />
</td>

<td style-border-right="1px" solid="#ebebe0">
  <img src="assets/images/product4.png" alt="Pyramid Brain Twist" style-width="100%" />
</td>

<td style-border-right="1px" solid ="#ebebe0">
  <img src="assets/images/product5.png" alt="Bare Metal Bender" style-width="100%" />
</td>

<td style-border-right="1px" solid ="#ebebe0">
  <img src="assets/images/product7.png" alt="Albert Einstein Action Figure" style-width="100%" />
</td>

<td>
  <img src="assets/images/product9.png" alt="Mini Solar-Powered Car" style-width="100%" />
</td>
</tr>
<tr>
<td style-border-right=" 1px "solid=" #ebebe0">
  <p align left className ="card">T-shirt</p>
  <p className="price">$19.99</p>
  <span className="fa fa-star checked" style-color= "orange"></span>
  <span className="fa fa-star checked" style-color= "orange"></span>
  <span className="fa fa-star checked" style-color="orange"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
 <p>
<i className="fa fa-shopping-cart" style-color="orange"float="right"margin-right="9px"></i><p></td>
<td style-border-right="1px" solid="#ebebe0">
  <p align left className ="card">T-shirt</p>
  <p className="price">$19.99</p>
  <span className="fa fa-star checked" style-color=" orange"></span>
  <span className="fa fa-star checked" style-color="orange"></span>
  <span className="fa fa-star checked" style-color=" orange"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
 <p> 
<i className="fa fa-shopping-cart" style-color="orange"float="right" margin-right="9px"></i></p></td>
<td style-border-right="1px" solid="#ebebe0">
  <p align left className ="card">T-shirt</p>
  <p className="price">$19.99</p>
 <span className="fa fa-star checked" style-color="orange"></span>
  <span className="fa fa-star checked" style-color="orange"></span>
  <span className="fa fa-star checked" style-color=" orange"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
 <p>
<i className="fa fa-shopping-cart" style-color="orange"float="right" margin-right="9px"></i></p></td>

<td style-border-right="1px" solid ="#ebebe0">
  <p align left className ="card">T-shirt</p>
  <p className="price">$19.99</p>
<span className="fa fa-star checked" style-color="orange"></span>
  <span className="fa fa-star checked" style-color="orange"></span>
  <span className="fa fa-star checked" style-color="orange"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
 <p>
<i className="fa fa-shopping-cart" style-color="orange"float="right" margin-right=
"9px"></i></p></td>

<td style-border-right= "1px" solid ="#ebebe0">
  <p align left className ="card">T-shirt</p>
  <p className="price">$19.99</p>
<span className="fa fa-star checked" style-color= "orange"></span>
  <span className="fa fa-star checked" style-color="orange"></span>
  <span className="fa fa-star checked" style-color=" orange"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
<p>
<i className="fa fa-shopping-cart" style-color="orange"float="right" margin-right="9px"></i></p></td>

<td>
  <p align left className ="card">T-shirt</p>
  <p className="price">$19.99</p>
  <span className="fa fa-star checked" style-color= "orange"></span>
  <span className="fa fa-star checked" style-color= "orange"></span>
  <span className="fa fa-star checked" style-color= "orange"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
 <p> 
  <i className="fa fa-shopping-cart" style-color="orange" float="right" margin-right="9px"></i></p></td></tr>

</table>

<br />
<br />
<br />
<div style-background-color=" #ebebe0">
<div className="row">
 <div className="column">
  
    <pre style-font-size="20px">
      <b>Special products</b>

      New Arrivals
      Coming Soon
      Sale
      Bestsellers</pre>
 </div>
  
  <div className="column">


    <pre style-font-size="20px">
      <b>Information</b>

      Terms&Conditions
      Shipping
      Sitemap
    </pre>
  </div>
  
  <div className="column">
    
    <pre style-font-size="20px">
      <b>My Account</b>

      Sign In
      Register</pre>
  </div>
</div>
<div className="footer" style="background-color: #ebebe0;">

<pre style="font-size:20px">
       <b>Contacts<b>

       <i className="fa fa-map-marker" style="font-size:24px"></i>  Test Address, Test City TX,US,10001

       <i style="font-size:24px" className="fa">&#xf095;  Phone:(555)555-5555</i>

       <i style="font-size:24px" className="fa">&#xf1f1;</i>   <i style="font-size:24px" className="fa">&#xf1f0;</i>   <i style="font-size:24px" className="fa">&#xf1f4;</i>

       <i style="font-size:24px" className="fa">&#xf099;</i>   <i style="font-size:24px" className="fa">&#xf09a;</i>
</pre>
</div>

</div>

</div>
</div>
<br>
<br>
<div className="titlediv">
<!-- The form -->
<div>

<span className="search"></span>

<form className="example" action="action_page.php">
<input type="text" placeholder="Search.." name="search"> 
<button type="submit"><i className="fa fa-search"></i></button>
<button align="right"> <i className="fa fa-shopping-cart style="color="orange"></i>
</button>
</form>
<div className="header">
<h1 className="header">ONLINE <span className="store">STORE</span></h1>
</div>
</div>
<div className="topnav">
  <a href="#Categories">Categories</a>
  <a href="#Shipping">Shipping</a>
  <a href="#Bestsellers">Bestsellers</a>
  <a href="#Sale">Sale</a>
  <a href="#New Arrivals">New Arrivals</a>
  <a href="#Coming soon">Coming soon</a>
  <a href="#Contact us">Contact us</a>
  

</div>

<div className="container">
<img src="assets/assets/assets/assets/images/onlinePic.png" style="width:100%" alt="Online Pic"  />
<button className="btn">View More</button>
</div>

<p>This demo online store is powered by X-Cart.</p>
<p>This service is for demo purpose only.</p>

<h3><B>Bestsellers</B></h3>
<table style="width:100% ; border: 1px solid #ebebe0;" frame="box" cellpadding="0" cellspacing="0" border-collapse="collapse;">
<div className="content">

<tr>

<td style="border-right: 1px solid #ebebe0;">
  <img src="assets/assets/images/product2.png" alt="T-shirt" style="width:100%;"  />
</td>

<td style="border-right: 1px solid #ebebe0; ">
  <img src="assets/assets/images/product1.png" alt="Yoda Plush Backpack" style="width:100%"  />
</td>

<td style="border-right: 1px solid #ebebe0;">
  <img src="assets/assets/images/product4.png" alt="Pyramid Brain Twist" style="width:100%"  />
</td>

<td style="border-right: 1px solid #ebebe0;">
  <img src="assets/assets/images/product5.png" alt="Bare Metal Bender" style="width:100%"  />
</td>

<td style="border-right: 1px solid #ebebe0;">
  <img src="assets/assets/images/product7.png" alt="Albert Einstein Action Figure" style="width:100%"  />
</td>

<td>
  <img src="assets/assets/images/product9.png" alt="Mini Solar-Powered Car" style="width:100%"  />
</td>
</tr>
<tr>
<td style="border-right: 1px solid #ebebe0;">
  <p align left className ="card">T-shirt</p>
  <p className="price">$19.99</p>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
  <p>
<i className="fa fa-shopping-cart" style="color:orange;float:right; margin-right:9px"></i>
</p></td>
<td style="border-right: 1px solid #ebebe0;">
  <p align left className ="card">T-shirt</p>
  <p className="price">$19.99</p>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
  <p>
<i className="fa fa-shopping-cart" style="color:orange;float:right; margin-right:9px"></i></p></td>
<td style="border-right: 1px solid #ebebe0;">
  <p align left className ="card">T-shirt</p>
  <p className="price">$19.99</p>
 <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
<p>
<i className="fa fa-shopping-cart" style="color:orange;float:right; margin-right:9px"></i></p></td>

<td style="border-right: 1px solid #ebebe0;">
  <p align left className ="card">T-shirt</p>
  <p className="price">$19.99</p>
<span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
<p> 
<i className="fa fa-shopping-cart" style="color:orange;float:right; margin-right:9px"></i></p></td>

<td style="border-right: 1px solid #ebebe0;">
  <p align left className ="card">T-shirt</p>
  <p className="price">$19.99</p>
<span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
<p>
<i className="fa fa-shopping-cart" style="color:orange;float:right; margin-right:9px"></i></p></td>

<td>
  <p align left className ="card">T-shirt</p>
  <p className="price">$19.99</p>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
  <p>
  <i className="fa fa-shopping-cart" style="color:orange;float:right; margin-right:9px"></i></p></td>
  </tr>
</div>
</table>

<table>
<tr>
<td><img src="assets/assets/images/product2.png" alt="T-shirt" style="width:200px;height:200px"></td>
<td><img src="assets/assets/images/product1.png" alt="Yoda Plush Backpack" style="width:200px;height:200px"></td>
<td></td><td></td><td></td><td></td>
<tr>
<td><p align="center" className ="card">Apparel</p></td>
<td><p align="center" className ="card">Toys</p></td>
<td></td><td></td><td></td><td></td>
</table>


 
<h3><B>Featured products</B></h3>
<tr />
<table style="width:100% ; border: 1px solid #ebebe0;" frame="box" cellpadding="0" cellspacing="0" border-collapse="collapse;"  />
<tr />
<td style="border-right: 1px solid #ebebe0;" />
  <img src="assets/assets/images/product2.png" alt="T-shirt" style="width:100%">
</td>

<td style="border-right: 1px solid #ebebe0;">
  <img src="assets/assets/images/product1.png" alt="Yoda Plush Backpack" style="width:100%">
</td>

<td style="border-right: 1px solid #ebebe0;">
  <img src="assets/assets/images/product4.png" alt="Pyramid Brain Twist" style="width:100%">
</td>

<td style="border-right: 1px solid #ebebe0;">
  <img src="assets/assets/images/product5.png" alt="Bare Metal Bender" style="width:100%">
</td>

<td style="border-right: 1px solid #ebebe0;">
  <img src="assets/assets/images/product7.png" alt="Albert Einstein Action Figure" style="width:100%">
</td>

<td>
  <img src="assets/assets/images/product9.png" alt="Mini Solar-Powered Car" style="width:100%">
</td>
</tr>
<tr />
<td style="border-right: 1px solid #ebebe0;">
  <p align left className ="card">T-shirt</p>
  <p className="price">$19.99</p>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
 <p>
<i className="fa fa-shopping-cart" style="color:orange;float:right; margin-right:9px"></i><p></td>
<td style="border-right: 1px solid #ebebe0;">
  <p align left className ="card">T-shirt</p>
  <p className="price">$19.99</p>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
 <p> 
<i className="fa fa-shopping-cart" style="color:orange;float:right; margin-right:9px"></i></p></td>
<td style="border-right: 1px solid #ebebe0;">
  <p align left className ="card">T-shirt</p>
  <p className="price">$19.99</p>
 <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
 <p>
<i className="fa fa-shopping-cart" style="color:orange;float:right; margin-right:9px"></i></p></td>

<td style="border-right: 1px solid #ebebe0;">
  <p align left className ="card">T-shirt</p>
  <p className="price">$19.99</p>
<span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
 <p>
<i className="fa fa-shopping-cart" style="color:orange;float:right; margin-right:9px"></i></p></td>

<td style="border-right: 1px solid #ebebe0;">
  <p align left className ="card">T-shirt</p>
  <p className="price">$19.99</p>
<span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
<p>
<i className="fa fa-shopping-cart" style="color:orange;float:right; margin-right:9px"></i></p></td>

<td>
  <p align left className ="card">T-shirt</p>
  <p className="price">$19.99</p>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star checked" style="color: orange;"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
 <p> 
  <i className="fa fa-shopping-cart" style="color:orange;float:right; margin-right:9px"></i></p></td>
  </tr>

</table>

<br />
<br />
<br>
<div style="background-color: #ebebe0;">
<div className="row">
 <div className="column">
  
    <pre style="font-size:20px">
      <b>Special products</b>

      New Arrivals
      Coming Soon
      Sale
      Bestsellers</pre>
 </div>
  
  <div className="column">
    
    <pre style="font-size:20px">
      <b>Information</b>

      Terms&Conditions
      Shipping
      Sitemap
    </pre>
  </div>
  
  <div className="column">
    
    <pre style="font-size:20px">
      <b>My Account</b>

      Sign In
      Register</pre>
  </div>
</div>
<div className="footer" style="background-color: #ebebe0;">

<pre style="font-size:20px">
       <b>Contacts</b>

       <i className="fa fa-map-marker" style="font-size:24px"></i>  Test Address, Test City TX,US,10001

       <i style="font-size:24px" className="fa">&#xf095;  Phone:(555)555-5555</i>

       <i style="font-size:24px" className="fa">&#xf1f1;</i>   <i style="font-size:24px" className="fa">&#xf1f0;</i>   <i style="font-size:24px" className="fa">&#xf1f4;</i>

       <i style="font-size:24px" className="fa">&#xf099;</i>   <i style="font-size:24px" className="fa">&#xf09a;</i>
</pre>
</div>


</div>  
        </div>
        </div>);
    }
}
     export default Home;