import styled from 'styled-components';

const CommentWrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid grey;
  border-left: 1px solid grey;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 16px 0 ${props => `${props.depth*40}px`};
  padding-left: 8px;
`;

const CommentHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  margin-bottom: 10px;
`;

const User = styled.p`
  color: #36A3F0;
  margin: 0
`;

const PointsAndTimestamp = styled.p`
  color: rgba(0,0,0,0.87);
  margin: 0 0 0 8px;
`;

const CommentBody = styled.p`
  color: rgba(0,0,0,0.6);
  font-size: 14px;
  margin: 0 0 16px 0;
`;

const TrashIcon = styled.img`
  height: 12px;
  cursor: pointer;
  padding-left: 24px;
`;

export {
  CommentWrapper,
  CommentHeaderWrapper,
  User,
  PointsAndTimestamp,
  CommentBody,
  TrashIcon,
}
