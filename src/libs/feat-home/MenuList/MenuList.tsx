import { bind } from "@libs/util-structure";
import styled from "styled-components";
import { useMenuList } from "./useMenuList";

type MenuListProps = {
  menu: { name: string }[];
  currentMenuIndex: number;
};

export const MenuList = bind(useMenuList, ({ menu, currentMenuIndex }: MenuListProps) => (
  <Container>
    {menu.map(({ name }, index) => (
      <MenuItem key={name} active={currentMenuIndex === index}>
        {name}
      </MenuItem>
    ))}
  </Container>
));

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;

const MenuItem = styled.div<{ active: boolean }>`
  font-size: 30px;
  line-height: 1.5;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => (props.active ? "white" : "gray")};
`;
