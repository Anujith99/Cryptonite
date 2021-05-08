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
