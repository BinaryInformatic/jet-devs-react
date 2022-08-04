import { useState, useEffect } from 'react';

import ScoreBoardList from '../components/ScoreBoard/ScoreBoardList';

import scoreData from '../data/score.json';

import styled from 'styled-components';

function ScoreBoard() {
  const [scores, setScores] = useState(scoreData);
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedScores = scoreData.map((item, index) => {
        if ((index + 1) % 2 === 0) {
            return { ...item, score: item.score + Math.floor(Math.random() * 5000) };
        }
        return { ...item, score: item.score + Math.floor(Math.random() * 100) };
      });
      updatedScores.sort((a, b) => b.score - a.score);
      setScores(updatedScores);
    }, 1000);
  
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ScoreBoardContainer>
      <ScoreBoardList scores={scores}/>
    </ScoreBoardContainer>
  );
}

export default ScoreBoard;

const ScoreBoardContainer = styled.div`
margin: 20px;
padding: 0;
`