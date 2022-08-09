import ScoreBoardListItem from './ScoreBoardListItem';
import styled from 'styled-components';
import { useFlip, FlipProvider } from "react-easy-flip";

function ScoreBoardList({ scores }) {
  const flipContainerId = "flip-container";
  useFlip(flipContainerId, {
    duration: 800,
  });

  const renderScoreBoardList = () => {
    return (
      scores.map((item, index) => {
        return <ScoreBoardListItem flipKey={item.userID} key={item.userID} scoreItem={item} rank={index + 1} />;
      })
    );
  };

  return (

    <ScoreList data-flip-root-id={flipContainerId}>
      <FlipProvider>
        {renderScoreBoardList()}
      </FlipProvider>
    </ScoreList>
  );
}

export default ScoreBoardList;

const ScoreList = styled.ul`
  margin: 0;
  padding: 0;
  `