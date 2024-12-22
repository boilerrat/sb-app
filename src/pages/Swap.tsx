// src/pages/Swap.tsx
import { 
  Swap as SwapContainer, 
  SwapAmountInput, 
  SwapToggleButton, 
  SwapButton, 
  SwapMessage, 
  SwapToast 
} from '@coinbase/onchainkit/swap';
import { baseTokens } from '../utils/baseTokens';
import styled from 'styled-components';

const SwapWrapper = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: 4rem;
`;

const SwapCard = styled.div`
  background: ${({ theme }) => theme.secondary.step9};
  border-radius: ${({ theme }) => theme.card.radius};
  padding: 1rem;
`;

const Swap = () => {
  return (
    <SwapWrapper>
      <SwapCard>
        <h1>Swap Tokens</h1>
        <SwapContainer isSponsored={false}>
          <SwapAmountInput
            label="From"
            swappableTokens={baseTokens}
            token={baseTokens[0]}
            type="from"
          />
          <SwapToggleButton />
          <SwapAmountInput
            label="To"
            swappableTokens={baseTokens}
            token={baseTokens[1]}
            type="to"
          />
          <SwapButton />
          <SwapMessage />
          <SwapToast />
        </SwapContainer>
      </SwapCard>
    </SwapWrapper>
  );
};

export default Swap;