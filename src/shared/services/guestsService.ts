import axios from "axios";
import { getToken } from "@/shared/functions/getToken";

const serverApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

export const getGuests = async () => {
  const response = await serverApi.get("/guests");
  return response.data;
};

export const createGuest = async (body: any) => {
  body = Object.assign({ ...body, assist: false, saw_invitation: false });
  if (!body.table || !body.table.length) {
    delete body.table;
  }
  if (!body.group || !body.group.length) {
    delete body.group;
  }
  const response = await serverApi.post("/guests", body);
  return response.data;
};

export const updateGuest = async (id: string, body: any) => {
  body = Object.assign({ ...body, assist: false, saw_invitation: false });
  if (!body.table || !body.table.length) {
    delete body.table;
  }
  if (!body.group || !body.group.length) {
    delete body.group;
  }
  const response = await serverApi.put(`/guests/${id}`, body);
  return response.data;
};

export const deleteGuest = async (id: string) => {
  const response = await serverApi.delete(`/guests/${id}`);
  return response.data;
};
