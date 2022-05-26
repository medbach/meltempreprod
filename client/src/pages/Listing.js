import React from 'react';
import Pagination from '../component/Pagination';
import Cardlisting from '../component/Cardlisting';

import Getapi from "../services/Getapi"

const Listing = () => {
    const baseUrl = "http://localhost:3001/getannonces";

    const {data,loading,currentPage,postesPerPage,paginate} = Getapi(baseUrl);
    const indexOfLastPost = currentPage * postesPerPage;
    const indexOfFirstPost = indexOfLastPost - postesPerPage;

    if (loading){
        var totalPostes = data.length;
        var currentPostes = data.slice(indexOfFirstPost , indexOfLastPost);
    }
    return (
        <div>
        <div className='page-listing-inner'>
            <img src="./img/page-listing.jpg" />
        </div>
    {loading ? (
        <ul>
            {currentPostes && currentPostes.map((e) => (
                <li className='card-listing col-md-12 ' key={e._id}>
                    <Cardlisting  data = {e} />  
                </li>  
            ))}

            <Pagination postesPerPage={postesPerPage} totalPostes={totalPostes} paginate={paginate} />

        </ul>




    ):(
        <div className='loadingclass'>
        <img src='./img/spinning-loading.gif' alt='Logo'/>
        </div>

    ) 
}

  
    </div>
    );
};

export default Listing;