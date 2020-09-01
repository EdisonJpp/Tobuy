import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

interface props extends RouteComponentProps<any> {
    editUserFunction: (password: any) => void;
};
const EditPassword: React.FC<props> = (props: props) => {
    const [newPassword, passwords] = useState({
        oldPassword: ' ',
        password: '',
        oldIncorrect: false,
    });
    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        passwords({
            ...newPassword,
            [name]: value,
        });
    };
    const savePass = async () => {
        const pass = JSON.parse(localStorage.getItem('userData')!);
        const oldPass = pass.user.password;
        if (oldPass === newPassword.oldPassword) {
            const dataPass = { password: newPassword.password, id: pass.user.id }
            await props.editUserFunction(dataPass);
            props.history.push('/user');
        } else {
            passwords({
                ...newPassword,
                oldIncorrect: true,
            });
        };
    };
    const disable = () => {
        const newPasswords = newPassword.password && newPassword.password.length >= 8;
        const allValidate = (
            newPasswords && newPassword.oldPassword
        );
        return allValidate;
    };
    return (
        <div className="edtPasword col-md-6 col-9">
            <div className="card-deck border">
                <div className="card-body">
                    <div className="form-group">
                        <p >contraseña vieja</p>
                        <input type="password" name='oldPassword' onChange={change} className="form-group w-100 mb-0" />
                    </div>
                    {
                        newPassword.oldIncorrect === true && <div className="alert alert-danger" role="alert">
                            contraseña anterior incorrecta
</div>
                    }
                    <div className="form-group">
                        <p >contraseña nueva</p>
                        <div className=''>
                            <input type="password" name='password' onChange={change} className="form-group w-100 mb-0 " />
                            <sub> como minimo 8 caracteres </sub>
                        </div>
                    </div>
                    <button className="btn btn-primary mr-4 border-0 " disabled={!disable()} onClick={savePass} style={{ background: '#ffa35f', color: 'white' }}> guardar</button>
                    <button className="btn btn-danger" onClick={() => props.history.push('/user')}> cancelar</button>
                </div>
            </div>
        </div>
    );
};
export default withRouter(EditPassword);