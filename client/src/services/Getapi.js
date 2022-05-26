
import { useState,useEffect } from 'react';
import axios from "axios"

const Getapi = (baseUrl) => {

   

    const [data, setData] = useState({});
    const [loading, setLoding] = useState(false);

    const [numberPage, setnumberPage] = useState(0);

    const [currentPage,setcurrentPage] = useState(1);

    const [postesPerPage] = useState(5);


    const paginate = (setnumberPage) => setcurrentPage(setnumberPage) ;

    useEffect(() => {

        axios.get(baseUrl).then((res)=> {

            setData(res.data)
            setLoding(true)

        })

    }, [ ]);

    return {data,loading,currentPage,postesPerPage,numberPage ,paginate}
};

export default Getapi;