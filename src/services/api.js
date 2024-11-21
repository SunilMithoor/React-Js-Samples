// api.js
import log from "loglevel";

export const fetchPosts = async () => {
  try {
    const response = await fetch(process.env.APP_API_BASE_URL + "/posts"); // Example API
    log.info("response:: ", response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    log.info("data:: ", data);
    return { data, error: null };
  } catch (error) {
    log.error("Error fetching posts: ", error);
    return { data: null, error };
  }
};
