import React, { useState ,useEffect } from 'react';
import { Zoom } from 'react-slideshow-image';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import Cart from '../img/cart.png';
// import { filter } from '../../../../utils/filter';
import { orderPublication } from '../../../../entities/publications/publicationEntitie';
import ReactPlayer from 'react-player/lazy';

type priceOrdering = 'asc' | 'desc';
// type order = ( a.price  -  )

interface state {
    orderByPrice: priceOrdering;

};

interface props extends RouteComponentProps<any> {
    addCart: (cartData: any) => void;
    postData: any;
    // filterPost : (filter : any)=> void ; 
};



// type order = 'asc' | 'desc'; 
const RecentPost: React.FC<props> | any = ({ postData, addCart }: props, state: state) => {
    const [statefilter, changeState] = useState({
        orderBy: state.orderByPrice,
        // slicePost
        morePost : 24 ,
        // order :  , 
    });




    const filter = (order: any) => (a: orderPublication, b: orderPublication) => {
        const aa = a.price;
        const bb = b.price;
        return order === 'asc' ? (aa - bb) : (bb - aa);

    };

    const change = async (e: any) => {
        const { name, value } = e.target;
        if (value == 'asc') {
            changeState({
                ...statefilter,
                orderBy: value
            });
        } else {
            value == 'desc' &&
                changeState({
                    ...statefilter,
                    orderBy: value
                });
        };
    };
    let sum = 24;
    // var seeMorePost 
    const seeMore = () => {
        // seeMorePost = 0 ;
        // seeMorePost = seeMorePost + sum  ;        
        changeState({
            ...statefilter,
            morePost: statefilter.morePost + sum,
        });
    };
    // console.log(seeMorePost);
    const zoomOutProperties = {
        duration: 9000,
        transitionDuration: 100,
        infinite: true,
        indicators: true,
        scale: 0.4,
        arrows: true
    };
    const userData = JSON.parse(localStorage.getItem('userData')!);
    const postType = postData ? postData : [];
    
    let countPost =  !postType  ?   [] : postType.length;
    const data = postType && postType.sort(filter(statefilter.orderBy)).slice(0, statefilter.morePost).map((p: any, i: number) => {
        return (
            <div className="card p col-md-3 col-sm-6  col-6 col-xl-3" id='publication' key={i}>
                {
                    userData &&
                    <div className="dropdown ml-0 d-flex  ">
                        <img src={Cart} className=' shoppingCart dropdown-toggle dropdown-toggle-split' alt='hola' />
                        <div className="dropdown-menu items dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                            <div className="">
                                <li className="dropdown-item" onClick={() => addCart(p)}>
                                    agregar al carrito
                                                          </li>
                            </div>
                        </div>
                    </div>
                }
                <div className="card-body flex-column">
                    <div className="w-100 h-100" >
                        {
                            p.image_name.length <= 1 ?
                                p.image_name[0].split('.') === 'jpg' || p.image_name[0].split('.') === 'png' || p.image_name[0].split('.') === 'jpeg' || p.image_name[0].split('.') === 'gif' ?

                                    <Link to={`/publications/${p.id}`}> <img className='img  img-fluid' alt='recentPublications' src={`https://tobuy-com-20.herokuapp.com/uploads/${p.image_name[0]}`} /> </Link> :
                                    <Link to={`/publications/${p.id}`} key={p.id}>
                                        <ReactPlayer url={`https://tobuy-com-20.herokuapp.com/uploads/${p.image_name[0]}`}
                                            width='100%'
                                            height='196px'
                                            controls
                                            playing
                                        />
                                    </Link>
                                :
                                <Zoom className='' {...zoomOutProperties} >
                                    {
                                        p.image_name.map((each: any, index: number) => {
                                            const ext = each.split('.')[1];
                                            return (
                                                ext === 'jpg' || ext === 'png' || ext === 'jpeg' || ext === 'gif' ?
                                                    <Link to={`/publications/${p.id}`} key={index}>  <img key={index} className='imgH  img-fluid' alt='recentPublications' src={`https://tobuy-com-20.herokuapp.com/uploads/${each}`} />  </Link>
                                                    :
                                                    <Link to={`/publications/${p.id}`} key={index}>
                                                        <ReactPlayer url={`https://tobuy-com-20.herokuapp.com/uploads/${each}`}
                                                            width='100%'
                                                            height='196px'
                                                            controls
                                                            playing
                                                            muted
                                                        />
                                                    </Link>
                                            );
                                        })
                                    }
                                </Zoom>
                        }
                        <h4 className='text-truncate'>  ${p.price} </h4>
                        <h5 className=' text-truncate'> {p.title}  </h5>
                    </div>
                </div>
            </div>    
        );
    });
    // postData.map(())
    return (
        <div className='w-100 '>

            <div className='d-flex justify-content-end'>
                Filtro  <select name="filter" onChange={change}>
                    <option>ordenar por</option>
                    <option value='asc'>mas baratos</option>
                    <option value='desc'>mas caros</option>
                </select>
            </div>

            <div className='w-100 d-flex flex-wrap'>

                {data}
            </div>
            <div className="see-more d-flex justify-content-center m-4">


                {


                    // postType && countPost < statefilter.morePost ? null
                    //     :
                        countPost === statefilter.morePost  || countPost < statefilter.morePost  ?
                            <button className='btn btn-danger '>
                                No hay mas anuncios
            </button>
                            :
                            <button className='seeMoreButton  btn btn-primary align-self-end' onClick={seeMore}>
                                Ver mas!
            </button>
                }

            </div>
        </div>
    );
}
export default RecentPost;



