import React, { useEffect, useState } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { Zoom } from 'react-slideshow-image';
import Cart from '../img/cart.png';
import Loader from '../../../loader';
import { orderPublication } from '../../../../entities/publications/publicationEntitie';
import ReactPlayer from 'react-player/lazy';


type priceOrdering = 'asc' | 'desc';

interface state {
    orderByPrice: priceOrdering;
};

interface props extends RouteComponentProps<any> {
    getPostByCategory: (categoryId: number) => void;
    postByCategory: any;
    postByCategoryFailed: any;
    loading: boolean;
    addCart: (cartData: any) => void;
};

const ByCategory: React.FC<props> = ({
    getPostByCategory, postByCategory, addCart, match: { params }
}: props, state) => {

    const [statefilter, changeState] = useState({
        orderBy: state.orderByPrice,
        morePost: 24,
    });

    const zoomOutProperties = {
        duration: 9000,
        transitionDuration: 100,
        infinite: true,
        indicators: true,
        scale: 0.4,
        arrows: true
    };

    useEffect(() => {
        const getData = async () => {
            await getPostByCategory(params.categoryId);
        };
        getData();
    }, []);

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
    const sum = 24;
    const seeMore = () => {
        changeState({
            ...statefilter,
            morePost: statefilter.morePost + sum,
        });
    };

    const { publications } = postByCategory ? postByCategory : [];

    let countPost =  !publications  ?   [] : publications.length;
    const categoryPost = publications && publications.sort(filter(statefilter.orderBy)).slice(0, statefilter.morePost).map((p: any, i: number) => {
        const image = p.image_name && p.image_name.split(',');

        return (
            <div className="card p col-md-3 col-sm-6  col-6" id='publication' key={i}>
                {/* { */}
                {/* // userData && */}
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
                {/* } */}
                <div className="card-body flex-column">
                    <div className="w-100 h-100" >
                        {
                            image.length <= 1 ?
                                image[0].split('.') === 'jpg' || image[0].split('.') === 'png' || image[0].split('.') === 'jpeg' || image[0].split('.') === 'gif' ?

                                    <Link to={`/publications/${p.id}`}> <img className='img  img-fluid' alt='recentPublications' src={`https://tobuy-com-20.herokuapp.com/uploads/${image[0]}`} /> </Link> :
                                    <Link to={`/publications/${p.id}`} key={p.id}>
                                        <ReactPlayer url={`https://tobuy-com-20.herokuapp.com/uploads/${image[0]}`}
                                            width='100%'
                                            height='196px'
                                            controls
                                            playing
                                        />
                                    </Link>
                                :
                                <Zoom  {...zoomOutProperties} >
                                    {
                                        image.map((each: any, index: number) => {
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

    return (
        <div className="w-100">

            <div className='d-flex justify-content-end'>
                Filtro  <select name="filter" onChange={change}>
                    <option>ordenar por</option>
                    <option value='asc'>mas baratos</option>
                    <option value='desc'>mas caros</option>
                </select>
            </div>
            <div className='w-100 d-flex flex-wrap'>

                {!categoryPost ? <Loader /> : categoryPost}
            </div>

            <div className="see-more d-flex justify-content-center m-4">


                {


                    // publications  && countPost < statefilter.morePost ? null
                    //     :
                        countPost === statefilter.morePost  || countPost < statefilter.morePost ?
                            <button className='btn btn-danger '>
                                ¡No hay mas anuncios!
                            </button>
                            :
                            <button className='seeMoreButton  btn btn-primary align-self-end' onClick={seeMore}>
                                ¡Ver mas anuncios!
                            </button>
                }

            </div>
        </div>
    );
}
export default ByCategory; 