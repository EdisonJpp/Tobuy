import React, { useEffect, useState } from 'react';
import Header from '../index/header'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import Loader from '../loader';
import Footer from '../index/footer';
import { Zoom } from 'react-slideshow-image';
import Followers from '../followers';
import Swal from 'sweetalert2';
import RateUser from '../rateUser';
import ReactPlayer from 'react-player/lazy';

interface props extends RouteComponentProps<any> {
    getSeller: (id: number) => void;
    sellerData: any;
    screenLoading: boolean;
    getFollowers: (userId: number) => void;
    followerData: any;
    ratingData: any;
    addFollower: (followerData: any) => void;
    deleteFollower: (seguidorId: number) => void;
    getMyRating: (userIdd: number) => void
    addUserRating: (rateData: any) => void;

};

const SellerProfile: React.FC<props> = (props: props) => {
    const [seeFollowerF, followerF] = useState({
        seeFollower: false,
        seeRanking: false,
    });

    useEffect(() => {
        const getSellerAndFollowers = async () => {
            await props.getSeller(props.match.params.sellerId);
            await props.getFollowers(props.match.params.sellerId && props.match.params.sellerId);
            await props.getMyRating(props.match.params.sellerId);
        };
        getSellerAndFollowers();
    }, []);

    const zoomOutProperties = {
        duration: 9000,
        transitionDuration: 100,
        infinite: true,
        indicators: true,
        scale: 0.4,
        arrows: true
    };

    const HeaderP = withRouter(Header);
    const userData = !JSON.parse(localStorage.getItem('userData')!) ? { user: { id: 0 } } : JSON.parse(localStorage.getItem('userData')!);
    const sellerData = props.sellerData === undefined ? {} : props.sellerData;
    const { publications, name, lastname, phonenumber, id, province }: any = sellerData;
    const follower = props.followerData === undefined ? [] : props.followerData;
    const checkFollower = follower.find((e: any, i: number) => e.seguidoresId === userData.user.id);

    const dataRate = props.ratingData ? props.ratingData : [];


    const addFollowersAndDelete = async (id: number) => {
        const followerData = {
            userId: id,
            seguidoresId: userData.user.id
        };
        if (userData.user.id === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes de tener una cuenta!',
                // footer: '<a href>Why do I have this issue?</a>'
            });
        } else {
            if (!checkFollower) {
                await props.addFollower(followerData);
                await props.getFollowers(props.match.params.sellerId && props.match.params.sellerId);
            } else {
                await props.deleteFollower(userData.user.id);
                await props.getFollowers(props.match.params.sellerId && props.match.params.sellerId);
            };
        };
    };

    const seeFollowers = () => {
        if (seeFollowerF.seeFollower === true) {
            followerF({
                ...seeFollowerF,
                seeFollower: false,
            });
        } else {
            followerF({
                ...seeFollowerF,
                seeFollower: true,
                seeRanking: false,

            });
        };
    };

    const seeRanking = () => {
        seeFollowerF.seeRanking === true
            ?
            followerF({
                ...seeFollowerF,
                seeRanking: false,
            })
            :
            followerF({
                ...seeFollowerF,
                seeRanking: true,
                seeFollower: false,

            });
    };
    // };

    // const seeProfile = (id : number) =>{
    //     props.history.push(`/seller-profile/${id}`);
    // };


    // valoracion del usuario.
    const sendDataRating = () => {
        // const userData = JSON.parse(localStorage.getItem('userData')!);
        userData.user.id === 0

            ?

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes de tener una cuenta!',
                // footer: '<a href>Why do I have this issue?</a>'
            })

            :

            Swal.fire({
                title: 'quieres calificar a este vendedor?',
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
                            let monthType = new Date().getMonth();
                            let month = monthType.toString();
                            switch (month) {
                                case '0':
                                    month = "Enero";
                                    break;
                                case '1':
                                    month = "Febrero";
                                    break;
                                case '2':
                                    month = "Marzo";
                                    break;
                                case '3':
                                    month = "Abril";
                                    break;
                                case '4':
                                    month = "Mayo";
                                    break;
                                case '5':
                                    month = "Junio";
                                    break;
                                case '6':
                                    month = "Julio";
                                    break;
                                case '7':
                                    month = "Agosto";
                                    break;
                                case '8':
                                    month = "Septiembre";
                                    break;
                                case '9':
                                    month = "Octubre";
                                    break;
                                case '10':
                                    month = "Noviembre";
                                    break;
                                case '11':
                                    month = "Diciembre";
                                    break;
                            };
                            let day = new Date().getDay();
                            const year = new Date().getFullYear();
                            const dataRate = {
                                userId: id,
                                qualifierId: userData.user.id,
                                qualification: qualification,
                                commentary: commentary,
                                dateOfCommentary: `${day} de ${month} del ${year}`,
                            };
                            console.log(dataRate);
                            await props.addUserRating(dataRate);
                            await props.getMyRating(id);
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

    // const rateUser = () => {
    //     // console.log(sellerData);
    //     Swal.fire({
    //         title: '¿Compraste el producto agregado?',
    //         // text: "puede hacer un comentario y calificar el servicio brindado!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Si!'
    //     }).then((result) => {
    //         if (result.value) {
    //             sendDataRating();
    //         };
    //     });
    // };


    return (
        <div className='d-flex justify-content-between flex-column' style={{ height: '100vh' }}>
            <HeaderP />
            <div className='body container col-md-9 mt-4'>
                {
                    props.screenLoading ? <Loader /> :
                        <div className='bodyP'>
                            <div className="user mb-4 ">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title"> {name + ' ' + lastname}     </h5>
                                    </div>
                                    <div className="card-body d-flex justify-content-between">
                                        <div className='d-flex flex-column'>
                                            <span> {province && province.province_name} </span>
                                            <span> cell:  {phonenumber} </span>
                                            <button
                                                onClick={() => addFollowersAndDelete(id)}
                                                className={checkFollower ? ' btn btn-danger mt-4 mb-2' : 'btn btn-secondary  mt-4 mb-2'}
                                            >
                                                {
                                                    checkFollower ? 'Dejar de ser cliente' : ' Ser cliente'
                                                }
                                            </button>
                                            <button className="btn btn-primary" onClick={sendDataRating}> Calificar vendedor</button>
                                        </div>
                                        <div className='d-flex  flex-column  align-self-end align-items-end'>

                                            <p onClick={seeFollowers} className='mb-0 seeMyFollowers' style={{ fontSize: '20px' }}> <strong> {follower.length}  </strong>  clientes</p>
                                            <p
                                                className='mb-0  seeMyFollowers'
                                                onClick={seeRanking}
                                                style={{ fontSize: '20px' }}
                                            > <strong> {dataRate.length}</strong> testimonios </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {
                                seeFollowerF.seeRanking && <RateUser userId={id} />
                            }

                            {
                                seeFollowerF.seeFollower &&
                                <div className="followers mt-4 ">
                                    <h4> Clientes</h4>
                                    <Followers
                                        followers={follower}
                                    />
                                </div>
                            }
                            <div className='sPublication mt-4'>
                                <h3> Sus Publicaciones</h3>
                                <div className="d-flex flex-wrap ">
                                    {
                                        publications && publications.map((p: any, i: number) => {
                                            return (
                                                <div className="card p col-md-3 col-sm-6  col-6  " id='publication' key={i}>
                                                    <div className="card-body flex-column">
                                                        <div className="slide-container  w-100 h-100" >
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
                                                            <h4 className='text-truncate'> Precio: ${p.price} </h4>
                                                            <h5 className='text-truncate'>  {p.title}  </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                }
            </div>
            <Footer />
        </div>
    );
};
export default SellerProfile; 