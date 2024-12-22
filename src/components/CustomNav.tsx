// src/components/CustomNav.tsx
import { DaoHausNav, useDHConnect } from "@daohaus/connect";
import { Button } from "@daohaus/ui";
import { Link } from "react-router-dom";  // Change this import
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SwapButton = styled(Button)`
  &.swap-button {
    height: 3.6rem;
    min-width: 3.6rem;
  }
`;

export const CustomNav = () => {
  return (
    <NavContainer>
      <Link to="/swap">  {/* Change from href to to */}
        <SwapButton className="swap-button" variant="ghost">
          Swap
        </SwapButton>
      </Link>
      <DaoHausNav />
    </NavContainer>
  );
};