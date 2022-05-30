import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux'
import Pagination from '../component/Pagination';
import Cardlisting from '../component/Cardlisting';
import Getapi from "../services/Getapi"
import axios from 'axios';
import { addAnnonces } from '../features/annonces/annoncesSlice';



const Listing = () => {

    const [numberPage, setnumberPage] = useState(0);

    const [currentPage,setcurrentPage] = useState(1);

    const [postesPerPage] = useState(5);

    const [datares, setdatares] = useState({});
    const [pretload, setpretload] = useState(false);
    const paginate = (setnumberPage) => setcurrentPage(setnumberPage) ;
    const baseUrl = "http://localhost:3001/getannonces";

    // const {data,loading,currentPage,postesPerPage,paginate} = Getapi(baseUrl);
    const indexOfLastPost = currentPage * postesPerPage;
    const indexOfFirstPost = indexOfLastPost - postesPerPage;

    // if (loading){
    //     var totalPostes = data.length;
    //     var currentPostes = data.slice(indexOfFirstPost , indexOfLastPost);
    // }


    const dispatch = useDispatch();
    useEffect(() => {

        axios.get(baseUrl).then((res) => {
            setdatares(res.data);
            setpretload(true)
        });
        dispatch(addAnnonces(datares)) 
         
    }, [pretload]);

    console.log("data Redux",datares)

    if (pretload){
        var totalPostes = datares.length;
        var currentPostes = datares.slice(indexOfFirstPost , indexOfLastPost);
    }


    return (
        <div>
        <div className='page-listing-inner'>
            <img src="./img/page-listing.jpg" />
        </div>

        {pretload ?
        (
            <>
                <ul>
                    {currentPostes && currentPostes.map((e) => (
                        <li className='card-listing col-md-12 ' key={e._id}>
                            <Cardlisting  data = {e} />  
                        </li>
                    ))}
                    <Pagination postesPerPage={postesPerPage} totalPostes={totalPostes} paginate={paginate} />
                </ul>
            </>
        )
        :
        (
            <>
                Loading
            </>  
        )
        }
       

    {/* {loading ? (
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
} */}

  
    </div>
    );
};

export default Listing;