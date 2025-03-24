const currency = "usd";

fetch(
  `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
)
  .then((res) => res.json())
  .then((res) => console.log(res));
