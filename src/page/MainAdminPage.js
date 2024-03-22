// packages
import React from 'react';

import Table from '../components/products_table/Table'
import Header from '../components/Header'
import Categories from '../components/categories_block/Categories'

import categories_JSON from '../data/categories.json'
// components

class MainAdminPage extends React.Component{
    constructor(props){
      super(props)
        this.state ={
            thePage: 'main' ,
            categories: categories_JSON.categories

        }
        this.toPage = this.toPage.bind(this)
    }
    toPage(page){
        this.setState({thePage: page})
    }
    render(){return(
        <div>
            <Header></Header>
        
            <div className='body'>
                <div className="body-sidebar">
                    <div id='Sidebar-button' onClick={()=>this.toPage('categories')}><div id='little-circle' style={{backgroundColor:"#d97576"}}></div><span id='sb-text'>Categories</span></div>
                    <div id='Sidebar-button' onClick={()=>this.toPage('users')}><div id='little-circle' style={{backgroundColor:"#d97576"}}></div><span id='sb-text'>Users</span></div>
                    <div id='Sidebar-button' onClick={()=>this.toPage('products')}><div id='little-circle' style={{backgroundColor:"#d97576"}}></div><span id='sb-text'>Products</span></div>
                    <div id='Sidebar-button' onClick={()=>this.toPage('orders')}><div id='little-circle' style={{backgroundColor:"#d97576"}}></div><span id='sb-text'>Orders</span></div>                                                                                                                                                                                                                                                                                                                                                                                         
                </div>
                <div className="body-main">
                    {this.state.thePage == 'products' &&  <Table/>}
                    {this.state.thePage == 'categories' && <Categories categories={this.state.categories}/>}
                   
                </div>
            </div>
        </div>
    )}
    
    }

export default MainAdminPage;