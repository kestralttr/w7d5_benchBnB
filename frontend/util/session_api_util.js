

export const signup = (username, password, success, error) => {
  $.ajax({
    type: "POST",
    url: "api/users",
    data: {user: {username: username, password: password}},
    success: success,
    error: error
  });
};

export const login = (username, password, success, error) => {
  $.ajax({
    type: "POST",
    url: "api/session",
    data: {user: {username: username, password: password}},
    success: success,
    error: error
  });
};

export const logout = (success, error) => {
  $.ajax({
    type: "DELETE",
    url: "api/session",
    success: success,
    error: error
  });
};
