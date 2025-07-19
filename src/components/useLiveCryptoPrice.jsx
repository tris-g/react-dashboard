import { useEffect, useState } from 'react';

export const useLiveCryptoPrice = (symbol = 'btcusdt', maxPoints = 1000) => {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@trade`);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const price = parseFloat(data.p);
      const time = data.T;

      if (!isNaN(price)) {
        setDataPoints((prev) => [
          ...prev.slice(-maxPoints + 1),
          { x: time, y: price },
        ]);
      }
    };

    return () => ws.close();
  }, [symbol, maxPoints]);

  return dataPoints;
};

export default useLiveCryptoPrice;