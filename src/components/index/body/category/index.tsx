import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

interface props extends RouteComponentProps{

}

const Category: React.FC<props> = ({ history }: props) => {

    const category = async (categoryId: number) => {
        // await this.props.getPostBycategory(categoryId);
        history.push(`/category/${categoryId}`);
    };

    return (

        <div className="dropdown d-flex" style={{ width: '17%' }}>
            <h3 className="toggle btn btn-primary border-0" style={{ fontSize: '20px', backgroundColor: '#ffa35f' }} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categorias
</h3>
            <div className="dropdown-menu  items" aria-labelledby="dropdownMenuButton">
                <div className="d-flex">
                    <li className="dropdown-item category"
                        // onMouseOver={this.n} 
                        onClick={() => category(1)}>
                        <i className="mr-2 fas fa-tshirt"></i>
                ropas
                </li>
                </div>
                <div className="d-flex">
                    <li className="dropdown-item category" onClick={() => category(2)}>
                        <i className=" mr-2 fas fa-house-user" ></i>
                casas y apartamentos
            </li>
                </div>
                {/* <div className="d-flex">
                <li className="dropdown-item" >
                    <i className="mr-2 fab fa-critical-role" ></i>
                    garments
            </li>
            </div> */}
                <div className="d-flex">
                    <li className="dropdown-item category" onClick={() => category(3)}>
                        <i className="mr-2 fas fa-car"></i>
                Autos y motos
            </li>
                </div>
                <div className="d-flex">
                    <li className="dropdown-item category" onClick={() => category(4)}>
                        <i className=" mr-2 fas fa-dice"></i>
                juegos y video juegos
            </li>
                </div>
                <div className="d-flex">
                    <li className="dropdown-item category" onClick={() => category(5)}>
                        <i className="mr-2 fas fa-volleyball-ball"></i>
                sport
            </li>
                </div>
                <div className="d-flex">
                    <li className="dropdown-item category" onClick={() => category(6)}>
                        <i className=" mr-2 fas fa-mobile-alt"></i>
                    computadoras ,celulares, etc...
            </li>
                </div>
                {/* <div className="d-flex">
                <li className="dropdown-item" onClick={() => this.category(6)}>
                    <i className=" mr-2 fas fa-laptop"></i>
                computer and laptops
            </li>
            </div> */}
            </div>
        </div>
    );
};
export default withRouter( Category); 