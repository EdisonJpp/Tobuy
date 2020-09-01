import React from 'react';
import HeaderIndex from './header/index';
import Body from "./body/index";
import { withRouter } from 'react-router-dom';
import { publications_fetch, publications_success } from '../../redux/actions/publications/postActions';
import { addShoppingCart_fetch, AddShoppingCart_success, getShoppingCart_fetch, getShoppingCart_success } from '../../redux/actions/shoppingCart/shoppingCartActions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Footer from './footer';
import './index.css';

class Index extends React.PureComponent<any, any>{

    componentDidMount = async () => {

         this.props.ReducerPublications();
        const userData = JSON.parse(localStorage.getItem('userData')!);
        userData &&  this.props.getCart(userData.user.id);
    };

    

    render() {
        const Header = withRouter(HeaderIndex);
        const BodyIndex: any = withRouter(Body);
        return (
            <div className='Start d-flex flex-column justify-content-between ' style={{ height: '100vh' }} >
                <Header />

                <div className="bodyIndex container  col-md-9 col-lg-9 col-xl-9 col-12">
                    <BodyIndex
                        publications={this.props.recentPublication}
                        screenLoading={this.props.screenLoading}
                        ReducerPublications={this.props.ReducerPublications}

                        addCart={this.props.addCart}
                        getCart={this.props.getCart}
                        cartData={this.props.cartData}
                    />
                </div>

                <Footer />
            </div>
        );
    };
};
const mapStateToProps = (state: any) => {
    return {
        recentPublication: state.publications.data,
        screenLoading: state.publications.loading,
        cartData: state.shoppingCart.data,
    };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
    ReducerPublications: async () => {
        await dispatch(publications_fetch());
        dispatch(await publications_success());
    },
    addCart: async (cart: any) => {
        await dispatch(addShoppingCart_fetch());
        dispatch(await AddShoppingCart_success(cart));
    },
    getCart: async (userId: number) => {
        await dispatch(getShoppingCart_fetch());
        dispatch(await getShoppingCart_success(userId));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);