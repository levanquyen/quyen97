import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div className="panel panel-primary mt-10">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh Sach San Pham</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Ma SP</th>
                                <th>Ten SP</th>
                                <th>Gia</th>
                                <th>Trang Thai</th>
                                <th>Hanh Dong</th>
                            </tr>

                        </thead>
                        <tbody>
                           {this.props.children}

                        </tbody>

                    </table>
                </div>
            </div>




        );
    }
}

export default ProductList;
