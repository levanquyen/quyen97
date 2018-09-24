import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from './../../action/index';
class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtname: '',
            txtprice: '',
            chkbStatus: ''
        }
    }
    // khi click vao nut sua thi component nay se thuc thi
    // no se lay cai props tu thang route truyen vao
    // cai match nay co chua cai du lieu la params
    // thi ta se kiem tra cai id do co ton tai hay khong
    // voi viec test tren server voi ham get
    // server se tra lai cho minh cai res co chua data cua du lieu dang thuc thi
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        if(nextProps && nextProps.ItemEditing){
             var {ItemEditing}=nextProps;
             this.setState({
                id:ItemEditing.id,
                txtname:ItemEditing.name,
                txtprice:ItemEditing.price,
                chkbStatus:ItemEditing.status==="true"? true:false
             });    
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }
    onSave = (e) => {
        e.preventDefault();
        var { id, txtname, txtprice, chkbStatus } = this.state;
        var { history } = this.props;
        var product={
            id:id,
            name:txtname,
            price:txtprice,
            status:chkbStatus
        }
        if (id) {
            this.props.onUpdateProduct(product);
        } else {
            this.props.addProduct(product);
        }
        history.goBack();
    }
    render() {
        var { txtname, txtprice, chkbStatus } = this.state;

        return (
            <div>

                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                        <form onSubmit={this.onSave} >
                            <div className="form-group">
                                <label >Ten San Pham</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="txtname"
                                    value={txtname}
                                    onChange={this.onChange}
                                    placeholder="Input field" />
                            </div>
                            <div className="form-group">
                                <label >Gia :</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    name="txtprice"
                                    value={txtprice}
                                    onChange={this.onChange}
                                    placeholder="Input field" />
                            </div>
                            <label >Trang Thai</label>


                            <div className="checkbox">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="chkbStatus"
                                        value={chkbStatus}
                                        onChange={this.onChange}
                                        checked={chkbStatus}
                                    />
                                    Con Hang
                                </label>
                            </div>



                            <Link to="/product-list" className="btn btn-danger">
                                Tro Lai
                            </Link>
                            &nbsp;
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>

            </div>

        );
    }

}
const mapStateToProps =state=>{
    return {
        ItemEditing:state.itemEditing
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {
        addProduct : (product)=>{
            dispatch(Actions.addProductRequest(product))
        },
        onEditProduct : (id)=>{
            dispatch(Actions.actGetProductRequest(id))
        },
        onUpdateProduct :(product)=>{
            dispatch(Actions.actUpdateProductRequest(product))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (ProductActionPage);
