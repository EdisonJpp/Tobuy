import React from 'react';
import './css/login.css';
import { Link, RouteComponentProps } from 'react-router-dom';
import Loader from '../loader';
import Swal from 'sweetalert2'

interface props extends RouteComponentProps<any> {
    authuser: (userData: any) => void;
    screenLoading: boolean;
    userData: any;
    failed: any;
};
interface state {
    emai: string;
    password: string;
    rememberData: boolean;
};

class Login extends React.PureComponent<props, state>{
    constructor(props: props) {
        super(props);
        this.state = {
            emai: '',
            password: '',
            rememberData: false,
        };
    };
    change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({
            ...this.state,
            [name]: value
        });
    };
    submit = async () => {
        await this.props.authuser(this.state);
        const rememberData = { emai: this.state.emai, password: this.state.password };
        this.state.rememberData === true ? localStorage.setItem('rememberData', JSON.stringify(rememberData)) : console.log('na');
        localStorage.setItem('userData', JSON.stringify(this.props.userData === undefined ? null : this.props.userData));
        this.props.failed === undefined &&
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Haz iniciado sesion correctamente, GRACIAS!`,
                showConfirmButton: false,
                timer: 2500
            })
        this.props.history.push('/')
            ;
    };
    allValidate = () => {
        const allValidate = (
            this.state.emai && this.state.password
        );
        return allValidate;
    };
    componentDidMount = () => {
        const rememberData = JSON.parse(localStorage.getItem('rememberData')!);
        if (rememberData) {
            this.setState({
                emai: rememberData.emai,
                password: rememberData.password,
            });
        };
    };
    render() {
        return (
            <main className='card-deck dropdown-item ml-1 p-4' id='mainLogin'>
                <p className='d-flex flex-wrap mb-0'>no tienes cuenta? <Link to='/createUser'> <strong> registrate </strong></Link></p>
                <hr className='w-100 text-dark' />
                <div className="car-body">
                    <div className="form-group">
                        <input
                            type="text"
                            name='emai'
                            onChange={this.change}
                            placeholder='Correo electronico'
                            value={this.state.emai}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name='password'
                            onChange={this.change}
                            placeholder='Contraseña'
                            value={this.state.password}
                            className="form-control"
                        />
                        {
                            this.props.failed &&
                            <div className="alert alert-danger w-100" role="alert">
                                <strong>  Datos Incorrectos !</strong>
                            </div>
                        }
                    </div>
                    <div className='form-group form-check' >
                        {
                            this.props.screenLoading && <Loader />
                        }
                        <input type="checkbox" className='form-check-input' name='rememberData' onChange={() => this.setState({ rememberData: true })} />
                        <label className="form-check-label">Recordar contraseña </label>
                    </div>
                    <button className="btn btn-primary w-100"
                        disabled={!this.allValidate()}
                        onClick={() => this.submit()}>
                        Inicia Sesión
                         </button>
                </div>
            </main>
        );
    };
};
export default Login;