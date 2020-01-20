import React,{useState,useEffect,useRef} from 'react';
import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'
import { Link } from 'react-router-dom';

// Query Header Logo
const query = gql`
{
  settingPage(where:{id:"ck5fe1kldzmqq0869wonvwob4"}){
    headerLogo{
      url
    }
  }
}
`


const Header = () => {

  // Init Component State
  const [menu,setMenu] = useState(false)
  
  // Toggle Menu Function
  const toggleMenu = (event) => {
    event.preventDefault()
    setMenu(!menu)
  }

    // Function for Sticky Header
    const nav = useRef(null)
    useEffect(()=>{
      window.addEventListener('scroll',()=>{
          if(window.pageYOffset > 50){
            nav.current.classList.add('sticky')
          }else{
            nav.current.classList.remove('sticky')
          }
      })  
    })

    // Graphql Hooks
    const {loading,data,error} = useQuery(query)
    if(loading||error) return null
    console.log(data)
    const {settingPage} = data

    return ( 
      <header ref={nav}>
          <div class="menu_logo" >
            {/* LOGO */}
            <img src={settingPage.headerLogo.url} alt=""/>
            
            {/* MNEU ICON */}
            <div className="menuIcon" onClick={toggleMenu}>
              <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
            
            {/* MENU */}
            <nav class={`menu ${menu ?"d-block":""}`} >
                <li onClick={toggleMenu}><Link to="/">home</Link></li>
                <li onClick={toggleMenu}><Link to="/menu">menu</Link></li>
                <li onClick={toggleMenu}><Link to="/reservation">reservation</Link></li>
                <li onClick={toggleMenu}><Link to="/contact">contact</Link></li>
            </nav>
          </div>
      </header>
    );
}
 
export default Header;