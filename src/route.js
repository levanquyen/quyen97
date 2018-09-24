import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProducActionPage from './pages/ProductActionPage/ProductActionPage';
const route=[
    {
        path:'/',
        exact:true,
        main:()=> <HomePage/>
    },
    {
        path:'/product-list',
        exact:false,
        main:()=><ProductListPage/>
    },
    {
        path:'/product/add',
        exact:false,
        main:({history})=><ProducActionPage history={history}/>
    },
    
    {
        path:'/product/:id/edit',
        exact:false,
        main:({match,history})=><ProducActionPage match={match} history={history}/>
    },
    {
        path:'',
        exact:false,
        main:()=><NotFoundPage/>
    }
];
export default route;