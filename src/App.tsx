import { DHConnectProvider } from "@daohaus/connect";
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { useState } from "react";
import { Routes } from "./Routes";
import { supportedNetworks } from "./utils/constants";
import { base } from "wagmi/chains";
import '@coinbase/onchainkit/styles.css';

export const App = () => {
  const [daoChainId, setDaoChainId] = useState<string | undefined>();

  return (
    <OnchainKitProvider
      apiKey={import.meta.env.VITE_PUBLIC_ONCHAINKIT_API_KEY}
      chain={base}
    >
      <DHConnectProvider daoChainId={daoChainId} networks={supportedNetworks}>
        <Routes setDaoChainId={setDaoChainId} />
      </DHConnectProvider>
    </OnchainKitProvider>
  );
};