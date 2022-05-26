import React, { useState } from 'react';
import Getapi from '../services/Getapi';

import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { useNavigate } from 'react-router-dom';
const Search = () => {

    const baseUrl = "http://localhost:3001/getannonces";


    const {data,loading} = Getapi(baseUrl);

    const [filteredData,setFiltreddata] = useState([]);
    const [valuesWords,setvaluesWords] = useState();
    const [closeserch , setClosesearch] = useState(false);


    console.log("ddddd",data);

    

    

    // var VillenotDuplique = [...new Set(res)]
  


    const handelfilter = (e) => {

        const searchWord = e.target.value;
        setvaluesWords(searchWord);

        const newFilter = data.filter((e)=> {
            return e.ville.toLowerCase().includes(searchWord.toLowerCase())
        })


        console.log("before",newFilter)


        

        setFiltreddata(newFilter);
        console.log("after set",setFiltreddata)
        if(searchWord !==0){
            setFiltreddata(newFilter);
            setClosesearch(true);
        }
        else {
            setFiltreddata([]);
            setClosesearch(false);
        }
    }

    const handelclickclose = (valuesWords) =>{
        console.log("click ok")
        setvaluesWords(" ");
        setFiltreddata([]);
    }
    console.log("filter data",filteredData)

    const resultat = filteredData.map ((e)=> {
        return e.ville
    })

    console.log("resultat",resultat)

    const filteredDataNotDuplicate = [...new Set(resultat)]

    console.log("resultat",filteredDataNotDuplicate)

    const handlclickVille = (e) => {
        console.log(e.target.outerText)
        const clickVille = e.target.outerText;
        setvaluesWords(clickVille);
        setClosesearch(false);
        return valuesWords
    }

    const history = useNavigate();
    
    const searchnow = (e) => {
        console.log("aloobbb",handlclickVille(e))
        const r = handlclickVille(e)
         e.preventDefault();
        history(`/search/ville/${r}`);
    }
    return (
        <div> 
            {loading ? (<div className='searchCompenant'>
                <input type="text" value={valuesWords} onChange={handelfilter}/>
                
                {filteredDataNotDuplicate.length !== 0  && (

                    <div className='ListeSearch' style={{display: closeserch ? 'block' : 'none' }}>
                        {filteredDataNotDuplicate.map((res)=>(
                            <span value={res} className='villeSe'  onClick={handlclickVille}> {res}</span> 
                        ))}
                    </div>

                ) }

                {closeserch ? (<div className='close' onClick={handelclickclose}><CloseIcon /></div>) :(<div className='searchNow' onClick={searchnow}><SearchIcon /></div>)}
                    
            </div>
            ):(<div className='non'>
                Loading....
            </div>

            )
             }
            
        </div>
    );
};

export default Search;