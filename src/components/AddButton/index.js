import { PlusCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const AddButton = ({ onClick }) => {
  return (
    <AddButtonWrapper>
      <IconButton onClick={onClick}>
        <PlusCircleOutlined />
      </IconButton>
    </AddButtonWrapper>
  );
};

const AddButtonWrapper = styled.div`
  text-align: center;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  outline: none;
  font-size: 3rem;
  cursor: pointer;
`;

export default AddButton;
