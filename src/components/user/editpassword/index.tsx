import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';

interface props extends RouteComponentProps<any>{
    editUserFunction : (password: any)=> void;
    // screenLoading : false ; 
}
const EditPassword : React.FC<props> = (props : props) =>{
    return(
        // <h2> hola que tal </h2>
        <div className="edtPasword col-md-4 col-9">
            <div className="card-deck">
                <div className="card-body">
                    <div className="form-group">
                        <p >contraseña vieja</p>
                        <input type="password" className="form-group"/>
                    </div>
                    <div className="form-group">
                        <p >contraseña nueva</p>
                        <input type="password" className="form-group"/>
                    </div>
                    <button className="btn btn-primary"> guardar</button>
                    <button className="btn btn-danger" onClick={ () => props.history.push('/user')}> cancelar</button>
                </div>
            </div>
        </div>
    );
};
export default  EditPassword ;