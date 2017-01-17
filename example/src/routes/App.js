import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon } from 'antd';
const { Sider, Footer, Content } = Layout;
import { Link } from 'dva/router'
import styled from 'styled-components'

const getMenus = function (menuArray, collapsed, parentPath) {
  parentPath = parentPath || '/'
  return menuArray.map(item => {
    if (item.children) {
      return (
        <Menu.SubMenu key={item.key} title={<span>{item.icon ? <Icon type={item.icon} /> : ''}{item.name}</span>}>
          {getMenus(item.children, collapsed, parentPath + item.key + '/')}
        </Menu.SubMenu>
      )
    } else {
      return (
        <Menu.Item key={item.key}>
          <Link to={parentPath + item.key}>
            {item.icon ? <Icon type={item.icon} /> : ''}
            {collapsed ? '' : item.name}
          </Link>
        </Menu.Item>
      )
    }
  })
}

const LogoC = styled.div`
  height: 40px;
  border-radius: 6px;
  margin: 32px 16px 64px;

  img {
    width: 100%;
    height: 100%;
  }

  span {
    cursor: pointer;
    color: #Fdb2FF;
    width: 100%;
    margin-top: 8px;
    text-align: center;
    font-size: 32px;
    &:hover {
      color: #eb90ed;
    }
  }
`

const App = ({children, app}) => {
  const menuItems = getMenus(app.menus, false)
  return (
    <Layout>
      <Sider
        collapsible={false}
        width={200}
        style={{minWidth: '50px'}}>
        <LogoC>
          <img src='https://raw.githubusercontent.com/liekkas/many-cards/gh-pages/static/logo.png' />
          <a target="_blank" href="//github.com/liekkas/many-cards">
            <span className="fa fa-github" />
          </a>
        </LogoC>

        <Menu theme="dark" mode={'inline'} defaultSelectedKeys={['1']}>
          {menuItems}
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '2vh' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: '91vh' }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', minHeight: '5vh' }}>
          Many Cards ©2017 by liekkas
        </Footer>
      </Layout>
    </Layout>
  );
}

export default connect(({app}) => ({app}))(App);
