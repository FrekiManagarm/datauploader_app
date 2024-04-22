// import localStorage from "../../lib/localStorage";
import {
  getAccessToken,
  setAccessToken,
  setRefreshToken,
  setUser,
} from "../lib/localStorage";
import { apiUrl } from "../constants/api";
import { oauthSecret } from "../constants/variables";

export const loginRequest = async (data: {
  email: string;
  password: string;
}) => {
  const { email, password } = data;

  const response = await fetch(apiUrl + "/oauth/token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: "2",
      client_secret: oauthSecret,
      grant_type: "password",
      username: email,
      password,
    }),
  });

  const { access_token, refresh_token } = await response.json();

  // localStorage.accessToken = access_token;
  // localStorage.refreshToken = refresh_token;
  setAccessToken(access_token);
  setRefreshToken(refresh_token);

  return await response.json();
};

export const getUserInfo = async () => {
  const accessToken = getAccessToken();

  if (accessToken) {
    const response = await fetch(
      apiUrl + "/api/app/Common/getCurrentUserInformation",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    setUser(await response.json());

    return await response.json();
  }

  return "You need to login to get your current infos";
};

export const forgotPassword = async (data: { email: string }) => {
  const response = await fetch(apiUrl + "/api/app/Common/forgotPassword", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mail: data.email,
    }),
  });

  return await response.json();
};
