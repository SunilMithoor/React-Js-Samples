import axiosInstance from "../../libraries/axios/index";

export const fetchUsers = () => {
  return axiosInstance
    .get("/users")
    .then((response) => {
      return response.data; // Extract data from response
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
      throw error; // Rethrow the error for the caller to handle
    });
};

export const fetchPosts = () => {
  return axiosInstance
    .get("/posts")
    .then((response) => {
      return response.data; // Extract data from response
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
      throw error; // Rethrow the error for the caller to handle
    });
};

export const fetchPhotos = () => {
  return axiosInstance
    .get("/photos")
    .then((response) => {
      return response.data; // Extract data from response
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
      throw error; // Rethrow the error for the caller to handle
    });
};


/**
 * Fetch paginated posts from the API
 * @param {number} page - Current page number
 * @param {number} limit - Number of items per page
 * @returns {Promise<Post[]>} - Promise resolving to an array of posts
 */
export const fetchPaginationData = (page, limit) => {
  return axiosInstance
    .get("/posts", {
      params: { _page: page, _limit: limit }, // Pass pagination parameters
    })
    .then((response) => {
      return response.data; // Extract data from response
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error; // Rethrow the error for the caller to handle
    });
};

// export const addPost = async (userData) => {
//   try {
//     const { data } = await axiosInstance.post("/posts", userData);
//     return data; // Return the created user data or the server response
//   } catch (error) {
//     console.error("Error adding user:", error);
//     throw error; // Rethrow the error for the caller to handle
//   }
// };
