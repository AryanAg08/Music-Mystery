// import react from "react";
// import { getUserDetails } from "../../utils/1Google-Auth";

// export function MainPage({
//     history
// }) {
// const [user, setUser] = react.useState({
//         id: "",
//         name: "",
//         picture: "",
//         email: "",
//     });

//     const [loading, setLoding] = react.useState( true );
  
//     const name = user.name;
//     const Email = user.email;
//     const Img = user.picture;
//     const Id = user.id;

//     react.useEffect( () => {
//         getUserDetails()
//         .then(( { data } ) => {
//             setUser(data);
//             setLoding(false);
//         }).catch ((err) => {
//             // history.push("/"); 
//             setLoding(false);
//         });
//     }, [Id] );



//     window.sessionStorage.setItem("UserName", name);
  
    
//     return !loading && (
//         <          >
//<h1>User: {name}</h1>
//          <h1>Email: {Email}</h1>
//            <img  width="80px" src={Img}  alt="Profile"/>
//            <br></br>
         
//         </>
//     );
// }

import react, { useEffect, useState } from "react";
import "./index.css";
import Navbar from "../../Components/Navbar";
import M1 from "../../assets/music1.jpg";
import M2 from "../../assets/music2.jpg";
import M3 from "../../assets/music3.jpg";
import M4 from "../../assets/music4.jpg";

export function MainPage() {
  const current_theme = localStorage.getItem("current_theme");

  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  });
  return (
    <div className={`containerRR ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />

      <div className="gridflex">
      <div className="gamegrid">
        <div class="whole">
          <div class="thumbrow">
            <img src={M1} alt="" class="thumbnail" />
          </div>
          <div class="bottomgrid">
            <a href="/game1">
            <div class="title">LYRICAL ENIGMA DECIPHER</div>
            <div className="des">
            Find the missing lyrics and get great reward points.
            </div>
            </a>
          </div>
        </div>

        <div class="whole">
          <div class="thumbrow">
            <img src={M2} alt="" class="thumbnail" />
          </div>
          <div class="bottomgrid">
            <div class="title">SINGER SIGNATURE SEARCH</div>
            <div className="des">
            Discover the singer name with song playing in background.
            </div>
          </div>
        </div>

        <div class="whole">
          <div class="thumbrow">
            <img src={M3} alt="" class="thumbnail" />
          </div>
          <div class="bottomgrid">
            <div class="title">MELODY MIX-UP SOLVER</div>
            <div className="description">
            <div className="des">
            Uncramble the Jumbled mysterious Song name!
            </div>

          </div>
        </div>
        </div>

                <div class="whole">
          <div class="thumbrow">
            <img src={M4} alt="" class="thumbnail" />
          </div>
          <div class="bottomgrid">
            <div class="title">ARTIST CHRONICAL EXPEDITION</div>
            <div className="des">
            Guess the Artist name with its Journey depicted.
            </div>
          </div>
        </div>
        
      
    </div>
    </div>
    </div>
  );
}
