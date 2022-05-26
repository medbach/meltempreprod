import React from 'react';
import Getapi from '../services/Getapi';
import { useParams } from 'react-router-dom';
const Detailannonces = () => {
    const params = useParams();
    console.log("paramss",params)
    const baseUrl = `http://localhost:3001/getdtannonces/${params.id}`;

    console.log("paramss",params);
    console.log("baseUrl",baseUrl);
   const  {data} = Getapi(baseUrl);


    return (
        <div>
            <div className='listing__card'>

                {data.title}<br/>
                {data.description}<br/>
                {data.prix}<br/>
                {data.ville}<br/>
                {data.cp}<br/>

            </div>
        </div>
    );
};

export default Detailannonces;