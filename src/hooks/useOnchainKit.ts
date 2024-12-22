import { useState, useEffect } from 'react';
import { connectWallet } from '@coinbase/onchainkit';
import { DHConnectProvider } from "@daohaus/connect";

export const useOnchainKit = () => {
  const [status, setStatus] = useState<string>('');
  const [address, setAddress] = useState<string | undefined>();

  const connect = async () => {
    try {
      const { address } = await connectWallet();
      setAddress(address);
      setStatus('connected');
    } catch (error) {
      setStatus('error');
      console.error('Connection error:', error);
    }
  };

  const disconnect = () => {
    setAddress(undefined);
    setStatus('disconnected');
  };

  return {
    connect,
    disconnect,
    status,
    address
  };
};