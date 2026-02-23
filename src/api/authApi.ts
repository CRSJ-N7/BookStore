import { api } from "./api";
import bookApi from "./bookApi";

type SignInBody = {
  email: string;
  password: string;
};

type SignInResponse = {
  user: {
    id: number;
    email: string;
  };
};

type LogInBody = {
  email: string;
  password: string;
};

type LogInResponse = {
  safeUser: {
    id: number;
    name: string;
    email: string;
  };
  accessToken: string;
  refreshToken: string;
};

type GetMeResponse = {
  user: {
    id: number;
    email: string;
    name: string;
  };
};

type ChangePasswordBody = {
  password: string;
  newPassword: string;
  repeatedPassword: string;
};

type UpdateProfileBody = {
  name?: string;
  email?: string;
  avatar?: string;
};

type UpdateProfileResponse = {
  user: {
    id: number;
    name: string;
    email: string;
    avatar?: string;
  };
};

type UploadImageResponse = {
  safeUser: {
    id: number;
    email: string;
    name: string | null;
    avatar: string | null;
  };
  message: string;
};

const signIn = async (data: SignInBody) => {
  const response = await api.post<SignInResponse>("/users/auth/sign-up", data);

  return response.data;
};

const logIn = async (data: LogInBody) => {
  const response = await api.post<LogInResponse>("/users/auth/login", data);

  return response.data;
};

const getMe = async () => {
  const response = await api.get<GetMeResponse>("/users/me");

  console.log(response.data);
  return response.data;
};

const changePassword = async (data: ChangePasswordBody) => {
  const response = await api.put("users/me/password", data);

  return response.data;
};

const updateProfile = async (data: UpdateProfileBody) => {
  const response = await api.put<UpdateProfileResponse>(
    "/users/me/update",
    data,
  );

  return response.data;
};

// WIP
const uploadAvatar = async (image: string) => {
  console.log("зашил в uploadAvatar");
  const response = await api.put<UploadImageResponse>("users/upload-avatar", {
    image,
  });

  return response.data;
};

export default {
  signIn,
  logIn,
  getMe,
  changePassword,
  updateProfile,
  uploadAvatar,
};
