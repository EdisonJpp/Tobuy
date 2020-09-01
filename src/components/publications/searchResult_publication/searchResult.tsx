import React, { useState } from 'react';
import { Zoom } from 'react-slideshow-image';
import Loader from '../../loader';
import { Link, RouteComponentProps } from 'react-router-dom';
import { orderPublication } from '../../../entities/publications/publicationEntitie';
import Cart from '../../index/body/img/cart.png';
import ReactPlayer from 'react-player/lazy';
interface props extends RouteComponentProps<any> {
    addCart: (cart: any) => void;
    result: any[];
    screenLoadingOfResult: false;
};
const SearchResult: React.FC<props> = (props: props) => {
    const zoomOutProperties = {
        duration: 9000,
        transitionDuration: 100,
        infinite: true,
        indicators: true,
        scale: 0.4,
        arrows: true
    };
    const [result, newResutl] = useState({
        orderByPrice: '',
        morePost : 24,
    });
    const filterPost = (orderBy: any) => (a: orderPublication, b: orderPublication) => {
        const aa: number = a.price;
        const bb: number = b.price;
        return orderBy === 'asc' ? (aa - bb) : (bb - aa);
    };
    const activeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        value === 'asc' ? newResutl({...result ,  orderByPrice: 'asc' }) : newResutl({ ...result , orderByPrice: 'desc' });
    };

    const sum = 24;
    const seeMore = () => {
        newResutl({
            ...result,
            morePost: result.morePost + sum,
        });
    };

    const userData = JSON.parse(localStorage.getItem('userData')!);

    const data =  props.result ?  props.result : [] ;
    let countPost =   data.length;

    if (!props.result) return <Loader />
    return (
        <div className='w-100'>
            {
                props.result && props.result.length !== 0 && <div className='align-self-center d-flex justify-content-end'>
                    ordenar  <select name="orderByPrice"
                        onChange={activeFilter}
                    >
                        <option>ordenar por</option>
                        <option value='asc'>mas baratos</option>
                        <option value='desc'>mas caros</option>
                    </select>
                </div>
            }
            <p style={{ fontSize: '20px', marginTop: '0', marginBottom: '0' }}>
                <strong>  {props.result && props.result.length} </strong> resultados encontrados en <strong> {props.match.params.text} </strong>
            </p>
            <div className='d-flex flex-wrap w-100'>

                {data && data.sort(filterPost(result.orderByPrice)).slice(0, result.morePost).map((p: any, i: number) => {
                    return (
                        <div className="card p col-md-3 col-sm-6  col-6" id='publication' key={i}>
                            {
                                userData &&
                                <div className="dropdown ml-0 d-flex  ">
                                    <img src={Cart} className=' shoppingCart dropdown-toggle dropdown-toggle-split' alt='hola' />
                                    <div className="dropdown-menu items dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                        <div className="">
                                            <li className="dropdown-item" onClick={() => props.addCart(p)}>
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
                                                            muted
                                                            playing
                                                        />
                                                    </Link>
                                            );
                                        })
                                    }
                                </Zoom>
                        }
                                    <h4 className='text-truncate'> ${p.price} </h4>
                                    <h5 className=' text-truncate'>  {p.title}  </h5>
                                </div>
                            </div>
                        </div>
                    );
                })
                }
            </div>

            <div className="see-more d-flex justify-content-center m-4">


                {


                    // publications  && countPost < statefilter.morePost ? null
                    //     :
                        countPost === result.morePost  || countPost < result.morePost ?
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
};
export default SearchResult;