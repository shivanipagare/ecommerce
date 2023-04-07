//import logo from './logo.svg';
import './App.css';
//import LogIn from './Login'
import Navbar from './Navbar/Navbar';
import Sidebar from './Components/Sidebar';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Roles from './pages/Roles';
import Category from './pages/Category';
import Subcategory from './pages/Subcategory';
import Retailers from './pages/Retailers';
import Customer from './pages/Customer';
import Offer from './pages/Offer';
import ThirdParty from './pages/ThirdParty';
//import { FaHome, FaUser, FaUsers, FaWindows, FaWindowRestore, FaShoppingBag, FaGifts } from 'react-icons/fa';
import {Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />


      {/* <div>
          
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/user">User</Link>
        <Link to="/roles">Roles</Link>
        <Link to="/category">Category</Link>
        <Link to="/subcategory">Subcategory</Link>
        <Link to="/retailers">Retailers</Link>
        <Link to="/customer">Customer</Link>
        <Link to="/offer">Offer</Link>

      </div>      */}

      {/* <div >
        <div className="main-container" >
          <section style={{height:"100%",backgroundColor:"rgb(0,0,55)"}}>


            <div className='sub-container' >
              <Link className="icon"><FaHome /></Link>
              <Link className='link-text' to="/dashboard" >Dashboard</Link><br />
            </div>
            

            <div className='sub-container'>
              <Link className="icon"><FaUser /></Link>
              <Link className='link-text' to="/user">User</Link><br />
            </div>


            <div className='sub-container'>
              <Link className="icon"><FaUsers /></Link>
              <Link className='link-text' to="/roles">Roles</Link><br />
            </div>

            <div className='sub-container'>
              <Link className="icon"><FaWindows /></Link>
              <Link className='link-text' to="/category">Category</Link><br />
            </div>

            <div className='sub-container'>
              <Link className="icon"><FaWindowRestore /></Link>
              <Link className='link-text' to="/subcategory">Subcategory</Link><br />
            </div>

            <div className='sub-container'>
              <Link className="icon"><FaUsers /></Link>
              <Link className='link-text' to="/retailers">Retailers</Link><br />
            </div>

            <div className='sub-container'>
              <Link className="icon"><FaShoppingBag /></Link>
              <Link className='link-text' to="/customer">Customer</Link><br />
            </div>

            <div className='sub-container'>

              <Link className="icon"><FaGifts /></Link>
              <Link className='link-text' to="/offer">Offer</Link>
            </div>



          </section>
        </div>
      </div> */}


      <div className='d-flex'>
        
<Sidebar/>
      <Routes>

        <Route path='/' element={<Dashboard />} />
        <Route path='/user' element={<User />} />
        <Route path='/roles' element={<Roles />} />
        <Route path='/category' element={<Category />} />
        <Route path='/subcategory' element={<Subcategory />} />
        <Route path='/retailers' element={<Retailers />} />
        <Route path='/customer' element={<Customer />} />
        <Route path='/offer' element={<Offer />} />
        <Route path='/thirdparty' element={<ThirdParty />} />
      </Routes>

      </div>
    </div>
  );
}

export default App;
