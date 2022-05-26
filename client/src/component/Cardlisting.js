import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';



const Cardlisting = (bien) => {
    console.log("data finich",bien);
    const {data} = bien
    console.log("data",data);
    const history = useNavigate();

    

    const handelclick = (e,id) => {
        e.preventDefault();
        console.log(history);
        history(`/detailannonces/${id}`);
        console.log("click");
    }



    const formatPrix = (prixformat) => {

        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(prixformat);
    }


    return (
        <div className='listing__card'>
            <div className='row revers'>
                <div className='listing__card__box__images col-md-6 col-xs-12 col-sm-12 p-0'>
                    
                   {/* <div className='al'><NavLink to={`/detailannonces/${data._id}`} > aaa </NavLink></div>  */}

                    <span className='listing__card__box__btn '>
                        
                        
                        <button onClick={(e) => handelclick(e,data._id)}>Voir detail</button>
                    </span>
                    <img src="//meltem.staticlbi.com/980xauto/images/biens/1/f4f6dce2f3a0f9dada0c2b5b66452017/original/photo_2ce1b2ed8abb9723619ccbcf36bda5ea.jpg" />
                </div>
                <div className='listing__card__box col-md-6 col-xs-12 col-sm-12'>
                    <div className='header-listing'>
                        <span className='listing__card__box__ville-cp'>
                            {data.ville} ( {data.cp} ) 
                        </span>
                        <h1>{data.title}<br/></h1>
                    </div>
                    <div className='header-listing-description'>
                        <p>{data.description}<br/></p>
                    </div>
                    <span className='listing__card__box__prix'>
                        Prix : {formatPrix(data.prix)}
                    </span>
                   
                    
                    
                </div>
               

                
                
            </div>
        </div>

        
    );
};

export default Cardlisting;