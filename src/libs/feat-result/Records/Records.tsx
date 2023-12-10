import { bind } from "@libs/util-structure";
import { useRecords } from "./useRecords";
import styled from "styled-components";
import { Button, Paper } from "@libs/share-ui";
import { LoginModal } from "../LoginModal";

interface SaveType {
  save: () => Promise<void>;
  // other properties if needed
}

interface IsModalOpenType {
  isOpen: boolean;
}


interface LoadingType {
  isLoading: boolean;
  // 기타 로딩과 관련된 속성 추가
}

interface RecordsType {
  id: string;
  username: string;
  score: number;
  // 결과 목록에 필요한 기타 속성 추가
}


interface MutationCalledType {
  mutationCalled: boolean;
  // mutationCalled와 관련된 다른 속성 추가
}

interface LoadingType {
  loading: boolean;
  // loading과 관련된 다른 속성 추가
}

interface ListRefType {
  // listRef에 대한 프로퍼티 추가
}

interface CloseModalType {
  // closeModal에 대한 프로퍼티 추가
}

export const Records = bind(
  useRecords,
  ({
    save,
    isModalOpen,
    loading,
    records,
    mutationCalled,
    listRef,
    closeModal,
  }: {
    save: SaveType;
    isModalOpen: IsModalOpenType;
    loading: LoadingType;
    records: RecordsType[];
    mutationCalled: MutationCalledType;
    listRef: ListRefType;
    closeModal: CloseModalType;
  }) => {
    return (
      <Container>
        <Paper title="Records">
          <List>
            {records.map((record: RecordsType, index: number) => (
              <ListItem key={record.id} active={!record.id} ref={listRef as React.RefObject<HTMLLIElement>}>
                <Username>
                  {`${++index}. `}
                  {record.username || "Anonymous"}
                </Username>
                <span>{record.score}</span>
              </ListItem>
            ))}
          </List>
          <Button
            color="primary"
            onClick={async () => {
              // if (save) {
              //  save();
              // }
            }}
            disabled={mutationCalled !== undefined && mutationCalled.mutationCalled}
            loading={loading !== undefined && loading.loading}
          >
            {mutationCalled ? "Thanks" : "Save"}
          </Button>
          <LoginModal opened={isModalOpen} onClose={closeModal} />
        </Paper>
      </Container>
    );
  }
);


const Container = styled.div`
  grid-column: 2;
  grid-row: 1/3;

  & > * {
    height: 100%;
  }
`;

const List = styled.ul`
  flex: 1;
  overflow-y: scroll;
  margin-bottom: 21px;
`;

const ListItem = styled.li<{ active: boolean }>`
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  line-height: 50px;
  font-size: 20px;
  background-color: ${(props) => (props.active ? `#eee` : "none")};
`;

const Username = styled.div`
  white-space: nowrap;
  padding-right: 15px;
  max-width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
`;
