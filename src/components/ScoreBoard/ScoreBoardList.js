import ScoreBoardListItem from './ScoreBoardListItem';
import styled from 'styled-components';

function ScoreBoardList( { scores }) {
  
    const renderScoreBoardList = () => {
      return (
          scores.map((item, index) => {
              return <ScoreBoardListItem key={item.userID} scoreItem={item} rank={index + 1} />;
          })
      );
    };
    
    return (
      <ScoreList>
        {renderScoreBoardList()}
      </ScoreList>
    );
  }
  
  export default ScoreBoardList;

  const ScoreList = styled.ul`
  margin: 0;
  padding: 0;
  `