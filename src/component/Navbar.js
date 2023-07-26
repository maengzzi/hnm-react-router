import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({authenticate, setAuthenticate}) => {
    const menuList = ["여성","Divided","남성","신생아/유아","아동","H&M Home","Sale","지속가능성"];
    const navigate = useNavigate();
    const [width,setWidth] = useState(0);

    const loginOrLogout=()=>{
      authenticate==true?setAuthenticate(false):navigate('/login');
    }

    const goToMain=()=>{
      navigate("/");
    }

    const search=(event)=>{
      if(event.key == "Enter"){
        let keyword = event.target.value
        navigate(`/?q=${keyword}`);
      }
      
    }
 
    return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>

      <div className='nav-header'>
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)}/>
        </div>
        <div className='login-button' onClick={loginOrLogout}>
            <FontAwesomeIcon icon={faUser}/>
            <div>{authenticate==true?"로그아웃":"로그인"}</div>
        </div>
      </div>

      <div className='logo' onClick={goToMain}>
        <img width={60} src='/img/logo.png'/>
      </div>

      <div className='menu-area'>
        <ul className='menu-list'>
            {menuList.map((menu,index)=>(<li key={index}>{menu}</li>))}
        </ul>
        <div className='search'>
            <FontAwesomeIcon icon={faSearch}/>
            <input type='text' placeholder='제품검색' onKeyPress={(event)=>search(event)}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
