export const ARTICLES = "articles";
export const VIDEOS = "videos";
export const AUDIO = "audio";

export const CRYPTOCURRENCY = "cryptocurrency";
export const BITCOIN = "bitcoin";
export const LITECOIN = "litecoin";
export const ETHEREUM = "ethereum";

export const CRYPTO_TYPES = [
  {
    id: "bitcoin",
    text: "Bitcoin",
    path: "/bitcoin",
    imageURL: "resources/bitcoin.svg",
  },
  {
    id: "ethereum",
    text: "Ethereum",
    path: "/ethereum",
    imageURL: "resources/ethereum.svg",
  },
  {
    id: "litecoin",
    text: "Litecoin",
    path: "/litecoin",
    imageURL: "resources/litecoin.svg",
  },
];

export const NEWS_TYPES = [ARTICLES, VIDEOS, AUDIO];
export const NEWS_CATEGORIES = [CRYPTOCURRENCY, BITCOIN, LITECOIN, ETHEREUM];
