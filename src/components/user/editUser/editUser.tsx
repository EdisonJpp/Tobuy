import React, { useState } from 'react';
import { withRouter } from 'react-router';


const EditUser: React.SFC<any> = (props: any) => {
    const [newUserData, editUser] = useState(
        {
            username: props.username,
            name: props.name,
            lastname: props.lastname,
            gender: props.gender,
            phonenumber: props.phonenumber,
            id: props.id,
        });
    const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        console.log(newUserData)
        editUser({
            ...newUserData,
            [name]: value,
        });
    };
    const updateUser = async () => {
        console.log(newUserData);
        await props.editUserFunction(newUserData);
        await props.myPublicationF(newUserData.id);
        props.history.push('/user');
    };
    const { username, lastname, phonenumber, gender, name }: any = newUserData;
    return (
        <div className='border col-md-8 mb-3'>
            <div className="card-deck flex-column">
                <div className="card-header">
                    <h3> Configuracion   </h3>
                </div>
                <div className="card-body">
                    <div className="  form-group">
                        <p className='font-weight-bold'>Nombre de Usuario</p>
                        <input type="text" value={username} className="form-control" name='username' onChange={change} />
                    </div>
                    <div className="  form-group">
                        <p className='font-weight-bold'>Nombre</p>
                        <input type="text" className="form-control" value={name} name='name' onChange={change} />
                    </div>
                    <div className="  form-group">
                        <p className='font-weight-bold'>Apellido</p>
                        <input type="text" className="form-control" value={lastname} name='lastname' onChange={change} />
                    </div>
                    <div className="  form-group">
                        <p className='font-weight-bold'>Genero</p>
                        <select className="form-control" name='gender' value={gender} onChange={change} >
                            <option value="hombre"> Masculino</option>
                            <option value="mujer"> Femenino</option>
                        </select>
                    </div>
                    <div className="  form-group">
                        <p className='font-weight-bold'>Número de telefono</p>
                        <input type="number" className="form-control" value={phonenumber} name='phonenumber' onChange={change} />
                    </div>
                </div>
            </div>
            <div className='d-flex mb-2'>
                <button className="btn btn-primary mr-4 " onClick={updateUser}> Guardar</button>
                <button className="btn btn-primary " onClick={() => props.history.push('/user')}> cancelar</button>
            </div>
        </div>
    );
};
export default withRouter(EditUser); 