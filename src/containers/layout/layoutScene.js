import React from "react";
import { Layout, Menu } from "antd";
import { Switch, Route, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { EventComponent } from "../events/loadable/index";

const { PureComponent } = React;
const { Header, Content } = Layout;
const SubMenu = Menu.SubMenu;
const history = createHistory();

class AppLayout extends PureComponent {
  render() {
    return (
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%", background: "white" }}>
          <div className="logo" style={{ display: "inline-block", float: "left" }}>
            <img src={require("./resources/logo.png")} />
          </div>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]} style={{ lineHeight: "64px", display: "inline-block" }}>
            <Menu.Item key="1">
              {" "}
              <NavLink to="/home">
                <span> home </span>{" "}
              </NavLink>{" "}
            </Menu.Item>
            <SubMenu title={<span className="submenu-title-wrapper">events</span>}>
              <Menu.Item key="setting:1">
                <NavLink to="/event">
                  <span> event </span>{" "}
                </NavLink>
              </Menu.Item>
              <Menu.Item key="setting:2">
                <NavLink to="/newAthletes">
                  <span> Registration - New Athletes </span>{" "}
                </NavLink>
              </Menu.Item>
              <Menu.Item key="setting:3">
                <NavLink to="/drills">
                  <span> Drills </span>{" "}
                </NavLink>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="3">members</Menu.Item>
            <Menu.Item key="4">coaching</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          <Switch>
            <Route path="/home" exact render={() => <div>{<h1> Home Component</h1>}</div>} />
            <Route path="/event" exact component={EventComponent} />
            <Route path="/newAthletes" exact render={() => <h1>New Athletes registraion Component</h1>} />
            <Route path="/drills" exact render={() => <h1>Drills Component</h1>} />
          </Switch>
        </Content>
      </Layout>
    );
  }
}

export default AppLayout;
