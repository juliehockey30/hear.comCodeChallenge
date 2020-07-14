import styled from 'styled-components'


const SuperHeader = styled.p`
  color: rgba(88,88,88,0.87);
  font-size: 12px;
  margin: 32px 0 16px 0;
  padding-left: 16px;
`;

const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
`;

const Score = styled.p`
  color: #2c2c2c;
  font-size: 18px;
  margin: 0 0 0 16px;
`;

const Title = styled.p`
  color: #2c2c2c;
  font-size: 24px;
  margin: 0 0 0 16px;
`;

export {
  SuperHeader,
  HeaderWrapper,
  Score,
  Title
};
