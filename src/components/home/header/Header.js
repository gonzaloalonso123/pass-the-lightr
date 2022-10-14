import React from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../../../images/logo.png';
import './Header.css';


function Header({showDev}) {


  let navigate = useNavigate();


  return (
    <div className='header'>
        <img src={Logo} alt="" className='header-logo'/>
        {showDev  && <button onClick={() => navigate('datadevcreate')}>DEV-InputData</button>}
    </div>
  )
}

export default Header;