export default async function handler(req, res) {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,dogecoin,litecoin&order=market_cap_desc&per_page=10&page=1&sparkline=false'
    );
    const data = await response.json();
    res.status(200).json(data);
  }
  