import React, { Component } from 'react';
import ProductList from './../../component/ProductList/ProductList';
import ProductItem from './../../component/ProductItem/ProductItem';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import * as Actions from './../../action/index';

class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    //ham nay duoc custome boi redux
    // dispatch ( trong ham action)
    componentDidMount() {
       this.props.fetchAllProduct();
    }
    onDelete =(id)=>{
      this.props.deleteProduct(id);
    }
    
    render() {
        // var {products}=this.props;
        var { products } = this.props;


        return (

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" className="btn btn-info">
                    Them San Pham
                 </Link>
                <ProductList>
                    {this.ShowProductItem(products)}
                </ProductList>
            </div>



        );
    }
    ShowProductItem = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    >

                    </ProductItem>
                )
            });
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps =(dispatch,props)=>{
    return {
        fetchAllProduct:()=>{
            dispatch(Actions.actFetchProductRequest());
        },
        deleteProduct:(id)=>{
            dispatch(Actions.actDeleteProductRequest(id));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);
