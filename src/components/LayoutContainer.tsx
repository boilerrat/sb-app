import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { useDHConnect } from "@daohaus/connect";
import { TXBuilder } from "@daohaus/tx-builder";
import { MainLayout, OuterLayout, widthQuery } from "@daohaus/ui";
import { Brand } from "./Brand";
import { assembleMemeSummonerArgs } from "../utils/summonTx";
import { CustomNav } from "./CustomNav";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.6rem 3rem;
  width: 100%;
  @media ${widthQuery.sm} {
    padding: 2rem;
  }
  .left-nav {
    @media ${widthQuery.sm} {
      width: 100%;
    }
  }
`;

export const LayoutContainer = () => {
  const { publicClient, address, chainId } = useDHConnect();

  return (
    <TXBuilder
      publicClient={publicClient}
      chainId={chainId}
      appState={{ memberAddress: address?.toLowerCase() }}
      argCallbackRecord={{
        assembleMemeSummonerArgs: assembleMemeSummonerArgs,
      }}
    >
      <OuterLayout>
        <Header>
          <div className="left-nav">{<Brand />}</div>
          <CustomNav />
        </Header>
        <MainLayout>
          <Outlet />
        </MainLayout>
      </OuterLayout>
    </TXBuilder>
  );
};