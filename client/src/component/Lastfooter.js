import React from 'react';

const Lastfooter = () => {
    return (
            <div className='footer-last__wrapper'>
            <a href='https://www.la-boite-immo.com/' target="_blank">
                
            <img src="./img/logo_laboiteimmo.png" className='img-container' />
            
            </a>
 
            <div className='copyright'>
                <div className='copyright__wrapper'>
                    <p className='copyright__text'>© 2022 | Tous droits réservés | Traduction powered by Google |</p>
                    <nav className='footer-last__menu'>
                        <ul className='copyright__nav-list nav-list'>
                            <li className='nav-list__item'>
                                <a href='' className='nav-list__link'>Nos honoraires</a>
                            </li>
                            <li className='nav-list__item'>
                                <a href='' className='nav-list__link'>Plan du site</a>
                            </li>
                            <li className='nav-list__item'>
                                <a href='' className='nav-list__link'>Mentions légales</a>
                            </li>
                            <li className='nav-list__item'>
                                <a href='' className='nav-list__link'>Partenaires</a>
                            </li>
                            <li className='nav-list__item'>
                                <a href='' className='nav-list__link' target="_blank">Admin</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Lastfooter;
