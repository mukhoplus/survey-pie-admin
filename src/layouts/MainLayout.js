import { Layout, Menu } from 'antd';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const MainLayout = ({ selectedKeys, children, padding = 45 }) => {
  // 직접적인 inline 사용은 추천하지 않음 -> 지속적으로 새로 생성하기 때문
  const contentStyle = useMemo(() => {
    return {
      padding,
    };
  }, [padding]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div
          className="logo"
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.3)',
          }}
        />
        <Menu theme="dark" selectedKeys={selectedKeys} mode="inline">
          <Menu.Item key="list">
            <Link to="/list">설문조사 관리</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header />
        <Content style={contentStyle}>{children}</Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
