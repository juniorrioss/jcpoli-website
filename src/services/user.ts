import axios from "axios";
import SignUpForm from "@/models/forms/SignUpForm";
import { formatarData } from "@/helpers/index";

const API_URL = process.env.VUE_APP_API_URL + "users/";

export async function createUser(user: SignUpForm): Promise<any> {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    institution,
    type,
    cep,
    street,
    streetNumber,
    state,
    city,
    neighborhood,
    complement
  } = user;

  const birthDate = formatarData(user.birthDate);

  const resp = await axios.post(API_URL, {
    firstName,
    lastName,
    email,
    birthDate,
    phoneNumber,
    institution,
    type,
    cep,
    street,
    streetNumber,
    state,
    city,
    neighborhood,
    complement
  });

  return resp.data;
}

export async function getUser(email: string): Promise<any> {
  return await axios.get(API_URL + email).then(res => res.data);
}

export async function getUsers(): Promise<any> {
  return await axios.get(API_URL).then(res => res.data);
}

export function upgradeUser(email: string, type: string) {
  return axios
    .put(API_URL + email, {
      type
    })
    .then(res => res.data);
}
