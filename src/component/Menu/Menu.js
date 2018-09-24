import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


const menu = [
    {
        name: 'Trang Chu',
        to: '/',
        exact: true
    },
    {
        name: 'Quan Ly',
        to: '/product-list',
        exact: false
    }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={
                ({ match }) => {
                    // var active = match ? "active" : "";
                    return(
                        <li>
                            <Link to={to}>
                                {label}
                            </Link>
                        </li>
                    )
                }
            }
        />
    );
}
class Menu extends Component {
    render() {
        return (

            <div>
                <div className="navbar">
                    <a className="navbar-brand" >CallAPI</a>
                    <ul className="nav navbar-nav">
                        {this.ShowMenu(menu)}
                    </ul>
                </div>


            </div>


        );
    }
    ShowMenu=(menu)=>{
        var result=null;
        if(menu.length >0){
            result=menu.map(
                (menu,index)=>{
                    return (
                        <MenuLink
                            key={index}
                            label={menu.name}
                            to={menu.to}
                            activeOnlyWhenExact={menu.exact}
                        >
                        </MenuLink>
                    );
                }
            );
        }
        return result
    }
}

export default Menu;
