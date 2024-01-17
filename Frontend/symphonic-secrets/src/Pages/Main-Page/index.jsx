import react from "react";
import { getUserDetails } from "../../utils/1Google-Auth";

export function MainPage({
    history
}) {
const [user, setUser] = react.useState({
        id: "",
        name: "",
        picture: "",
        email: "",
    });

    const [loading, setLoding] = react.useState( true );
  
    const name = user.name;
    const Email = user.email;
    const Img = user.picture;
    const Id = user.id;

    react.useEffect( () => {
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
  
    
    return !loading && (
        <>
         <h1>User: {name}</h1>
         <h1>Email: {Email}</h1>
           <img  width="80px" src={Img}  alt="Profile"/>
           <br></br>
         
        </>
    );
}