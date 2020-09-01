import React from 'react';
import './css/index.css';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>

            <div className="container  col-md-9 d-flex justify-content-between flex-wrap">
                <div className='col-10 col-md-2'>
                    <h2 className='footerh4 cursive'> siguenos  </h2>
                    <div className='d-flex justify-content-between' id='contact'>
                        <i className='fa fa-twitter-square' id='contact'></i>
                        <i className='fa fa-instagram ' id='contact'></i>
                        <i className="fa fa-facebook-square" id='contact'></i>
                        <i className='fa fa-youtube-square ' id='contact'></i>
                        <i className='fa fa-google-plus-square ' id='contact'> </i>
                    </div>
                </div>
                <div className='col-12 col-md-4    '>
                    <h2 className='ml-4 cursive'>sobre nosotros</h2>
                    <div className='d-flex  mt-4'>
                        <Link to='' > <p className='mr-2'>blog</p></Link>
                        <div className="vl"></div>
                        <Link to='' ><p className='mr-2'>ayuda</p></Link>
                        <div className="vl"></div>
                        <Link to='' ><p className='mr-2'>soporte</p></Link>
                        <div className="vl"></div>
                        <Link to='' ><p className=''>unirte a la pagina</p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer; 