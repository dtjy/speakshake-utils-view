import React, { Component } from "react";
import {
    Layout,
    Menu,
    Dropdown
} from 'antd';
import { renderRoutes } from 'react-router-config';
import {withRouter, Link} from 'react-router-dom';

import './index.scss';

const {
    Header,
    Content,
    Footer
} = Layout;


class Root extends Component{

    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to='/root/home'>HOME</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to='/root/home2'>HOME2</Link>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className='root-wrap'>
                <Layout>
                    <Header className='root-header'>
                        <Dropdown overlay={menu} placement="bottomCenter">
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                菜单
                            </a>
                        </Dropdown>
                    </Header>
                    <Content className="root-content">
                        {renderRoutes(this.props.route.routes, {}, {location: this.props.location})}
                    </Content>
                    <Footer className='root-footer' style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </div>
        );
    }
}

export default withRouter(Root);