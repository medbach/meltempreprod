import React from 'react';

const Toolbar = () => {
    return (
        <div className='toolbar'>
            <div className='toolbar__wrapper'>
                <ul className='toolbar__social toolbar__items'>
                    <li className='toolbar__item toolbar__item--facebook-tb'>
                        <a href='' className='toolbar__link' target="_blank">
                        <svg className='toolbar__svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                                <path d="M96.4,65.25H80.7V53.85c0-3.5,3.6-4.3,5.3-4.3H96.1V34.05L84.6,34c-15.9,0-19.5,11.5-19.5,18.9v12.4H53.6v15.9H65.1v42.9H80.7V81.15H94Z"></path>
                        </svg>
                        </a>
                    </li>
                    <li className='toolbar__item toolbar__item--twitter-tb'>
                        <a href='' className='toolbar__link' target="_blank">
                        <svg className='toolbar__svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                                <path d="M117.34,50.88a31.49,31.49,0,0,1-9.7,3c2.63-1.48,6.42-6.41,7.32-10.2-2.47,1.65-8.14,4.2-10.94,4.2h0A16.89,16.89,0,0,0,91.36,42c-9.62,0-17.51,8.47-17.51,18.83A17.13,17.13,0,0,0,74.34,65h0C61.27,64.61,46,57.62,37.26,45.45,32,55.4,36.52,66.34,42.52,70.28c-2.05.17-5.84-.24-7.56-2.13-.08,6.57,2.79,15.21,13.48,18.33-2,1.24-5.67.82-7.32.58.58,5.59,7.82,12.82,15.71,12.82-2.8,3.54-12.33,9.87-24.17,7.82A49,49,0,0,0,59.87,116c28.2,0,50.16-24.67,48.92-55v-.57A29.94,29.94,0,0,0,117.34,50.88Z"></path>
                        </svg>
                        </a>
                    </li>
                    <li className='toolbar__item toolbar__item--instagram-tb'>
                        <a href='' className='toolbar__link' target="_blank">
                        <svg className='toolbar__svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                                <path d="m 93.399625,29.975 h -36.5 a 27,27 0 0 0 -26.9,26.85 v 36.4 a 26.87,26.87 0 0 0 26.8,26.8 h 36.4 a 26.87,26.87 0 0 0 26.799995,-26.8 v -36.4 A 26.65,26.65 0 0 0 93.399625,29.975 Z m 17.799995,63.4 a 17.84,17.84 0 0 1 -17.799995,17.8 h -36.5 a 17.84,17.84 0 0 1 -17.8,-17.8 v -36.55 a 17.84,17.84 0 0 1 17.8,-17.8 h 36.4 a 17.84,17.84 0 0 1 17.799995,17.8 v 36.5 z"></path> 
                            <path d="m 75.099625,51.725 a 23.3,23.3 0 1 0 23.3,23.3 23.39,23.39 0 0 0 -23.3,-23.3 z m 0,37.6 a 14.2,14.2 0 1 1 14.2,-14.2 14.19,14.19 0 0 1 -14.2,14.2 z"></path> 
                            <circle r="5.5999999" cy="51.924999" cx="98.399628"></circle>
                        </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Toolbar;
