import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../../index/footer';
import TopBlock from '../../topBlock';
import Loader from '../../loader';
import './css/index.css';
interface state {
    title: string,
    condition: string,
    price: number,
    description: String,
    photos: any[],
    wasPublishedAt: string,
    user_id: any,
    categoryId: Number,
    publicationData: any,
    // perfil: any;
};

interface Iprops extends RouteComponentProps<any> {
    newpublication: (photo: any, publicationData: any) => void;
    screenLoading: boolean;
};
class NewPublication extends React.PureComponent<Iprops, state>{
    constructor(props: Iprops) {
        super(props);
        const user = JSON.parse(localStorage.getItem('userData')!);
        this.state = {
            title: '',
            condition: '',
            price: 0,
            description: '',
            photos: [],
            wasPublishedAt: '',
            user_id: user.user.id,
            categoryId: 0,
            publicationData: {},
            // perfil: '',
        };
    };
    change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any>) => {
        var tgt = e.target,
            files = tgt.files;
        const { name, value } = tgt;
        this.setState({
            ...this.state,
            [name]: value
        });
        if (FileReader && files && files.length) {
            Array.from(files).map((i: any, index: number) => {
                var fr = new FileReader();
                fr.onload = () => {
                    const result = fr.result;
                    this.setState({
                        photos: [...this.state.photos, result],
                    });
                };
                fr.readAsDataURL(i);
            });
        };
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
        // let day = dayType.toString();
        // switch (day) {
        //     case '0':
        //         day = "domingo";
        //         break;
        //     case '1':
        //         day = "lunes";
        //         break;
        //     case '2':
        //         day = "martes";
        //         break;
        //     case '3':
        //         day = "miercoles";
        //         break;
        //     case '4':
        //         day = "jueves";
        //         break;
        //     case '5':
        //         day = "viernes";
        //         break;
        //     case '6':
        //         day = "sabado";
        //         break;
        // };
        const year = new Date().getFullYear();
        const wasPublishedAt = `${day} de ${month} del ${year}`;
        this.setState({
            publicationData: {
                title: this.state.title,
                condition: this.state.condition,
                price: this.state.price,
                description: this.state.description,
                wasPublishedAt: wasPublishedAt,
                users_id: this.state.user_id,
                categoryId: this.state.categoryId,
            },
        });
    };
    submit = async () => {
        await this.props.newpublication(this.state.photos, this.state.publicationData);
        this.props.history.push('/user');
    };
    allValidate = () => {
        const title = this.state.title && this.state.title.length >= 3;
        const categoryId = this.state.categoryId && this.state.categoryId;
        const condition = this.state.condition && this.state.condition.length >= 3;
        const description = this.state.description && this.state.description.length >= 3;
        const photos = this.state.photos && this.state.photos.length >= 1;
        const price = this.state.price && this.state.price;
        const allValidate = (
            title && categoryId && condition && description && photos && price
        );
        return allValidate;
    };
    render() {
        return (
            <div className=" bodyNewPost create-post d-flex flex-column justify-content-between">
                {/* <TopBlock /> */}
                <div className=" container d-flex  mt-4 mb-4">
                    {
                        this.props.screenLoading ? <Loader /> :

                            <div className="cardNewPost  card  col-md-6 bg-light">
                                <div className="card-header bg-light">
                                    <h2> Crear Anuncio</h2>
                                    <hr />
                                    <div>
                                        <Link to='/'>volver al inicio </Link>
                                    </div>
                                </div>
                                <hr />
                                <div className="card-body bg-light">
                                    <div className="d-flex form-group flex-wrap">
                                        <p className='  align-self-center' >Categoria:</p>
                                        <select name='categoryId' id="inputState" className="form-control " onChange={this.change}  >
                                            <option selected>elige</option>
                                            <option value='1'   >ropas</option>
                                            <option value='2'>casas y apartamentos</option>
                                            {/* <option value='3'>role</option> */}
                                            <option value="3"> autos y motos</option>
                                            <option value="4"> juegos</option>
                                            <option value="5"> deporte</option>
                                            <option value="6"> computadoras ,celulares, etc...</option>
                                        </select>
                                    </div>
                                    <div className="form-group d-flex justify-content-between">
                                        <label className="form-check-label align-self-center" >
                                            Condicion:
      </label>
                                        <div>

                                            <input className="form-check-input" type="radio" id="gridCheck" value='nuevo' onChange={this.change} name='condition' />
                                            <p className='mt-0 align-self-center'> nuevo</p>
                                        </div>
                                        <div>
                                            <input className="form-check-input" type="radio" id="gridCheck" value='usado' onChange={this.change} name='condition' />
                                            <p>Usado</p>
                                        </div>
                                        <div>
                                            <input className="form-check-input" type="radio" id="gridCheck" value='viejo' onChange={this.change} name='condition' />
                                            <p>Viejo</p>
                                        </div>
                                    </div>
                                    <div className="form-group d-flex flex-wrap">
                                        <p className='mr-4  align-self-center'>titulo:</p>
                                        <input type="text" className='form-control  ' onChange={this.change} name='title' />
                                    </div>

                                    <div className="form-group d-flex flex-wrap">
                                        <p className='mr-4  align-self-center'>Precio:</p>
                                        <input type="number" className='form-control' onChange={this.change} name='price' />
                                    </div>
                                    <div className="form-group ">
                                        <p className='mt-0'>Descripcion :</p>
                                        <textarea className='form-control' onChange={this.change} name='description' />
                                    </div>
                                    <div className="form-group">
                                        <p>Fotos(s)</p>
                                        <div className=" w-100 jumbotron bg-white border" >
                                            <div>
                                                <h4 className='text-center'>Arrastar</h4>
                                            </div>
                                            <h3 className='text-center'> o</h3>
                                            <div>
                                                <input type="file" className='ml-4' placeholder='subir otra imagen' onChange={this.change} name='image_name' />
                                                {
                                                    this.state.photos.length > 0 &&
                                                    <div>
                                                        <p className='mt-3'> Segunda imagen </p>

                                                        <input type="file" className='ml-4 ' placeholder='subir otra imagen' onChange={this.change} name='image_name' />
                                                    </div>
                                                }
                                                {
                                                    this.state.photos.length > 1 &&
                                                    <div>

                                                        <p className='mt-3'> tercera imagen </p>
                                                        <input type="file" className='ml-4 ' onChange={this.change} name='image_name' />

                                                    </div>
                                                }
                                                {
                                                    this.state.photos.length > 2 &&
                                                    <div>
                                                        <p className='mt-3'> cuarta imagen </p>

                                                        <input type="file" className='ml-4 ' onChange={this.change} name='image_name' />

                                                    </div>
                                                }
                                                {
                                                    this.state.photos.length > 3 &&
                                                    <div>
                                                        <p className='mt-3'> quinta imagen </p>

                                                        <input type="file" className='ml-4 ' onChange={this.change} name='image_name' />

                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className='btn btn-primary' disabled={!this.allValidate()} onClick={this.submit}>crear anuncio </button>
                            </div>
                    }
                </div>
                {/* <Footer /> */}
            </div>
        );
    };
};
export default NewPublication;