import React from "react";
import { Layout, Menu } from "antd";
import { Route, Switch } from "react-router-dom";

const { Header, Content } = Layout;
const SubMenu = Menu.SubMenu;

const AppLayout = () => (
  <Layout>
    <Header style={{ position: "fixed", zIndex: 1, width: "100%", background: "white" }}>
      <div className="logo" style={{ display: "inline-block", float: "left" }}>
        <img src={require("./resources/logo.png")} />
      </div>

      <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]} style={{ lineHeight: "64px", display: "inline-block" }}>
        {/* <Menu.Item to="/" key="2" >
          
        </Menu.Item> */}
        <Menu.Item key="1">home</Menu.Item>
        <SubMenu title={<span className="submenu-title-wrapper">events</span>}>
          <Menu.Item key="setting:1">events</Menu.Item>
          <Menu.Item key="setting:2">Registration - New Athletes</Menu.Item>
          <Menu.Item key="setting:2">Drills</Menu.Item>
        </SubMenu>
        <Menu.Item key="3">members</Menu.Item>
        <Menu.Item key="4">coaching</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: "0 50px", marginTop: 64 }}>
      <Switch>
        <Route path=""/>
      </Switch>
    </Content>
  </Layout>
);

export default AppLayout;
