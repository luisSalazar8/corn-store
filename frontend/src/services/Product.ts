import { auth } from "@/config/firebase";
import { API_LINK } from "@/const/Api";
import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get(`${API_LINK}product`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await auth.currentUser?.getIdToken()}`,
    },
  });

  return response.data;
};

export const purchaseItem = async (productID: string) => {
  const response = await axios.post(
    `${API_LINK}purchase`,
    { productID },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await auth.currentUser?.getIdToken()}`,
      },
    }
  );

  return response.data;
};

export const getPurchasedTotal = async (productID: string) => {
  const response = await axios.get(
    `${API_LINK}purchase/${productID}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await auth.currentUser?.getIdToken()}`,
      },
    }
  );

  return response.data;
};
