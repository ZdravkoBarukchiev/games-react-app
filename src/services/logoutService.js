export const logoutService = (url, token) => {
  return fetch(url, {
    headers: {
      "X-Authorization": token,
    },
  });
};
