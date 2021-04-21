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
