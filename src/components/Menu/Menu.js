import React, { Component } from "react";
import {Route, Link} from "react-router-dom";
const menus = [
  {
    name: 'Trang Chủ',
    to: '/',
    exact: true
  },
  {
    name: 'Quản lí sản phẩm',
    to: '/product-list',
    exact: false
  },
];

const MenuLink = ({label, to, activeOnly}) => {
  return(
    <Route
      path={to}
      exact={activeOnly}
      children={({match}) => {
        var active = match ? 'active' : '';
        return(
          <li className={active}>
              <Link to={to}> 
                {label} 
              </Link>
          </li>
        );
      }}
    />
  );
}

class Menu extends Component {
  render() {
    return (    
        <div className="navbar navbar-default">
          <Link className="navbar-brand" to="/">
            API
          </Link>
          <ul className="nav navbar-nav">
            { this.showMenus(menus) }
          </ul>
        </div>
    );
  }
  
  showMenus = (menus) => {
    var result;
    if(menus.length > 0){
      result = menus.map((menu, index) => {
       return(
            <MenuLink 
              key={index}
              label={menu.name}
              to={menu.to}
              activeOnly={menu.exact}
            />    
        );
      });
    }
    return result;
  }
}





export default Menu;
