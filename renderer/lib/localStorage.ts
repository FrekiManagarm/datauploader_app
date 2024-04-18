import { User } from "./user";

export const getAccessToken = () => {
  const accessToken = localStorage.getItem("access_token");

  if (!accessToken) {
    return "";
  }

  return accessToken;
};

export const setAccessToken = (token: string) => {
  if (token) {
    localStorage.setItem("access_token", token);
  } else {
    localStorage.removeItem("access_token");
  }
};

export const getRefreshToken = () => {
  const refreshToken = localStorage.getItem("refresh_token");

  if (!refreshToken) {
    return "";
  }

  return refreshToken;
};

export const setRefreshToken = (token: string) => {
  if (token) {
    localStorage.setItem("refresh_token", token);
  } else {
    localStorage.removeItem("refresh_token");
  }
};

export const getUser = () => {
  const user = localStorage.getItem("user");

  if (!user) {
    return {};
  }

  const parseUser = JSON.parse(user);
  return parseUser;
};

export const setUser = (user: User) => {
  if (user) {
    const stringifiedUser = JSON.stringify(user);
    localStorage.setItem("user", stringifiedUser);
  } else {
    localStorage.removeItem("user");
  }
};

export const getChecks = () => {
  const checks = localStorage.getItem("checks");

  if (!checks) {
    return {};
  }

  const parsedChecks = JSON.parse(checks);
  return parsedChecks;
};

export const setChecks = (checks: any) => {
  if (checks) {
    const stringifiedChecks = JSON.stringify(checks);
    localStorage.setItem("checks", stringifiedChecks);
  } else {
    localStorage.removeItem("checks");
  }
};
