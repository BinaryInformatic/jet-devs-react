import styled from "styled-components";

function ScoreBoardListItem({ scoreItem, rank }) {
  return (
    <StyledList>
      <LeftContainer>
        <Rank backgroundColor={setRankBackgroundColor(rank)}>{rank}</Rank>
        <Icon src={scoreItem.picture} alt="Avatar" />
        <Name>{scoreItem.displayName}</Name>
      </LeftContainer>
      <div>
        <Score>{scoreItem.score}</Score>
        <Point>points</Point>
      </div>
    </StyledList>
  );
}

export default ScoreBoardListItem;

function setRankBackgroundColor(rank) {
  switch (rank) {
      case 1:
          return "#F53B3E";
      case 2:
          return "#FC7A3C";
      case 3:
          return "#FFA22E";
      default:
          return "blue";
  }
}

const StyledList = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  &:nth-child(2n+2){
    background-color: #e3eff4;
  }
  &:hover {
    background-color: #7a7af4;
    transition: 0.5s;
  }
  border: 1px solid #e2e2e2;
  `;

const LeftContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  `;

const Icon = styled.img`
  border-radius: 50%;
  width: 35px;
  `;

const Rank = styled.span`
position: absolute;
left: 20px;
border-radius: 50%;
color: white;
font-weight: bold;
font-size: 10px;
top: 22px;
padding: 0px 5px;
background-color:${(props) => (props.backgroundColor)};
  `;

  const Name = styled.span`
  color: #000;
  margin-left: 15px;
  ${StyledList}:hover & {
    color: #fff;
  }
  font-weight: bold;
  `;

  const Score = styled.span`
  color: #000;
  margin-right: 10px;
  ${StyledList}:hover & {
    color: #fff;
  }
  font-weight: bold;
  `;

  
  const Point = styled.span`
  color: #8d8c8c;
  
  `;
  






