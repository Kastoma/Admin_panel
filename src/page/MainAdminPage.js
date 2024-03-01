// packages
import React from 'react';
import Grid from '@mui/material/Grid'
import Table from '../components/Table'
import Header from '../components/Header'
// components

class MainAdminPage extends React.Component{
    constructor(props){
      super(props)
        this.state ={

        }
    }
    render(){return(
        <div>
            <Header></Header>
        
            <div className='body'>
                <div className="body-sidebar">
                    <div id='Sidebar-button'><div id='little-circle' style={{backgroundColor:"#d97576"}}></div><span id='sb-text'>Categories</span></div>
                    <div id='Sidebar-button'><div id='little-circle' style={{backgroundColor:"#d97576"}}></div><span id='sb-text'>Users</span></div>
                    <div id='Sidebar-button'><div id='little-circle' style={{backgroundColor:"#d97576"}}></div><span id='sb-text'>Products</span></div>
                    <div id='Sidebar-button'><div id='little-circle' style={{backgroundColor:"#d97576"}}></div><span id='sb-text'>Orders</span></div>                                                                                                                                                                                                                                                                                                                                                                                         
                </div>
                <div className="body-main">

                </div>
            </div>
        </div>
    )}
    
    }

export default MainAdminPage;