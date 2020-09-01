import React, { Fragment, useState, useEffect } from 'react';
import './css/createUser.css';
import { RouteComponentProps } from 'react-router';
import TopBlock from '../topBlock';
import Footer from '../index/footer';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

interface props extends RouteComponentProps<any> {
    createUser: (user: any) => void;
    getUser: () => void;
    usersData: any;
};
const CreateUser: React.FC<props> = (props: props) => {
    const [user, createUser]: any = useState({
        name: '',
        lastname: '',
        username: '',
        emai: '',
        password: '',
        province_id: 2,
        gender: '',
        phonenumber: 0,
        // profilePicture: '',
        emailError: false,
    });
    useEffect(() => {
        props.getUser();
    }, []);
    const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | any) => {
        const { name, value } = e.target;
        createUser({
            ...user,
            [name]: value
        });
        // const files = e.target.files;
        // if (FileReader && files && files.length) {
        //     Array.from(files).map((p: any, i: number) => {
        //         const fr = new FileReader;
        //         fr.onload = () => {
        //             const resulType = fr.result ; 
        //             // const result = resulType.join(''); 
        //             createUser({
        //                 ...user,
        //                 profilePicture: fr.result,
        //             });
        //         };
        //         fr.readAsDataURL(p);
        //     });
        // };
    };
    const create = async () => {
        if (/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es|net|do)+$/.test(user.emai)) {
            const userData = {
                name: user.name,
                lastname: user.lastname,
                username: user.username,
                emai: user.emai,
                password: user.password,
                province_id: user.province_id,
                gender: user.gender,
                phonenumber: user.phonenumber,
            };
            const usersData = props.usersData;
            const users = usersData.find((e: any, i: number) => e.emai === user.emai);
            if (!users) {
                await props.createUser(userData);
                props.history.push('/');
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Gracias por unirtenos!! </br> Ya puedes iniciar session',
                    showConfirmButton: false,
                    timer: 3500
                });
            } else {
                createUser({
                    ...user,
                    emailError: true,
                });
            };
        } else {
            Swal.fire('email incorrect el dominio debe der ser uno de estos "hotmail, outlook, yahoo, live, gmail" ');
        };
    };
    const allValidate = () => {
        const name = user.name && user.name.length >= 3;
        const lastname = user.lastname && user.lastname.length >= 3;
        const username = user.username && user.username.length >= 3;
        const password = user.password && user.password.length >= 8;
        const allValidate = (
            name && lastname && password && user.gender && user.province_id && user.phonenumber && username
        );
        return allValidate;
    };
    const invalidEmail = 'Este correo electronico ya existe';
    const privincesTypes = ['1', 'Distrito Nacional', 'Azua', 'Baoruco', 'Dajabon', 'San Francisco de Macorís', 'Elias Piña', 'El Seibo', 'Moca', 'Independencia', 'La Altagracia', 'La Romana', 'La Vega', 'Nagua', 'Monte Cristi', 'Pedernales', 'Baní', 'Puerto Plata', 'Salcedo', 'Samaná', 'San Cristóbal', 'San Juan', 'San Pedro de Macorís', 'Cotuí', 'Santiago', 'Santiago Rodríguez', 'Valverde(Mao)', 'Bonao', 'Monte Plata', 'Hato Mayor', 'San José de Ocoa', 'Santo Domingo Este', 'Santo Domingo Oeste', 'Santo Domingo Nonrte', 'Santo Domingo Sur'];
    const provinces = privincesTypes.sort();
    return (
        <Fragment>
            <body id='bodyCreate'>
                <TopBlock />
                <main className=' '>
                    <div className='  container border col-md-5 bg-light'>
                        <p> <Link to='/'>volver </Link> </p>

                        <div className="  ">
                            <h2 className='text-center cursive'> Registro</h2>
                        </div>
                        <hr />
                        <div className=''>
                            <div className=' ml-4'>
                                <div className="form-group d-flex flex-wrap">
                                    <label htmlFor="">Nombre:</label>
                                    <input
                                        type="tex"
                                        name='name'
                                        onChange={change}
                                        placeholder='ej: Edison'
                                        className="form-control"
                                        value={user.name}
                                    />
                                </div>
                                <div className="form-group d-flex flex-wrap">
                                    <label htmlFor="" className=''>Apellido</label>
                                    <input
                                        type="tex"
                                        name='lastname'
                                        onChange={change}
                                        placeholder='ej: Padilla'
                                        className="form-control"
                                        value={user.lastname}
                                    />
                                </div>
                                <div className="form-group d-flex flex-wrap">
                                    <label htmlFor="" className='' >Nombre de Usuario:</label>
                                    <input
                                        type="tex"
                                        name='username'
                                        onChange={change}
                                        placeholder='ej: edison_20'
                                        className="form-control "
                                        value={user.username}
                                    />
                                </div>
                                <div className="form-group d-flex flex-wrap">
                                    <label htmlFor="" className=''>Correo:</label>
                                    <div className='w-100'>
                                        <input
                                            type="email"
                                            name='emai'
                                            onChange={change}
                                            placeholder="ej: edison@email.com"
                                            className="form-control "
                                            value={user.emai}
                                        />
                                        {user.emailError === true && <sub className=' text-danger'> {invalidEmail} </sub>}
                                    </div>
                                </div>
                                <div className="form-group d-flex flex-wrap">
                                    <label htmlFor="">Contraseña:</label>
                                    <div className="w-100">
                                        <input
                                            type="password"
                                            name='password'
                                            onChange={change}
                                            placeholder='*********'
                                            className="form-control"
                                            value={user.password}
                                        />
                                        <sub> minimo 8 caracteres </sub>
                                    </div>
                                </div>
                                <div className="form-group ">
                                    <p>provincia:</p>
                                    <select
                                        onChange={change}
                                        name='province_id'
                                        id="inputState"
                                        className="form-control"
                                        value={user.province_id}
                                    >
                                        <option selected>provincia</option>
                                        {
                                            provinces.map((p, i) => {
                                                return (
                                                    <option key={i} value={i}> {p}</option>
                                                );
                                            })
                                        }
                                    </select>
                                </div>
                                {/* <div className="form-group">

                                    <div className='d-flex flex-column'>
                                        <label > foto de perfil</label>
                                        <input type="file" name='profilePicture' onChange={change} className="" />

                                    </div>
                                    <img src={user.profilePicture ? user.profilePicture : require('./img/user.png')} alt="profile" width='100px' height='60px' />

                                </div> */}

                                <div className='form-group form-check d-flex flex-wrap' >
                                    <div className='d-flex flex-column mr-4'>
                                        <input
                                            type="radio"
                                            onChange={change}
                                            value='m'
                                            name='gender'
                                            className='form-check-input'

                                        />
                                        <label className="form-check-label"  >masculino</label>
                                    </div>
                                    <div className='ml-4'>
                                        <input
                                            type="radio"
                                            className='form-check-input'
                                            name='gender'
                                            value='f'
                                            onChange={change}
                                        />
                                        <label className="form-check-label">femenino</label>
                                    </div>
                                </div>
                                <div className="form-group d-flex flex-wrap">
                                    <label htmlFor="">telefono </label>
                                    <input
                                        type="text"
                                        name='phonenumber'
                                        onChange={change}
                                        placeholder='ej: 8099973338'
                                        className="form-control mr-4"
                                        value={user.phonenumber}
                                    />
                                </div>
                                <button className="btn btn-primary w-100"
                                    disabled={!allValidate()}
                                    onClick={create}
                                > crear usuario
                                  </button>
                            </div>
                        </div>



                    </div>
                </main>
                <Footer />
            </body>
        </Fragment>
    );
};
export default CreateUser;