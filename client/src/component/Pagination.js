import React from 'react';


const Pagination = ({postesPerPage , totalPostes ,paginate }) => {
    console.log("post",postesPerPage)
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPostes / postesPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div>
            <nav>
                <ul className=''>
                    {pageNumbers.map((number)=>(
                        <li key={number} className="okici">
                            <a onClick={() =>{paginate(number)}} href='#' className='page-link'>
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;