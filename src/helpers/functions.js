export const parseArticlesResponse = (response) => {
  let parsedResponse = response.map((article) => ({
    title: article.title,
    description: article.description,
    url: article.url,
    image: article.image,
    publishedAt: article.publishedAt,
    source: article.source.name,
  }));

  return parsedResponse;
};

export const parseVideoResponse = (response) => {
  let parsedResponse = response.map((video) => ({
    id: video.id.videoId,
    title: video.snippet.title,
    description: video.snippet.description,
    image: video.snippet.thumbnails.high.url,
    source: video.snippet.channelTitle,
    publishedAt: video.snippet.publishedAt,
  }));

  return parsedResponse;
};

export const parseAudioResponse = (response) => {
  let parsedResponse = response.map((audio) => ({
    url: audio.collectionViewUrl,
    title: audio.collectionName,
    image: audio.artworkUrl600,
  }));

  return parsedResponse;
};

export const parseCryptoData = (response) => {
  //We do not need the last element of api response
  let parsedResponse = response.slice(0, -1).map((value) => ({
    x: new Date(value[0]),
    y: value[1],
  }));

  return parsedResponse;
};

export const isObjectEmpty = (obj) => {
  if (obj) {
    let keys = Object.keys(obj);
    if (keys.length === 0) return true;
  }

  return false;
};
