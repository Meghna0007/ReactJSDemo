import React from 'react';
import SignIn from './components/SignIn';
import Search from './components/Search';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Add from './components/Add';
import Table1 from './components/Table1';
import Table2 from './components/Table2';
import SpecialProducts from './components/SpecialProducts';
import Footer from './components/Footer';
import Table3 from './components/Table3';

function App(){
    
    return(
        <div>
        <div>
        <SignIn/>
        </div>
    <br />
        <div>
        <Search/>
        </div>
    <br />
    <div>
        <Header/>
    </div>
    
    <div>
        <Navbar/>
    </div>
    <div>
        <Add/>
    </div>
    <div>
        <Table1/>
    </div>
    <div>
        <Table3 />
    </div>
    <div>
        <Table2/>
    </div>
    <div>
        <SpecialProducts/>
    </div>
    <div>
        <Footer/>
    </div>
    
     </div>   

    );

}
export default App;

    