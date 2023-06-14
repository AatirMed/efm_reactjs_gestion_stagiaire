import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from './Header';
import { useSelector } from "react-redux";

const Details = () => {
    const { nom } = useParams();
    const store = useSelector(res => res.List_Stagiaire)
    const [data, setdata] = useState({
        image: "",
        nom: "",
        prenom: "",
        filiere: ""
    })

    useEffect(() => {
        setdata({ ...store.filter(ele => ele.nom === nom).length>0?store.filter(ele => ele.nom === nom)[0]:{
            image: "",
            nom: "",
            prenom: "",
            filiere: ""
        } });
    }, [nom, store])

    return (
        <div>
            <Header />
           
            {data.nom === '' ? <h3>Stagaire not Found </h3> :
                <div> <br /> Hello <b>{data.nom} {data.prenom}</b>
                    <br /><br/>
                    Filiere : <b>{data.filiere}</b><br/>
                    <br />
                    <img src={data.image} alt={data.nom} />
                </div>
            }
        </div>
    )
}

export default Details;
