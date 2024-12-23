import { useState, useEffect } from "react";

export default function Home() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function fetchCoins() {
      const res = await fetch("/api/getCoins");
      const data = await res.json();
      setCoins(data);
    }
    fetchCoins();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Crypto Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 rounded-md">
          <thead>
            <tr>
              <th className="p-4 text-left">Coin</th>
              <th className="p-4 text-right">Price</th>
              <th className="p-4 text-right">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr key={coin.id} className="border-t border-gray-700">
                <td className="p-4 flex items-center">
                  <img src={coin.image} alt={coin.name} className="w-6 h-6 mr-2" />
                  {coin.name}
                </td>
                <td className="p-4 text-right">${coin.current_price.toLocaleString()}</td>
                <td className="p-4 text-right">${coin.market_cap.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
