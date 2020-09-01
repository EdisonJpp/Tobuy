import React from 'react';
import './css/publi.css';
import { RouteComponentProps, Link, withRouter } from 'react-router-dom'
import Loader from '../../loader';
import { orderPublication } from '../../../entities/publications/publicationEntitie';
import SearchResult from '../../publications/searchResult_publication';
// import Offerts from '../../VIPofferts';
import Swal from 'sweetalert2';
import ByCategory from './posByCategory';
import RecentPost from './recentPost';
import Navigation from '../../navigation';
import Category from './category';
type priceOrdering = 'desc' | 'asc';
interface state {
    // currentPage: number,
    // postPerPage: number,
    orderDescendente: boolean;
    orderAscendente: boolean;
    orderByPrice?: priceOrdering;
};
interface props extends RouteComponentProps<any> {
    ReducerPublications: () => void;
    // getPostBycategory: (categoryId: number) => void;
    // postByCategory: any[];
    publications: any[];
    screenLoading: Boolean;
    resultOfSearch: any[];
    // postByCategoryFailed: any;
    addCart: (cart: any) => void;
    getCart: (userId: number) => void;
    cartData: any[];
};
class Body extends React.PureComponent<props, state>{
    constructor(props: props) {
        super(props);
        this.state = {
            // currentPage: 1,
            // postPerPage: 16,
            orderDescendente: false,
            orderAscendente: false,
        };
    };
    // getCartData = async() => {

    //     let i = 0;
    //     while (i < 1) {
    //         i++;
    //         const userData = JSON.parse(localStorage.getItem('userData')!);
    //         userData &&  await this.props.getCart(userData.user.id);

    //     };
    //     // for (let i = 0; i < 1; i++) {

    //     // };
    // };
    // this.getCartData;
    // handleClick = (e: any) => {
    //     this.setState({
    //         currentPage: e.target.value
    //     });
    // };

    filterPost = (orderBy: priceOrdering) => (a: orderPublication, b: orderPublication) => {
        console.log(orderBy);
        const aa: number = a.price;
        const bb: number = b.price;
        return orderBy === 'asc' ? (aa - bb) : (bb - aa);
    };
    activeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        value === 'asc' ? this.setState({ orderByPrice: 'asc' }) : value === 'desc' ? this.setState({ orderByPrice: 'desc' }) : console.log('any');
    };
    addCart = async (post: any) => {
        const userData = JSON.parse(localStorage.getItem('userData')!);
        const userId = userData.user.id;
        const publicationId = post.id;
        await this.props.getCart(userId);
        const dataShoppingCart = this.props.cartData === undefined ? [] : this.props.cartData;
        const d = dataShoppingCart.find(e => e.publicationId === post.id);
        if (d) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'este anuncio ya existe en tu carrito',
                showConfirmButton: false,
                timer: 2000
            });
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Agregado al carrito correctamente',
                showConfirmButton: false,
                timer: 1500
            });
            const cart = { userId, publicationId };
            await this.props.addCart(cart);
            await this.props.getCart(userId); 
            // dataShoppingCart.push(cart);
        };
    };

    // n = () => console.log('hola');
    render() {
        // const publications = this.props.publications == undefined ? [] : this.props.publications;
        // const postByCategory = this.props.postByCategory == undefined ? [] : this.props.postByCategory;
        const category = this.props.match.params.categoryId;
        // const post: any[] = category ? this.props.postByCategoryFailed ? this.props.postByCategoryFailed : postByCategory : publications;
        // const { currentPage, postPerPage } = this.state
        // const indexOfLastPost = currentPage * postPerPage;
        // const indexOfFirtPost = indexOfLastPost - postPerPage;
        // const currenPostPager: any = post.slice(indexOfFirtPost, indexOfLastPost);
        // const currenPostPager2: any[] = currenPostPager && category instanceof Object ? [] : currenPostPager;
        // const pageNumber = [];
        // for (let i = 1; i <= Math.ceil(publications.length / postPerPage); i++) { pageNumber.push(i) };
        // const renderPageNumber = pageNumber.map((page, i) => {
        //     return (
        //         <li className={this.state.currentPage === page ? `page-item active` : 'page-item'} key={i} aria-current="page">
        //             <li
        //                 className="page-link"
        //                 key={i}
        //                 value={page}
        //                 onClick={this.handleClick}
        //             >
        //                 {page}
        //             </li>
        //         </li>
        //     );
        // });
        // const order = this.state.orderByPrice ?
        //     currenPostPager2.sort(this.filterPost(this.state.orderByPrice)) :
        //     currenPostPager2;
        // const userData = JSON.parse(localStorage.getItem('userData')!);
        // const d = order === undefined ? [] : order;

        // console.log(this.state.category);
        const postData = this.props.publications ? this.props.publications : [];
        const DataCategory = withRouter(ByCategory);
        const NavigationType = withRouter(Navigation);
        console.log(postData);

        // const RecentPostType = withRouter( RecentPost  );

        return (
            <div className=''  >
                {/* {
                    this.props.match.params.text || this.props.match.params.categoryId ? console.log('any') :
                        <Offerts />
                } */}
                <br />
                <div className=' ' style={{}}>
                    <div className=" d-flex flex-wrap w-100">
                        {
                            this.props.screenLoading ? <Loader /> :
                                <div className='w-100'>
                                    <div>
                                        {
                                            this.props.match.params.categoryId && <NavigationType />
                                        }
                                        <Category />
                                    </div>
                                    <div >

                                        <hr className='solid' />

                                        <div className={category ? 'd-flex justify-content-end' : 'd-flex justify-content-between'}>

                                            {
                                                category || this.props.match.params.text ? null : <span style={{ fontSize: '20px' }}> <i className="fas fa-flag-checkered"></i>  <strong> {postData.length}</strong> Articulos Publicados  </span>
                                            }

                              


                                        </div>
                                        {
                                            // this.props.match.params.text &&
                                            // <SearchResult
                                            //     addCart={this.addCart}
                                            // />
                                        }
                                        <div className='d-flex flex-wrap w-100 animate__animated animate__fadeInDown'>
                                            {
                                                category ?
                                                    <DataCategory
                                                        addCart={this.addCart || []}
                                                    />
                                                    :

                                                    this.props.match.params.text ?
                                                        <SearchResult
                                                            addCart={this.addCart}
                                                        />
                                                        :

                                                        <RecentPost
                                                            // stateOfFilter={this.state}
                                                            // filterPost={this.filterPost}
                                                            addCart={this.addCart}
                                                            postData={postData ? postData : []} />
                                            }
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                    {/* {this.props.match.params.text ? null : <nav className='d-flex justify-content-center pagination'>
                        <ul className="pagination pagination-sm">
                            {renderPageNumber}
                        </ul>
                    </nav>} */}
                </div>
            </div>
        );
    };
};
export default Body;