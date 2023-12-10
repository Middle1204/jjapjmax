import { bind } from "@libs/util-structure";
import styled from "styled-components";
import { useSoundPresenter } from "./useSoundPresenter";

interface SongType {
  title: string;
  thumbnail: string;
  // Add other properties based on your actual song object structure
}

export const SoundPresenter = bind(useSoundPresenter, ({ song }: { song: SongType }) => {
  if (!song) {
    return null;
  }
  return (
    <Container>
      <Cover src={song.thumbnail} alt={`Song ${song.title} Cover`} />
    </Container>
  );
});

const Container = styled.div`
  background: #323232 no-repeat center / cover;
  grid-column: 2;
  grid-row: 1;
`;

const Cover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
