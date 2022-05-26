import {useState,useEffect} from 'react';
import axios  from 'axios';
const Postapi = (baseUrl,values) => {
const [data, setdata] = useState({})

    

    useEffect(() => {
        axios.post(baseUrl,values)
        .then(response => setdata(response.data));
        console.log("postttttttttttttt");
    }, []);


    return {data}
};

export default Postapi;