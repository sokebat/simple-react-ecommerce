import { useQuery } from "react-query";
import axios from "../../axios/axios";

export const useNewArival = () => {
  return useQuery({
    queryKey: ["new arival"],
    queryFn: async () => {
      const res = await axios.get("/products?limit=4");
      //   console.log(res.data)
      return res.data;
    },
  });
};
export const useProductRecomend = () => {
  return useQuery({
    queryKey: ["recomendation"],
    queryFn: async () => {
      const res = await axios.get("/products?limit=8");

      return res.data;
    },
  });
};

export const useProductByCategory = (category: string) => {
  return useQuery({
    queryKey: [{ category }],
    queryFn: async () => {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );

      return res.data;
    },
  });
};

export const useGetSingleProduct = (id: string) => {
  return useQuery(["singleProduct", id], async () => {
    const res = await axios.get(`/products/${id}`);
    return res.data;
  });
};
