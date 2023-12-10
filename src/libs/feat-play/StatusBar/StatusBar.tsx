import { bind } from "@libs/util-structure";
import styled from "styled-components";
import { useStatusBar } from "./useStatusBar";

interface StatusType {
  excellent: number;
  good: number;
  "off beat": number;
  miss: number;
  // 실제 상태 객체 구조에 따라 다른 속성 추가
}

interface ScoreType {
  // 점수에 대한 속성 추가
}

interface SongType {
  title: string;
  // 실제 노래 객체 구조에 따라 다른 속성 추가
}

export const StatusBar = bind(
  useStatusBar,
  ({ status, score, song }: { status: StatusType; score: ScoreType; song: SongType }) => {
    if (!song) {
      return null;
    }

    return (
      <Container>
        <StatusBox>
          <StatusName>Score</StatusName>
          <StatusContent>{score.toString()}</StatusContent>
        </StatusBox>
        <StatusBox>
          <StatusName>Now playing</StatusName>
          <StatusContent>{song.title}</StatusContent>
        </StatusBox>
        <StatusBox>
          <StatusName>Stats</StatusName>
          <StatFieldGroup>
            <StatField>
              <strong>Excellent</strong> {status.excellent}
            </StatField>
            <StatField>
              <strong>Good</strong> {status.good}
            </StatField>
            <StatField>
              <strong>Off Beat</strong> {status["off beat"]}
            </StatField>
            <StatField>
              <strong>Miss</strong> {status.miss}
            </StatField>
          </StatFieldGroup>
        </StatusBox>
      </Container>
    );
  }
);

// ... rest of your styled components


const Container = styled.div`
  padding: 15px;
  display: flex;
  grid-column: 1 / 3;
  grid-row: 2;
  gap: 15px;
  color: #ebebeb;
  background: rgb(0, 78, 146);
  background: linear-gradient(
    180deg,
    rgba(0, 78, 146, 1) 19%,
    rgba(0, 4, 40, 1) 100%
  );
  box-shadow: 0px -10px 15px rgba(0, 0, 0, 0.5);
`;

const StatusBox = styled.div`
  position: relative;
  border: 2px solid #eee;
  flex: 1;
  border-radius: 5px;
`;

const StatusName = styled.div`
  font-size: 18px;
  line-height: 1;
  position: absolute;
  top: -12px;
  left: 12px;
  background-color: #004e92;
  padding: 0 10px;
`;

const StatusContent = styled.div`
  font-size: 30px;
  line-height: 58px;
  padding: 0 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #fff;
`;

const StatFieldGroup = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 25px;
`;

const StatField = styled.li`
  width: 50%;
  line-height: 29px;
  color: #fff;
  white-space: nowrap;
`;
