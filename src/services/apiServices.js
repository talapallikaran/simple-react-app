import instance from "./axios";

// Fetching data from API
export async function fetchUserData(parameters) {
  try {
    const response = await instance.get("", {});
    return response;
  } catch (error) {
    return false;
  }
}

// Creating data using API
export async function fetchUser(parameters) {
  // Parameters may look like below
  // parameters = 10
  try {
    const response = await instance.post(``, parameters, {});
    return response;
  } catch (error) {
    return false;
  }
}

// Updating data using API
export async function updateUserData(parameters) {
  try {
    const response = await instance.put("", parameters, {});
    return response;
  } catch (error) {
    return false;
  }
}

// Updating data using API
export async function deleteUserData(parameters) {
  try {
    const response = await instance.delete("", parameters, {});
    return response;
  } catch (error) {
    return false;
  }
}
