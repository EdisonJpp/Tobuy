import React from 'react';
import Logo from '../index/header/img/tipo3.png';
import { Link } from 'react-router-dom';


const TopBlock = (props: any) => {
    return (
        <div className='bg-light  w-100' style={{borderBottom : '1px solid #3333'}}>
            <div className="container">
                <Link to='/'><img src={Logo} alt="" width='250px' height='50px' /> </Link>
            </div>
        </div>
    );
};

export default TopBlock; 