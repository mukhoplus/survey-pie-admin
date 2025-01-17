import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const MainLayout = ({ selectedKeys, children }) => {
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider>
        <div
          className="demo-logo-vertical"
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255,255,255,0.3)',
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={['list']} mode="inline">
          <Menu.Item key="list">
            <Link to="/list">설문조사 관리</Link>
          </Menu.Item>
          <Menu.Item key="builder">
            <Link to="/builder">설문조사 생성</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
