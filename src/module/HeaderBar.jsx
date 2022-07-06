import React from 'react';
import {Menu,Layout} from 'antd';
import logo from "../dreamlogo.png";
/**
 * A HeaderBar class which aims to divide the main page into many individual parts.
 * 
 * @class 
 */
class HeaderBar extends React.Component
{
    componentDidMount()
    {
        
    }
    render()
    {
        return (
            
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={this.props.functions} onClick={this.props.onClick}/>
            
        );
    }
}
export default HeaderBar;