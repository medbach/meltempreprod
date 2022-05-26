import React from 'react';
import axios from "axios";
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Cardlisting from '../component/Cardlisting';
import Pagination from '../component/Pagination';
import Getapi from "../services/Getapi"
const TeplateSearch = () => {

    const [data, setdata] = useState({});
    const [loadnewdata, setloadnewdata] = useState(false);

    const parames = useParams();
    const {ville} = parames;
    const villeLower = ville.toLowerCase();

    console.log("villeLower",villeLower);

    const baseUrl2 = `http://localhost:3001/search/ville/${villeLower}`;

    const {loading,currentPage,postesPerPage,paginate} = Getapi(baseUrl2);

    useEffect(() => {
        axios.get(baseUrl2).then((res) => {
            setdata(res.data);
            setloadnewdata(true);
        })
    }, [ville]);

    const indexOfLastPost = currentPage * postesPerPage;
    const indexOfFirstPost = indexOfLastPost - postesPerPage;

    console.log("data bach baseUrl",baseUrl2);
    console.log("data bach",data);
    console.log("data bach baseUrl",baseUrl2);
    
    if (loadnewdata ){
        var totalPostes = data.length;
        var currentPostes = data.slice(indexOfFirstPost , indexOfLastPost);
    }


    console.log("1data ville",data);
    console.log("1ville",ville);
    console.log("1ville",loading);
    console.log("1parames is",parames);
    console.log("1loadingloading",loading)
    return (
        <div>
           <h1> Votre recherche a {loading} {ville} </h1>
           <h2>Nombre de bien(s) {data.length}</h2>

            {loading ? (
                 <span> 

        {currentPostes && currentPostes.map((e) => (
        

        <li className='card-listing col-md-12 ' key={e._id}>
            
            <Cardlisting  data = {e} />

        </li>


))}
<Pagination postesPerPage={postesPerPage} totalPostes={totalPostes} paginate={paginate} />
                 </span>
                    
            ) : (<span>
                <span>loading ...</span>
                
            </span>)}

           
  
           
        </div>
    );
};

export default TeplateSearch;