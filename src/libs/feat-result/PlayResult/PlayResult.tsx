import { bind } from "@libs/util-structure";
import styled from "styled-components";
import { Paper } from "@libs/share-ui";
import { usePlayResult } from "./usePlayResult";

// status에 대한 인터페이스 정의
interface StatusType {
  excellent: number;
  good: number;
  "off beat": number;
  miss: number;
}

// 컴포넌트에 전달되는 props의 타입 정의
interface PlayResultProps {
  status: StatusType;
  score: number;
}

export const PlayResult = bind(usePlayResult, ({ status, score }: PlayResultProps) => {
  return (
    <Container>
      <Paper title="PlayResult">
        <StatList>
          <StatListItem>
            <em>Excellent</em>
            <span>{status.excellent}</span>
          </StatListItem>
          <StatListItem>
            <em>Good</em>
            <span>{status.good}</span>
          </StatListItem>
          <StatListItem>
            <em>Off Beat</em>
            <span>{status["off beat"]}</span>
          </StatListItem>
          <StatListItem>
            <em>Miss</em>
            <span>{status.miss}</span>
          </StatListItem>
          <StatListItem>
            <Score>Score</Score>
            <Score>{score}</Score>
          </StatListItem>
        </StatList>
      </Paper>
    </Container>
  );
});

const Container = styled.div`
  grid-column: 1;
  grid-row: 1;

  & > * {
    height: 100%;
  }
`;

const StatList = styled.ul`
  font-size: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const StatListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

const Score = styled.div`
  font-size: 23px;
  font-weight: bold;
`;
