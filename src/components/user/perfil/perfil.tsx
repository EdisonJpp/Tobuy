import React, { useState, useEffect } from 'react';
import '../css/index.css'
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import Header from '../../index/header'
import Footer from '../../index/footer';
import Swal from 'sweetalert2';
import './css/css.css';
import Loader from '../../loader';
import EditUser from '../editUser';
import EditPassword from '../editpassword/editPassword';
import { Zoom } from 'react-slideshow-image';
import Followers from '../../followers';
import RateUser from '../../rateUser';
import ReactPlayer from 'react-player/lazy';
interface props extends RouteComponentProps<any> {
    myPublicationF: (users_id: number) => void;
    deleteMyPost: (id: number) => void;
    myPublications: any;
    screenLoading: boolean;
    screenLoadingDelete: boolean;
    editUserFunction: (user: any) => void;
    deleteSucces: any;
    followerData: any;
    getMyFollower: (userId: number) => void;
    getMyRating: (userId: number) => void;
    ratingData: any;
};

const User: React.FC<props> = (props: props) => {
    const userData = JSON.parse(localStorage.getItem('userData')!);
    const [user, userF]: any = useState({
        users_id: userData.user.id,
        seeMyFollowers: false,
        seeMyRating: false,
    });
    useEffect(() => {
        const getPost = async () => {
            await props.myPublicationF(user.users_id);
            await props.getMyFollower(user.users_id);
            await props.getMyRating(user.users_id);
        };
        getPost();
    }, [props.screenLoadingDelete]);
    const logout = () => {
        localStorage.removeItem('userData');
        props.history.push('/');
    };
    const deletePost = (id: number) => {
        Swal.fire({
            title: 'quieres eliminar tu anuncio?',
            text: "no hay vuelta atras!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ffa35f',
            cancelButtonColor: '#6b747d',
            confirmButtonText: 'sí, eliminar!'
        }).then(async (result) => {
            if (result.value) {
                Swal.fire(
                    'eliminado correctamente!',
                    'tu publicacion ha sido eliminada.',
                    'success'
                );
                await props.deleteMyPost(id);
                await props.myPublicationF(user.users_id);
                // props.history.push('/user');
            };
        });
    };

    const myRating = props.ratingData ? props.ratingData : [];
    // console.log(myRating);

    const mypublications = props.myPublications === undefined ? {} : props.myPublications;
    const { publications, name, lastname, phonenumber, gender, username, id }: any = mypublications;

    const zoomOutProperties = {
        duration: 9000,
        transitionDuration: 100,
        infinite: true,
        indicators: true,
        scale: 0.4,
        arrows: true
    };
    const seeMyFollowers = () => {
        user.seeMyFollowers === true ?
            userF({
                ...user,
                seeMyFollowers: false,
            })
            :
            userF({
                ...user,
                seeMyFollowers: true,
                seeMyRating: false,

            });


    };
    const seeMyRating = () => {
        user.seeMyRating == true ?
            userF({
                ...user,
                seeMyRating: false,
            })
            :
            userF({
                ...user,
                seeMyRating: true,
                seeMyFollowers: false,
            });
    };

    
    const HeaderIndex = withRouter(Header);
    const followerData = props.followerData !== undefined ? props.followerData : [];

    // if (props.screenLoadingDelete) {
    //     return (
    //         <div>
    //             <HeaderIndex />
    //             <Loader />
    //         </div>
    //     )
    // }
    return (
        <div className='d-flex flex-column justify-content-between' style={{ height: '100vh' }} >
            <HeaderIndex />
            <div className="body container col-md-9 mt-4" >
                {
                    props.match.params.edit ?
                        <EditUser
                            editUserFunction={props.editUserFunction}
                            username={username}
                            name={name}
                            lastname={lastname}
                            phonenumber={phonenumber}
                            gender={gender}
                            id={id}
                            myPublicationF={props.myPublicationF}
                        />
                        :
                        props.match.params.editP ? <EditPassword editUserFunction={props.editUserFunction} /> :
                            props.screenLoading ? <Loader /> :
                                <div className="user ">
                                    <div className="card">
                                        <div className="card-header">
                                            Configuración
</div>
                                        <div className="card-body d-flex justify-content-between">

                                            {/* <img src={`https://tobuy-com-20.herokuapp.com/profile/${profilePicture}`} alt="profile" width='100px' height='80px'/> */}
                                            <div>
                                                <h5 className="card-title"> {name + ' ' + lastname}     </h5>
                                                <Link to={`/user/password/${id}`}>Cambiar contraseña</Link>
                                                <p className='mt-2 seeMyFollowers mb-0 ' onClick={seeMyFollowers}> <strong> {followerData.length} </strong> clientes</p>
                                                <p onClick={seeMyRating} className=' seeMyFollowers'>  <strong> {myRating.length}</strong>  testimonios </p>

                                            </div>
                                            <div className='d-flex flex-column w-50 align-items-end'>
                                                <button className='btn btn-secondary w-50' onClick={() => props.history.push(`/user/${'edit'}`)}> editar</button>
                                                <button className=' btn btn-secondary w-50 mt-2' onClick={logout}> Cerrar Sesión </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                }
                <br />
                <br />
                {
                    user.seeMyRating && <RateUser userId={id} />
                }
                {
                    user.seeMyFollowers &&
                    <div className="myFollowers">
                        <h3> Mis Clientes</h3>
                        <Followers followers={followerData} />

                    </div>
                }

                <div className="d-flex justify-content-between ">
                    <h3>Mis Publicaciones</h3>
                    {
                        props.match.params.delete ? <button className="btn btn-danger" onClick={() => props.history.push(`/user`)} > cancelar</button>
                            :
                            <button className="btn btn-secondary" onClick={() => props.history.push(`/user/delete/post`)} >Eliminar publicación</button>
                    }
                </div>
                <div className="d-flex flex-wrap ">
                    {
                        publications && publications.map((p: any, i: number) => {
                            //  const image_name: any[]  =  p.image_name && p.image_name.split(',');
                            return (
                                <div className="card p col-md-3 col-sm-6  col-6  " id='publication' key={i}>
                                    <div className="card-body flex-column">
                                        {
                                            props.match.params.delete && <i className="far fa-trash-alt color-danger deletePost" onClick={() => deletePost(p.id)}></i>
                                        }
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
                                            <h4 className='text-truncate'>${p.price} </h4>
                                            <h5 className='text-truncate'> {p.title}  </h5>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default User; 