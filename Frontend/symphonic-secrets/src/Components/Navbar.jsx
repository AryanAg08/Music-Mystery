import React from 'react'
import './Navbar.css'
import logo_light from '../assets/logo-white.png'
import logo_dark from '../assets/logo-black.png'
import search_icon_light from '../assets/search-w.png'
import search_icon_dark from '../assets/search-b.png'
import toggle_light from '../assets/night.png'
import toggle_dark from '../assets/day.png'
import { getUserDetails } from "../utils/1Google-Auth";

const Navbar = ({theme, setTheme}) => {

    const [user, setUser] = React.useState({
                id: "",
                name: "",
                picture: "",
                email: "",
            });

            const [loading, setLoding] = React.useState( true );

            const name = user.name;
                const Email = user.email;
                const Img = user.picture;
                const Id = user.id;

        React.useEffect( () => {
        getUserDetails()
        .then(( { data } ) => {
            setUser(data);
            setLoding(false);
        }).catch ((err) => {
            // history.push("/"); 
            setLoding(false);
        });
    }, [Id] );

    window.sessionStorage.setItem("UserName", name);

    const toggle_mode = ()=>{
        theme == 'light'? setTheme('dark') : setTheme('light');

    }

  return (
    <div className='navbar'>
        <img src={theme == 'light' ? logo_light : logo_dark} alt='' className='logo'/>
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Discord</li>
            <li>About</li>
        </ul>

        <div className='search-box'>
            <input type='text' placeholder='Search'/>
            <img src={theme == 'light' ? search_icon_light:search_icon_dark} alt=''/>
         
        </div>

        <img onClick={()=>{toggle_mode()}}src={theme == 'light' ? toggle_light : toggle_dark} alt='' className='toggle-icon'/>
        <a href='http://localhost:5001/logout'><img src={Img} alt="profile-Image" className='toggle-icon' /> </a>
    </div>
    
  )
}

export default Navbar
