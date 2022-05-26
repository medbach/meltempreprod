import React from 'react';
import { useLocation } from 'react-router-dom';

import ContactForm from '../component/ContactForm';
import Succes from '../component/Succes';

import Validation from '../component/Validation';
// import Postapi from '../services/Postapi';

const Contact = () => {   

    const {onChangesInput,values,handelClick,erreur,istrue} = ContactForm(Validation);

    // const baseUrl = "http://localhost:3001/createContact";

    // const { data } = Postapi(baseUrl);

    const title = useLocation();
    const {pathname} = title
    console.log("aaaaaaaaaaaaabachtitl" ,pathname.substring(1))

    return (
        <>
       
        <div className='page-listing-inner'>
            <img src="./img/page-listing.jpg" />
        </div>
        <h1>
            {pathname.substring(1)}
        </h1>
        <div class="globalContact row">
            <div className='leftContact col-md-4'>
            <div class="module-contact__aligner">
            <div class="title module-contact__title js-animate" data-animation="bottomup">
                <div class="title__content"><span>Contacter l'agence</span></div>
            </div>
            <div class="module-contact__content ">
                <div class="module-contact__text js-animate" data-animation="bottomup">
                    <p>Remplissez ce formulaire, nous ferons de notre mieux pour vous répondre dans les meilleurs délais.</p>
                </div>
                <div class="swiper-container swiper-container--nav-under ">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                        <div class="module-contact__coords coords">
                            <div class="coords__title title">
                                <div class="title__content"><span>Meltem Immobilier</span></div>
                            </div>
                            <div class="coords__element coords-phone type-bdd-tel-1">
                                <svg class="coords-phone__drawing coords-phone__drawing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 131.4 133">
                                    <path d="M66.5,113.1c-2.5,0-4.4,2-4.5,4.4c0,2.5,2,4.4,4.4,4.5c2.5,0,4.4-2,4.5-4.4c0,0,0,0,0,0C70.9,115.1,69,113.1,66.5,113.1
                                    C66.5,113.1,66.5,113.1,66.5,113.1z"></path>
                                    <path d="M94.4,0H38.6c-5.4,0-9.8,4.4-9.8,9.8v113.5c0,5.4,4.4,9.8,9.8,9.8h55.8c5.4,0,9.8-4.4,9.8-9.8V9.8C104.2,4.4,99.8,0,94.4,0z
                                    M73.1,6.6h2.2c1.2,0,2.2,1,2.2,2.2c0,1.2-1,2.2-2.2,2.2h-2.2c-1.2,0-2.2-1-2.2-2.2C70.9,7.6,71.9,6.6,73.1,6.6
                                    C73.1,6.6,73.1,6.6,73.1,6.6z M57.6,6.6h8.9c1.2,0,2.2,1,2.2,2.2c0,1.2-1,2.2-2.2,2.2h-8.9c-1.2,0-2.2-1-2.2-2.2
                                    C55.4,7.6,56.4,6.6,57.6,6.6C57.6,6.6,57.6,6.6,57.6,6.6z M66.5,126.4c-4.9,0-8.9-4-8.9-8.9c0-4.9,4-8.9,8.9-8.9s8.9,4,8.9,8.9
                                    c0,0,0,0,0,0C75.3,122.4,71.4,126.3,66.5,126.4z M99.7,102H33.2V17.7h66.5V102z"></path>
                                    <path d="M20,14.6c-0.9-0.9-2.3-0.9-3.1,0c0,0,0,0,0,0C9.4,22,9.4,34,16.8,41.4c0.8,0.9,2.2,1,3.1,0.2c0.9-0.8,1-2.2,0.2-3.1
                                    c-0.1-0.1-0.1-0.1-0.2-0.2c-5.7-5.7-5.7-14.9,0-20.5c0,0,0,0,0,0C20.8,16.8,20.8,15.4,20,14.6z"></path>
                                    <path d="M10.6,10.1c-0.9-0.9-2.2-0.9-3.1,0c0,0,0,0,0,0c-10,10-10,26.3,0,36.3c0.4,0.4,1,0.7,1.6,0.7c0.6,0,1.2-0.2,1.6-0.7
                                    c0.9-0.9,0.9-2.3,0-3.1c-8.2-8.3-8.2-21.7,0-30C11.5,12.4,11.5,11,10.6,10.1z"></path>
                                    <path d="M113,14.5c-1.2,0-2.2,1-2.2,2.2c0,0.6,0.2,1.1,0.6,1.6c5.7,5.7,5.7,14.9,0,20.6c-0.9,0.9-0.9,2.3,0,3.1s2.3,0.9,3.1,0
                                    c7.4-7.4,7.4-19.4,0-26.8C114.2,14.7,113.6,14.5,113,14.5z"></path>
                                    <path d="M123.9,10.1c-0.4-0.4-1-0.6-1.6-0.6c-1.2,0-2.2,1-2.2,2.2c0,0.6,0.2,1.1,0.6,1.6c8.3,8.3,8.3,21.7,0,30
                                    c-0.9,0.9-0.9,2.3,0,3.1c0.9,0.9,2.3,0.9,3.1,0C133.9,36.4,133.9,20.2,123.9,10.1z"></path>
                                </svg>
                                <a href="tel:04 94 35 43 54" class="coords-phone__content">04 94 35 43 54</a>
                            </div>
                            <div class="coords__element coords-mail type-bdd-mail-1">
                                <svg class="coords-mail__drawing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 59.6">
                                    <path d="M69.2,59.6c1.6,0,3.2-0.6,4.4-1.7L52.1,36.4c-0.5,0.4-1,0.7-1.5,1.1c-1.6,1.2-2.9,2.1-3.9,2.8c-1.3,0.8-2.6,1.5-4,2
                                    c-1.5,0.6-3.1,1-4.7,1h-0.1c-1.6,0-3.2-0.4-4.7-1c-1.4-0.6-2.7-1.2-4-2c-1-0.7-2.3-1.6-3.9-2.8c-0.4-0.3-1-0.7-1.5-1.1L2.3,57.9
                                    c1.2,1.1,2.8,1.7,4.4,1.7C6.7,59.6,69.2,59.6,69.2,59.6z"></path>
                                    <path d="M4.3,22.9c-1.6-1-3-2.3-4.3-3.7v32.7l19-19C15.2,30.3,10.3,27,4.3,22.9z"></path>
                                    <path d="M71.7,22.9C65.9,26.8,61,30.2,57,33l19,19V19.2C74.7,20.6,73.3,21.8,71.7,22.9z"></path>
                                    <path d="M69.2,0H6.8C4.6,0,3,0.7,1.8,2.2C0.6,3.8,0,5.7,0,7.7c0,1.8,0.8,3.7,2.3,5.8c1.4,1.9,3,3.6,5,4.9c0.9,0.7,3.8,2.7,8.7,6
                                    l6.8,4.7c1.7,1.1,3.1,2.2,4.3,3c0.1,0.1,0.3,0.2,0.6,0.4l1.2,0.8c0.9,0.7,1.7,1.2,2.3,1.6c0.6,0.4,1.3,0.9,2.2,1.4
                                    c0.8,0.5,1.6,0.8,2.4,1.1c0.7,0.2,1.4,0.4,2.1,0.4H38c0.7,0,1.4-0.1,2.1-0.4c0.8-0.3,1.7-0.7,2.4-1.1c0.9-0.5,1.6-1,2.2-1.4
                                    s1.4-0.9,2.3-1.6l1.2-0.8c0.3-0.2,0.5-0.4,0.6-0.4c0.9-0.6,2.4-1.6,4.3-3l15.5-10.8c2-1.4,3.8-3.2,5.2-5.2c1.3-1.9,2.1-4.1,2.1-6.4
                                    c0-1.8-0.7-3.5-2-4.8C72.7,0.7,71-0.1,69.2,0z"></path>
                                </svg>
                                <a href="mailto:f.jean@la-boite-immo.com" class="coords-mail__content">f.jean@la-boite-immo.com</a>
                            </div>
                            <div class="coords__element coords-address type-bdd-adrs-1">
                                <svg class="coords-address__drawing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.7 139">
                                    <path class="st0" d="M120.7,57.5C120.7,25.8,93.6,0,60.3,0S0,25.8,0,57.5c0,14.2,5.4,27.8,15.1,38.1L15,95.8L60.3,139l42.7-40.7
                                    l2.6-2.6l-0.1-0.1C115.2,85.3,120.7,71.7,120.7,57.5z M60.3,80.4c-12.8,0-23.3-10-23.3-22.2S47.5,36,60.3,36s23.3,10,23.3,22.2
                                    S73.2,80.4,60.3,80.4z"></path>
                                </svg>
                                <p class="coords-address__content">393 Rue Niépce <span class="coords-address__zipcity">83400 <span class="coords-address__city">hyeres</span></span></p>
                            </div>
                            <div class="module-contact__socials">
                                <ul class="module-contact__social module-contact__items">
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <div className='rightContact col-md-8'>
                {istrue ? ( <div className='ok' ><Succes /></div>) : (
                    <form>
                        <div className='formGroupe'>
                            <div className='row'>
                                <div className='col-md-6 col-sm-12'>
                                    <label for="Nom">Nom</label><br/>   
                                    <input type="text" name="nom" value={values.nom} onChange={onChangesInput}/><br/> 
                                    <span className='errerForm'>{erreur.name}</span>
                                    <br/>
                                </div>
                                <div className='col-md-6 col-sm-12'>
                                    <label for="Prenom">Prenom</label><br/> 
                                    <input type="text" name="prenom" value={values.prenom} onChange={onChangesInput}/><br/> 
                                    <span className='errerForm'>{erreur.prenom}</span><br/> 
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className='formGroupe'>
                            <div className='row'>
                                <div className='col-md-6 col-sm-12'>
                                    <label for="Prenom">Email</label><br/> 
                                    <input type="text" name="email" value={values.email} onChange={onChangesInput}/><br/> 
                                    <span className='errerForm'>{erreur.email}</span><br/> 
                                </div>
                                <div className='col-md-6 col-sm-12'>
                                    <label for="Telephone">Telephone</label><br/> 
                                    <input type="text" name="telephone" value={values.telephone} onChange={onChangesInput}/><br/> 
                                    <span className='errerForm'>{erreur.telephone}</span><br/> 
                                </div>
                            </div>
                        </div>
                        
                        <div className='formGroupe-simple'>
                            <div className='col-md-12 col-sm-12'>
                                <label for="Message">Message</label><br/> 
                                <input type="text" name="message" value={values.message} onChange={onChangesInput}/><br/> 
                                <span className='errerForm'>{erreur.message}</span><br/> 
                            </div>
                        </div>
                       

                        {/* <input type="radio" name="gender" value="Male"  onChange={onChangesInput}/> Male
                        <input type="radio" name="gender" value="famale"  onChange={onChangesInput}/> Female
                        <input type="radio" name="gender" value="other"  onChange={onChangesInput}/> Other */}

                        <button onClick={(event)=>handelClick(event)} variant="primary" type="submit">envoyer</button>
                    </form>
                    )
                }
            </div>
           
        </div>
        </>
    );
};

export default Contact;