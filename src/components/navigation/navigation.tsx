import React from 'react';
import { Link} from 'react-router-dom';

interface props {
    postByCategory: any;

};



const Navigation : React.FC<props> = ({ postByCategory }: props) => {
    const { categorie_name , id} : any = postByCategory ? postByCategory : {};
    return (
        <nav aria-label="breadcrumb container ">
            <ol className="breadcrumb bg-light">
                <li className="breadcrumb-item"><Link to='/'>inicio</Link></li>
                <li className="breadcrumb-item active" aria-current="page">categoria  </li>
                <li className="breadcrumb-item" > <Link to={`/category/${id}`}> {!categorie_name ? 'Cargando...' : categorie_name }  </Link> </li>
            </ol>
        </nav>
    );
}

export default Navigation;

// postByCategories