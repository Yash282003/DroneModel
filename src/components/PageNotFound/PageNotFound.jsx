import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='pageNotFound'>
        <div className="pageNotFooundCont">
        <div className='p_n_f_box'>
            <p className='p_n_f_1'><span>404</span> | Page not found</p>
            <p className='p_n_f_2'><span>404</span> Page not found</p>

        </div>
            <p className='notFoundLine'>The page you were looking for was not found. Please verify the link/URL or try starting back at our home page.</p>
            <Link to='/' className='p_n_fBtn'>GO TO HOME PAGE</Link>
        </div>
    </div>
  )
}

export default PageNotFound