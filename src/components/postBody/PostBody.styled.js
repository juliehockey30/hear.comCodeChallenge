import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #f1f1f1;
  border-radius: 12px;
  padding-top: 20px;
  width: 830px;
`;

const PostLine = styled.p`
  color: rgba(0,0,0,0.6);
  font-size: 14px;
  padding: 0 40px;
`;

const CommentsWrapper = styled.div`
  align-items: center;
  color: #2c2c2c;
  display: flex;
  flex-directoin: row;
  font-size: 12px;
  padding: 0 0 20px 40px;
`;

const Icon = styled.img`
  height: 12px;
  margin-right: 10px;
`;

export {
  Wrapper,
  PostLine,
  CommentsWrapper,
  Icon
}
