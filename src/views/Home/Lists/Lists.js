import styled from "styled-components";
import List from "./List/List";

import {
  cover1,
  cover2,
  cover3,
  cover4,
  cover5,
  cover6,
  cover7,
  cover8,
  cover9,
  cover10,
  cover11,
  cover12,
  cover13,
  cover16,
  cover17,
  cover18,
  cover19,
  cover20,
} from "../../../assets/art";

const StyledLists = styled.div`
  padding: 0 1rem;
  color: white;
  max-width: 100%;
  padding-right: 0;
  @media (min-width: 768px) {
    padding: 0 1.5rem;
    padding-right: 0;
  }
`;

const Lists = () => {
  const justAdded = [cover1, cover8, cover13, cover20, cover11, cover18, cover3, cover5];
  const popular = [cover9, cover16, cover6, cover19, cover7, cover13];
  const newEps = [cover2, cover4, cover18, cover10, cover17, cover12];
  return (
    <StyledLists>
      <List title="just added" images={justAdded} />
      <List title="popular movies" images={popular} size="24%" />
      <List title="New Episodes this week" images={newEps} size="34%" />
    </StyledLists>
  );
};

export default Lists;
