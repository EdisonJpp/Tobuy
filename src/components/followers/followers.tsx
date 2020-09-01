import React from 'react';
// import profile from '../seller';
import { withRouter, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

interface props extends RouteComponentProps{
    followers : any ; 
}


const Followers = (props: props) => {
    const FollowersData = props.followers === undefined ? [] : props.followers;

    // const seeProfile = (id : number) =>{
    //     props.history.push(`/seller-profile/${id}`);
    // };
  
    return (
        <div>
            <table className="table table-hover border-1 mb-4">
                {/* <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Telefono</th>
                    </tr>
                </thead> */}
                {
                    FollowersData.map((f: any, i: number) => {
                        return (

                            <tbody 
                            // onClick={()=> seeProfile(f.user.id) }
                             >
                                <tr  >
                                {/* <Link to={`/seller-profile/${f.user.id}`}> */}
                                    {/* <th scope="row"> {i} </th> */}
                                    <td>{f.user.name}</td>
                                    <td>  {f.user.lastname} </td>
                                    <td> {f.user.phonenumber}</td>
                                {/* </Link> */}
                                </tr>
                            </tbody>
                        );
                    })
                }
            </table>


        </div>
    );
};

export default withRouter(Followers); 