import React from "react";
import Header from './Header';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Home = ()=>{
    const store = useSelector(res=>res.List_Stagiaire)
    const navigate = useNavigate();
return(
    <div>
    <Header/>
    <br/>
    <div className="all_s">
    {store.map((ele,key)=><div className="one_s" key={key} onClick={()=> navigate(`/${ele.nom}`)}>
        <img src={ele.image} alt={ele.nom} />
        <h3>{ele.nom}</h3>
        </div>)}
    </div>
    </div>
)
}

export default Home;
