import React ,{useState}from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from './Header';
import {AjouterStagiaire} from '../store';
import { useNavigate } from "react-router-dom";
const Ajouter = () => {
    const store = useSelector(res=>res.List_Stagiaire);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [stagiaire, setStagaire] = useState({
        image: "",
        nom: "",
        prenom: "",
        filiere: ""
      })

const handChangeValue = (e)=>{
    const {name,value} = e.target;
    setStagaire({...stagiaire,[name]:value})
}

    const AddInRedux = ()=>{
        let c = 0;
        if(stagiaire.name === '' ){
            c++;
        }
        if(stagiaire.image === '' ){
            c++;
        }
        if(stagiaire.prenom === '' ){
            c++;
        }
        if(stagiaire.filiere === '' ){
            c++;
        }
        if(store.filter(ele=>ele.nom === stagiaire.nom).length>0){
            c++;
        }
        if(c===0){
            console.log(stagiaire)
            dispatch(AjouterStagiaire(stagiaire));
            navigate('/');
        }
        
    }

    return (
        <div>
        <Header/>
    <br/>
            <h3>Ajouter Stagaire</h3>
            <div>
            <input type="text" placeholder="Saisir le lien de l'image" name="image" onChange={handChangeValue}/><br/> <br/>
            <input type="text" placeholder="Saisir le nom" name="nom" onChange={handChangeValue}/><br/> <br/> 
            <input type="text" placeholder="Saisir le prenom" name="prenom" onChange={handChangeValue}/><br/> <br/> 
            <input type="text" placeholder="Saisir la filiere" name="filiere" onChange={handChangeValue}/><br/> <br/>  
            <button onClick={AddInRedux}>Ajouter</button>
            </div>
        </div>
    )
}

export default Ajouter;