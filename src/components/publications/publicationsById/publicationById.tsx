import React, { useEffect } from 'react';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import Loader from '../../loader';
import Header from '../../index/header'
import './css/index.css';
import Footer from '../../index/footer';
import Swal from 'sweetalert2';
import Cart from '../../index/body/img/cart.png';
import ReactPlayer from 'react-player/lazy';

interface props extends RouteComponentProps<any> {
    publicationById: any;
    screenLoading: boolean;
    findById: (id: number) => void;
    searching: (text: any) => void;
    getPostBycategory: (id: number) => void;
    addCart: (cartData: any) => void;
    getCart: (userId: number) => void;
    cartData: any;

};
const BPublicationById: React.FC<props> = (props: props) => {
    useEffect(() => {
        const data = async () => {
            const userDataP = !JSON.parse(localStorage.getItem('userData')!) ? { user: { id: 0 } } : JSON.parse(localStorage.getItem('userData')!);
            await props.findById(props.match.params.id);
            await props.getCart(userDataP.user.id && userDataP.user.id);

        };
        data();
    }, []);
    const HeaderIndex = withRouter(Header);
    let { title, description, image_name, wasPublishedAt, price, user, categories, condition, categoryId, users_id, id } = props.publicationById === undefined ? [] : props.publicationById;
    const userData = user ? user : {};
    const category = categories ? categories : {};
    let { name, phonenumber } = userData;
    let { categorie_name } = category;
    var userDataP = !JSON.parse(localStorage.getItem('userData')!) ? { user: { id: 0 } } : JSON.parse(localStorage.getItem('userData')!);

    const addCart = async (cart: any) => {
        if (userDataP.user.id !== 0) {
            // await props.getCart(userDataP.user.id);
            const checkCartData = props.cartData.find((e: any, i: number) => e.publicationId === id);
            console.log(props.cartData);
            if (checkCartData === undefined) {
                const cart = { userId: userDataP.user.id, publicationId: id };
                await props.addCart(cart);
                await props.getCart(userDataP.user.id);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Agregado al carrito correctamente',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'este anuncio ya existe en tu carrito',
                    showConfirmButton: false,
                    timer: 2000
                });
            };
        } else {
            Swal.fire(
                'debes de tener una cuenta para poder agregar al carrito de compras!',
                'registrate!',
                'error'
            );
        };
    };



    {
        if (props.screenLoading) {
            return (
                <div className="w-100">
                    <HeaderIndex />
                    <Loader />
                </div>
            );
        } else {
            return (
                <div className='findByIdP w-100'>
                    <HeaderIndex />
                    <div className='mt-4' >
                        <div className="container col-12 col-md-9 w-100">
                            <nav aria-label="breadcrumb container ">
                                <ol className="breadcrumb bg-light">
                                    <li className="breadcrumb-item"><Link to='/'>inicio</Link></li>
                                    <li className="breadcrumb-item" onClick={() => props.getPostBycategory(categoryId)}> <Link to={`/category/${categoryId}`}> {categorie_name} </Link> </li>
                                    <li className="breadcrumb-item active" aria-current="page"> {title} </li>
                                </ol>
                            </nav>

                        </div>
                        <div className="d-flex flex-wrap w-100 container col-md-9 " style={{}}>

                            <div id="carouselExampleIndicators" className="carousel slide col-12 col-md-7 " data-ride="carousel">

                                <div className="carousel-inner">
                                    {

                                        image_name === undefined ? null : image_name.map((each: any, index: number) => {
                                            const ext = each.split('.')[1];
                                            return (

                                                <div key={index} className={index === 0 ? `carousel-item active ` : 'carousel-item'}>
                                                    <div className="w-100 d-flex justify-content-center">

                                                        {
                                                            ext === 'jpg' || ext === 'png' || ext === 'jpeg' || ext === 'gif' ?
                                                                <img className='imgById' alt='recentPublications' src={`https://tobuy-com-20.herokuapp.com/uploads/${each}`} />
                                                                :
                                                                <ReactPlayer url={`https://tobuy-com-20.herokuapp.com/uploads/${each}`}
                                                                    width='70%'
                                                                    // height='196px'
                                                                    muted
                                                                    class='imgById'
                                                                    controls
                                                                    playing
                                                                />

                                                        }

                                                    </div>
                                                </div>

                                                // // :
                                                // <div key={index} className={index === 0 ? `carousel-item active ` : 'carousel-item'}>
                                                //     <div className="w-100 d-flex justify-content-center">
                                                //     <ReactPlayer url={`https://tobuy-com-20.herokuapp.com/uploads/${each}`}
                                                //         width='100%'
                                                //         // height='196px'
                                                //         class='imgById'
                                                //         controls
                                                //         playing
                                                //     />

                                                //     </div>
                                                // </div>

                                            );
                                        })
                                    }
                                </div>

                                <div className="  indicador  mt-2 col-md-10 col-12 flex-nowrap">
                                    <ol className="indicators d-flex">
                                        {
                                            image_name === undefined ? null : image_name.map((e: any, i: number) => {
                                                const ext = e.split('.')[1];

                                                return (


                                                    <div data-target="#carouselExampleIndicators" key={i} className={'active   '} style={{ position: 'relative', marginLeft: '70px' }}>


                                                        {
                                                            ext === 'jpg' || ext === 'png' || ext === 'jpeg' || ext === 'gif' ?
                                                                <img className='findIdSub' alt='recentPublications' data-slide-to={i} data-target="#carouselExampleIndicators" style={{ 'position': 'absolute', 'right': '204px' }} width='70px' height='50px'  src={`https://tobuy-com-20.herokuapp.com/uploads/${e}`} />
                                                                :
                                                                <ReactPlayer url={`https://tobuy-com-20.herokuapp.com/uploads/${e}`}
                                                                    // width='70%'
                                                                    // height='196px'
                                                                    data-slide-to={i}
                                                                    muted
                                                                    class='findIdSub'
                                                                    controls
                                                                    playing
                                                                    style={{ 'position': 'absolute', 'right': '204px' }} 
                                                                    width='70px'
                                                                    height='50px' 
                                                                    data-target="#carouselExampleIndicators"
                                                                />

                                                        }

                                                        {/* <img src={`https://tobuy-com-20.herokuapp.com/uploads/${e}`} data-target="#carouselExampleIndicators" data-slide-to={i} className={' findIdSub  '} alt="findbyId" style={{ 'position': 'absolute', 'right': '204px' }} width='70px' height='50px' /> */}
                                                    </div>
                                                );
                                            })
                                        }
                                    </ol>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon bg-dark  indicator" aria-hidden="true"></span>
                                    <span className="sr-only ">Previous</span>
                                </a>
                                <a className="carousel-control-next " href="#carouselExampleIndicators " role="button" data-slide="next">
                                    <span className="carousel-control-next-icon bg-dark indicator" aria-hidden="true"></span>
                                    <span className="sr-only text-danger">next</span>
                                </a>
                            </div>
                            <div className="detallteRight ml-4 d-flex flex-column col-12 col-md-2">
                                <div className='d-flex'>
                                    <h3 className='mt-3 mr-4'> ${price} </h3>

                                    <div className="dropdown   ">
                                        {/* <span> agregar al carrito de compras</span> */}
                                        <img src={Cart} className=' dropdown-toggle' alt='cart' width='50px' />
                                        <div className="dropdown-menu items " aria-labelledby="dropdownMenuButton">
                                            <div className="">
                                                <li className="dropdown-item" onClick={() => addCart(props.publicationById)}>
                                                    agregar al carrito
                                                              </li>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <img src={Cart} alt="cart" width='50px' /> */}

                                </div>
                                <div className='d-flex flex-column'>
                                    <h4> {title} </h4>
                                </div>
                                <hr className='w-100 text-dark' />
                                <div className='publicationData'>
                                    <h6 className='mb-2'>Condicion:  {condition} </h6>
                                    <h6 className='mb-2'>Se publico: {wasPublishedAt} </h6>
                                    <h6 className=''> categoria: {categorie_name}</h6>
                                </div>
                                <hr className='w-100 text-dark' />
                                <div className="userData ">
                                    <div className='d-flex '>
                                        <i className="fas fa-people-carry mr-4" style={{ fontSize: '60px', color: '#3333' }}></i>
                                        <div className=''>
                                            <h3> {name} </h3>
                                            <p>
                                                1+{phonenumber} </p>
                                        </div>
                                    </div>
                                    <Link to={`/seller-profile/${users_id}`}><button className='btn btn-secondary'> ir al perfil de {name} </button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="description  container col-md-9 col-12 ">
                            <h3> Descripcion</h3>
                            <div>
                                {description}
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            );
        };
    };
};
export default BPublicationById;