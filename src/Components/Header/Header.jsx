import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../Store/FireBaseContext';
import { auth } from '../../firebase/Config';
function Header() {
   const handleSell=(e)=>{
    e.preventDefault()
    navigate('/create')
   }
  const handleSignOut=(e)=>{
    e.preventDefault()
    try{
      auth.signOut().then(()=>{
        navigate('/login')
      })
    }catch(err){
  
    }
  }
  const {user}=useContext(AuthContext)
  const navigate=useNavigate()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        
        {/* <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div> */}
        <div className="loginPage" onClick={user ? null :()=>{navigate('/login')}}>
          <span>{user ? user.displayName : 'login'}</span>
          <hr />
        </div>
        {user && <span className="loginPage" onClick={handleSignOut} > Logout</span>}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={handleSell}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;