const YOUTUBE_API_KEY = "AIzaSyCGe2AQZKgHJAiLwHXPg_EAziT0iYTWLjM";

export const YOUTUBE_API_URL =
  "https://corsproxy.io/?https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULTS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_RELATED_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=15&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_SPECIFIC_VIDEO_DATA_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet&key=" +
  YOUTUBE_API_KEY;
