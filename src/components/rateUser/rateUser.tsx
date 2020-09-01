import React, { useEffect } from 'react';
import './css.css';
import Loader from '../loader';


const RateUser: React.FC<any> = (props: any) => {
    useEffect(() => {
        const getMyRating = async () => {
            await props.getMyRating(props.userId);
        };
        getMyRating();
    }, []);

    const ratingData = props.ratingData ? props.ratingData : [];
    const contentAverageCount: any = [];
    const count: any = [];

    const ratings = ratingData && ratingData.map((r: any, i: number) => {

        const contentStars: any[] = [];
        for (let i = 0; i < r.qualification; i++) {
            contentStars.push(i);
        };

        contentAverageCount.push(parseInt(r.qualification));

        return (
            <div className="card m-2 col-10 col-md-3 " style={{ width: "18rem" }} key={r.id}>
                <div className="card-body">
                    <h5 className="card-title"> </h5>
                    <h6 className="card-subtitle mb-2 text-muted"> {
                        !contentStars ? <Loader /> : contentStars.map((r: any, i: number) => {
                            return (
                                <i key={i} className="fas fa-star calification"></i>
                            );
                        })
                    }   </h6>

                    <p> <b> {r.user && r.user.name + ' ' + r.user.lastname} </b></p>
                    <p className="card-text">{r.commentary}</p>
                    <sub className=" align-self-end text-nowrap bd-highlight border-bottom" style={{ width: '8rem' }} > {r.dateOfCommentary} </sub>
                </div>
            </div>
        );
    });


    const reducer = (a: number, b: number) => a + b;
    const sum = contentAverageCount.reduce(reducer, 0);
    const average = sum / contentAverageCount.length;

    for (let i = 0; i < Math.floor(average); i++) {
        count.push(i);
    };

    const validateDecimal = (valor: any) => {
        var RE = /^\d*(\.\d{1})?\d{0,1}$/;
        if (RE.test(valor)) {
            return true;
        } else {
            return false;
        };
    }

    return (
        <div className='mb-4'>
            <div className='d-flex flex-wrap'>

                <h4 className='mr-3 '> Testimonios  </h4 >  | <h4 className='ml-4 d-flex mr-1'> Calificación:  <p className='ml-2 mr-2'>{average}</p>  {
                    validateDecimal(average) ?
                        <div className='d-flex'>
                            {

                                count.map((e: any, i: number) => {
                                    return (
                                        <i key={i} className="fas fa-star  calification "></i>
                                    );
                                })
                            }
                            <i className="fas fa-star-half-alt  calification"></i>
                        </div>
                        :
                        count.map((e: any, i: number) => {
                            return (
                                <i key={i} className="fas fa-star border calification"></i>
                            );
                        })
                }
                </h4>
            </div>
            <div className='d-flex flex-wrap'>
                {
                    props.screenLoading
                        ? <Loader />
                        : ratings.length ? ratings : <h6> No tienes testimonios ni Calificacion</h6>
                }
            </div>
        </div>
    );
};
export default RateUser;





