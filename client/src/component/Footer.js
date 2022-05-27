import React from 'react';
import Lastfooter from './Lastfooter';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__wrapper'>
                <div className='footer-top'>
                    <div className='footer-top__wrapper'>
                        <div className='connect'>
                            <div className='connect__wrapper'>
                                <div className='title'>
                                    <div className='title__content'>
                                        <span>Se connecter</span>
                                    </div>
                                </div>
                                <div className='links-group'>
                                    <div className='links-group__wrapper'>
                                        <a href='/admin/espace_client.php' className='links-group__link button-drawing'  target="_blank">
                                        <svg class="button-drawing__drawing connect__drawing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                                            <path className='cls-1' d="M121.3,144.5H28.7a12.87,12.87,0,0,1-12.87-12.87V64.71A12.87,12.87,0,0,1,28.7,51.84h2.48V49.32h.08a43.73,43.73,0,1,1,87.46,0c0,.89,0,1.71,0,2.51h2.54a12.87,12.87,0,0,1,12.87,12.87v66.92A12.87,12.87,0,0,1,121.3,144.5ZM75.18,21A28.33,28.33,0,0,0,46.86,49.26h0v2.58h56.57v-.2c.07-.75.13-1.52.13-2.37A28.32,28.32,0,0,0,75.18,21ZM118.8,72.5a5.15,5.15,0,0,0-5.15-5.15H36.36a5.14,5.14,0,0,0-5.14,5.15v51.43a5.14,5.14,0,0,0,5.14,5.15h77.29a5.15,5.15,0,0,0,5.15-5.15ZM76.25,113.56H73.68a6.41,6.41,0,0,1-6.41-6.41V89.37A6.41,6.41,0,0,1,73.68,83h2.57a6.41,6.41,0,0,1,6.42,6.42v17.78A6.41,6.41,0,0,1,76.25,113.56Z"></path></svg>
                                            <span class="button-drawing__content">Espace propriétaire</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='footer-top__logo'>
                            <a href='' className='top__logo'><img src="./img/logoSite.png" className='img-container' /></a>
                        </div>
                        <div className='partners'>
                            <div className='partners__wrapper'>
                                <div className='title'>
                                    <div className='title__content'>
                                        <span>Adhérents</span>
                                    </div>
                                </div>
                                <ul className='partners__list'>
                                    <li className='partners__item '>
                                        <a href='' className='partners__link'>
                                        <img src="./img/interkab.png" className='partners__img' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='footer-last'>
                    <Lastfooter/>
                </div>
            </div>
        </div>
    );
}

export default Footer;
