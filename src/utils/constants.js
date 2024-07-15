const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_API_URL =
  "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fyoutube.googleapis.com%2Fyoutube%2Fv3%2Fvideos%3Fpart%3Dsnippet%26chart%3DmostPopular%26regionCode%3DIN%26maxResults%3D50%26key%3D" +
  YOUTUBE_API_KEY;

export const YOUTUBE_MUSIC_CATEGORY_API_URL =
  "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.googleapis.com%2Fyoutube%2Fv3%2Fvideos%3Fpart%3Dsnippet%26regionCode%3DIN%26type%3Dvideo%26maxResults%3D25%26videoCategoryId%3D10%26chart%3DmostPopular%26key%3D" +
  YOUTUBE_API_KEY;

export const YOUTUBE_SPORTS_CATEGORY_API_URL =
  "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.googleapis.com%2Fyoutube%2Fv3%2Fvideos%3Fpart%3Dsnippet%26regionCode%3DIN%26type%3Dvideo%26maxResults%3D25%26videoCategoryId%3D17%26chart%3DmostPopular%26key%3D" +
  YOUTUBE_API_KEY;

export const YOUTUBE_GAMING_CATEGORY_API_URL =
  "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.googleapis.com%2Fyoutube%2Fv3%2Fvideos%3Fpart%3Dsnippet%26regionCode%3DIN%26type%3Dvideo%26maxResults%3D25%26videoCategoryId%3D20%26chart%3DmostPopular%26key%3D" +
  YOUTUBE_API_KEY;

export const YOUTUBE_NEWS_CATEGORY_API_URL =
  "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.googleapis.com%2Fyoutube%2Fv3%2Fvideos%3Fpart%3Dsnippet%26regionCode%3DIN%26type%3Dvideo%26maxResults%3D25%26videoCategoryId%3D25%26chart%3DmostPopular%26key%3D" +
  YOUTUBE_API_KEY;

export const YOUTUBE_VLOGS_CATEGORY_API_URL =
  "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.googleapis.com%2Fyoutube%2Fv3%2Fvideos%3Fpart%3Dsnippet%26regionCode%3DIN%26type%3Dvideo%26maxResults%3D25%26videoCategoryId%3D22%26chart%3DmostPopular%26key%3D" +
  YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTION_API =
  "https://cors-handlers.vercel.app/api/?url=http%3A%2F%2Fsuggestqueries.google.com%2Fcomplete%2Fsearch%3Fclient%3Dfirefox%26ds%3Dyt%26q%3D";

export const YOUTUBE_SEARCH_RESULTS_API =
  "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fyoutube.googleapis.com%2Fyoutube%2Fv3%2Fsearch%3Fpart%3Dsnippet%26maxResults%3D25%26key%3D" +
  YOUTUBE_API_KEY;

// export const YOUTUBE_RELATED_VIDEOS_API =
//   CORS_PROXY +
//   "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=15&key=" +
//   YOUTUBE_API_KEY;

export const YOUTUBE_SPECIFIC_VIDEO_DATA_API =
  "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.googleapis.com%2Fyoutube%2Fv3%2Fvideos%3Fpart%3Dsnippet%26key%3D" +
  YOUTUBE_API_KEY;
