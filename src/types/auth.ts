export type SignInResponse = {
  accessToken: string;
  refreshToken: string;
};

export type User = {
  id: number;
  email: string;
  firstName: string;
  secondName: string;
  role: string;
};

export type Child = {
  id: string;
  firstName: string;
  lastName: string;
};

export type CreateChildDto = {
  firstName: string;
  secondName: string;
  birthDate: string;
};
