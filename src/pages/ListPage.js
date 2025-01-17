import { Table } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';

import fetcher from '../ilb/fetcher';
import MainLayout from '../layouts/MainLayout';

const PAGE_SIZE = 20;

const columns = [
  {
    title: '번호',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '제목',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '생성일',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (createAt) => {
      const time = new Date(createAt);
      return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;
    },
  },
  {
    title: '액션',
    dataIndex: 'action',
    key: 'action',
    render: (_, record) => {
      return (
        <button
          onClick={() => {
            console.log(record.id, '삭제');
          }}
        >
          삭제
        </button>
      );
    },
  },
];

const ListPage = () => {
  const [page, setPage] = useState(1);
  /**
   * list -> 현재 페이지의 데이터
   * total -> 페이지네이션 계산을 위한, 실제 서버의 데이터 수
   */
  const { data, error } = useSWR('/surveys', fetcher);
  const navigate = useNavigate();

  if (error) return 'errer';
  if (!data) return 'loading...';

  return (
    <MainLayout selectedKeys={['list']}>
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              console.log('onClick', record.id, record);
              navigate(`/builder/${record.id}`);
            },
          };
        }}
        pagenation={{
          total: data.length,
          current: page,
          pageSize: PAGE_SIZE,
        }}
        onChange={(pagination) => {
          console.log(pagination);
          setPage(pagination.current);
        }}
        dataSource={data.map((item) => ({ ...item, key: item.id }))}
        columns={columns}
      />
    </MainLayout>
  );
};

export default ListPage;
