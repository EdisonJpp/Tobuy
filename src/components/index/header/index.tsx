import React from 'react';
import './css/index.css';
import Login from '../../login';
import Name from './img/tipo3.png';
import { RouteComponentProps, Link } from 'react-router-dom';
import { Dispatch } from 'redux'
import { searchPublicationSuccess, searchPublicationFetch } from '../../../redux/actions/publications/postActions';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
// import newLogo from './img/newLogo.png';

interface props extends RouteComponentProps<any> {
  search: (text: any) => void;
  dataCart: any[];
};
interface state {
  text: string;
  scroll: boolean;
};
class HeaderIndex extends React.PureComponent<props, state>{
  constructor(props: props) {
    super(props);
    this.state = {
      text: '',
      scroll: false,
    };
  };
  getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(value + name);
    this.setState({
      ...this.state,
      [name]: value
    });
  };
  searching = async () => {
    if (this.state.text !== '') {
      this.props.history.push(`/search/${this.state.text}`);
      await this.props.search(this.state.text);
    } else return null;
  };
  searchToEnter = async (key: any) => {
    if (key.keyCode === 13) {
      this.props.history.push(`/search/${this.state.text}`);
      await this.props.search(this.state.text);
    } else return null;
  };
  componentDidMount = () => {
    document.addEventListener('scroll', () => {
      window.scrollY > 10 ? this.setState({ scroll: true }) : this.setState({ scroll: false });
    });
  };
  alert = () => {
    Swal.fire({
      position: 'top',
      title: '<strong> tienes que iniciar sesion,</strong>',
      icon: 'info',
      html:
        'si no tienes una cuenta <b> registrate </b>',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> registarme!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        ' tengo cuenta',
      cancelButtonAriaLabel: 'Thumbs down'
    }).then(r => {
      if (r.value) {
        this.props.history.push('/createUser');
      };
    });
  };

  start = () => {
    this.props.history.push('/');
  }
  render() {
    const userData = JSON.parse(localStorage.getItem('userData')!);
    return (
      <div className=''>
        <header className={
          // this.state.scroll ?
          //  'scrolled  bg-light' 
          //  : 
          'header bg-light'

        } >
          <nav className="navbar navbar-expand-lg navbar-light container col-md-9 col-lg-9 col-xl-9 col-12">
            <div className=" d-flex justify-content-between  mr-4" >

              <div >
                <img src='https://tobuy-com-20.herokuapp.com/logo/newLogo.png' alt="logo" width="186px" height='44px' style={{ cursor: "pointer" }} className='align-self-center' onClick={this.start} />
              </div>

              <button className="navbar-toggler ml-4" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

            </div>
            <div className="d-flex align-items-center search flex-wrap w-100 m-1 " >

              <input className="form-control inputSearch border-1" name='text' onKeyUp={this.searchToEnter} onChange={this.getValue} value={this.state.text} type="text" placeholder="Qué estás buscando?" />
              <button className="btn border-0 searchBTN" onClick={this.searching}><i className="fas fa-search"></i></button>
            </div>


            <div className="collapse navbar-collapse justify-content-end   ml-4" id="navbarSupportedContent">
              <div className='d-flex   '>
                {userData ? <Link to='/user' className='align-self-center'> <i className="far fa-user-circle mr-4"></i> </Link> :
                  <div className="d-flex rigth flex-column dropdown mr-3" style={{ cursor: 'pointer' }}>
                    <i className="far fa-user toggle mr-4" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ></i><p className=' mb-0 ' style={{ fontSize: '13px', color: '#333' }}>iniciar sesion</p>
                    <div className="dropdown-menu" id='divHeaderLogin' aria-labelledby="dropdownMenuButton">
                      <Login />
                    </div>
                  </div>}

                <div className='align-self-center '>
                  {userData ? <button onClick={() => this.props.history.push('/create-publication')} className="btn align-self-center  publicar mr-4" > vender! </button>
                    :
                    <button className="btn align-self-center publicar  mr-4" onClick={this.alert}> vender! </button>
                  }
                </div>
                <div className='align-self-center  mr-1'>
                  {userData ?
                    <Link to='/your-shoppingcart' className='align-self-center text-decoration-none'> <i className="fas fa-shopping-cart mr-4 d-flex  w-100" style={{ fontSize: '30px', color: '#3333' }} > <sup className='badge badge-warning border ' style={{ fontSize: '15px', color: 'white', background: "#a5ebff" }} > {this.props.dataCart ? this.props.dataCart.length : 0}  </sup> </i>  </Link>
                    :
                    <i className="fas fa-blog  blog mr-4" >blog</i>
                  }
                </div>
              </div>

            </div>
          </nav>
        </header>
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  search: async (text: any) => {
    await dispatch(searchPublicationFetch());
    dispatch(await searchPublicationSuccess(text))
  },
});
const mapStateToProps = (state: any) => {
  return {
    dataCart: state.shoppingCart.data,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderIndex);