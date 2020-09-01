import React from 'react';

const Offerts = () => {
    return (
        <div className='bg-ligth  w-100'>
            <br />
            <h2> VIP Offerts </h2>
            <hr className='solid' />
            <div id="carouselExampleIndicators" className="carousel slide mb-4 w-100" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner VIPoferts">
                    <div className={`carousel-item active `}>
                        <div className="w-100 d-flex justify-content-center">
                            <img className='imgById w-50 ' alt='recentPublications' src={require(`../index/body/img/./ejem.jpg`)} />
                        </div>
                    </div>
                    <div className={`carousel-item `}>
                        <div className="w-100 d-flex justify-content-center">
                            <img className='imgById w-50 ' alt='recentPublications' src={require(`../index/body/img/./ejem.jpg`)} />
                        </div>
                    </div>
                    <div className={`carousel-item`}>
                        <div className="w-100 d-flex justify-content-center">
                            <img className='imgById w-50 ' alt='recentPublications' src={require(`../index/body/img/./ejem.jpg`)} />
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon bg-dark  indicator" aria-hidden="true"></span>
                    <span className="sr-only ">Previous</span>
                </a>
                <a className="carousel-control-next  " href="#carouselExampleIndicators " role="button" data-slide="next">
                    <span className="carousel-control-next-icon bg-dark indicator" aria-hidden="true"></span>
                    <span className="sr-only text-danger">next</span>
                </a>
            </div>
            <hr className='solid' />
        </div>
    );
};
export default Offerts;