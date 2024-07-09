const YOUTUBE_API_KEY = "AIzaSyCGe2AQZKgHJAiLwHXPg_EAziT0iYTWLjM";

const CORS_PROXY = "https://thingproxy.freeboard.io/fetch/";

export const YOUTUBE_API_URL =
  CORS_PROXY +
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTION_API =
  CORS_PROXY +
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULTS_API =
  CORS_PROXY +
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_RELATED_VIDEOS_API =
  CORS_PROXY +
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=15&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_SPECIFIC_VIDEO_DATA_API =
  CORS_PROXY +
  "https://www.googleapis.com/youtube/v3/videos?part=snippet&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_CATEGORY_API_URL =
  CORS_PROXY +
  "https://www.googleapis.com/youtube/v3/videos?part=snippet&regionCode=IN&type=video&maxResults=25&key=" +
  YOUTUBE_API_KEY;

