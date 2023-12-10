import { bind } from "@libs/util-structure";
import styled from "styled-components";
import { SongItem } from "../SongItem";
import { useSongList } from "./useSongList";

type SongListProps = {
  loading: boolean;
  songs?: { id: string; artist: { name: string; profile: string }; title: string }[];
  currentSongIndex: number;
};

export const SongList = bind<{}, SongListProps>(
  useSongList,
  ({ loading, songs, currentSongIndex }: SongListProps) => {
    if (loading || !songs) {
      return (
        <Container>
          {new Array(4).fill(null).map((_, index) => (
            <SongItem key={index} loading />
          ))}
        </Container>
      );
    }

    return (
      <Container>
        <ul>
          {songs.map(({ id, artist, title }) => (
            <SongItem
              key={id}
              title={title}
              artistName={artist.name}
              artistProfile={artist.profile}
              active={id === songs[currentSongIndex].id}
            />
          ))}
        </ul>
      </Container>
    );
  }
);

const Container = styled.div`
  padding: 30px 0;
  width: 70%;
  margin: auto;
`;
