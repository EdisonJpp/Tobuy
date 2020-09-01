import React, { useEffect } from 'react';
import Header from '../index/header/index';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import Footer from '../index/footer';
import './css/css.css';
import Swal from 'sweetalert2'
import ReactPlayer from 'react-player/lazy';


interface props extends RouteComponentProps<any> {
    postOfCart: any[];
    screenLoading: boolean;
    error: any[];
    deleteCorrecty: any;
    getPost: (userId: number) => void;
    deleteCart: (id: number) => void;
    addUserRating: (dataRate: any) => void;
};
const ShoppingCart: React.SFC<props> = (props: props) => {
    const HeaderIndex = withRouter(Header);
    useEffect(() => {
        const getposst = async () => {
            const userData = await JSON.parse(localStorage.getItem('userData')!);
            const id = userData.user.id;
            await props.getPost(id);
        };
        getposst();
    }, [props.deleteCorrecty]);
    const deleteCart = async (id: number) => {
        await props.deleteCart(id);
        props.history.push('/your-shoppingcart');
    };

    // valoracion del usuario.
    const sendDataRating = (sellerData: any) => {
        console.log(sellerData.id);
        const userData = JSON.parse(localStorage.getItem('userData')!);

        Swal.fire({
            title: 'quieres calificar el servicio brindado?',
            text: "puedes hacerle un comentario y calificarlo en estrellas!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si!'
        }).then(async (result) => {
            if (result.value) {
                const { value: commentary } = await Swal.fire({
                    input: 'textarea',
                    inputPlaceholder: 'Hazle un comentario por su servicio...',
                    inputAttributes: {
                        'aria-label': 'Type your message here'
                    },
                    showCancelButton: true,
                    inputValidator: (value): any => {
                        if (!value) {
                            return 'Tienes que agregar un comentario!'
                        };
                    },
                })

                if (commentary) {

                    const inputOptions = new Promise((resolve) => {
                        setTimeout(() => {
                            resolve({
                                5: '<i class="far fa-star"> 5</i>',
                                4: '<i class="far fa-star">4</i>',
                                3: '<i class="far fa-star">3</i>',
                                2: '<i class="far fa-star">2</i>',
                                1: '<i class="far fa-star">1</i>'
                            })
                        }, 1000)
                    })

                    const { value: qualification } = await Swal.fire(
                        {
                            title: 'Calificalo por estrellas',
                            // login : 'dd',
                            input: 'radio',
                            inputOptions: inputOptions,
                            inputValidator: (value): any => {
                                if (!value) {
                                    return 'Tienes que agregar un comentario!'
                                };
                            },

                        });

                    // const IntQualification : number =  qualification  && parseInt(qualification) ; 
                    if (qualification) {
                        console.log(sellerData.id);
                        const dataRate = {
                            userId: sellerData.id,
                            qualifierId: userData.user.id,
                            qualification: qualification,
                            commentary: commentary
                        };
                        console.log(dataRate);
                        await props.addUserRating(dataRate);
                        // Swal.fire( `You selected: f3333` );
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Gracias por la valoracion del vendedor',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    };
                };
            };
        });
    };

    const rateUser = (sellerData: any) => {
        // console.log(sellerData);
        Swal.fire({
            title: '¿Compraste el producto agregado?',
            // text: "puede hacer un comentario y calificar el servicio brindado!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si!'
        }).then((result) => {
            if (result.value) {
                sendDataRating(sellerData);
            };
        });
    };
    const postOfCart = props.postOfCart === undefined ? [] : props.postOfCart;
    const posty = postOfCart;
    const carrito = postOfCart.length;
    const p = posty.map((p: any, i: number) => {
        const images = p.publication.image_name.split(',');
        const ext = images[0].split('.')[1];
        return (
            <div className="border mt-2 w-100 SHOPPING" key={i}>
                <div className="card-body d-flex flex-wrap">
                    {
                        ext === 'jpg' || ext === 'png' || ext === 'jpeg' || ext === 'gif' ?
                            <img src={`https://tobuy-com-20.herokuapp.com/uploads/${images[0]}`} alt="..." className="img col-12 col-md-4" title='agregar al carrito de compras' height='200px' width='250px' />
                            :
                            <ReactPlayer url={`https://tobuy-com-20.herokuapp.com/uploads/${images[0]}`}
                                // width='70%'
                                height='200px'
                                width='250px'
                                muted
                                class='img col-12 col-md-4'
                                controls
                                playing
                            />
                    }
                    <div className="data mt-1 ml-4">
                        <h3 className="card-text"> ${p.publication.price} </h3>
                        <h3 className="card-text"> {p.publication.title} </h3>
                        <Link to={`/publications/${p.publication.id}`} > <button className="btn btn-primary">ir a la publicacion</button> </Link>
                        <button className='btn btn-danger' onClick={() => deleteCart(p.id)}> delete </button>
                        <p
                            className='align-self-end  mt-4 ml-2 text-primary'
                            // role='button'
                            style={{ cursor: 'pointer' }}
                            // role="button"
                            onClick={() => rateUser(p.user)}

                        >  ¿Compraste?</p>
                    </div>
                </div>
            </div>
        );
    });
    console.log(posty);
    return (
        <div className='d-flex flex-column justify-content-between' style={{ height: '100vh' }}>
            <HeaderIndex />
            <div style={{}} className="container col-md-9 col-12">
                <h2 className='mb-2 cursive'> publicaciones agregadas {carrito}  </h2>
                <div className='mt-4 mb-4' >
                    {p}
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default ShoppingCart;