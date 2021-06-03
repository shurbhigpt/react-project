import axios from 'axios';

export const getAllProduct = async () => {
        try {
          const res = await axios.get('/getProduct');
          return res.data;
      } catch (e) {
        return e.message;
      }
};
export const deleteProduct = async (id) => {
        try {
          const res = await axios.post(`/deleteProduct/${id}`);
          return res.data;
      } catch (e) {
        return e.message;
      }
};
export const addProduct = async (formData) => {
      try {
        const res = await axios.post("/addProduct", formData);
          return res.data;
      } catch (e) {
        return e.message;
      }
};
export const updateProduct = async (id,formData) => {
      try {
        const res = await axios.put(`/updateProduct/${id}`, formData);
          return res.data;
      } catch (e) {
        return e.message;
      }
};
export const getProductById = async (id) => {
      try {
        const res = await axios.get(`/getProduct/${id}`); 
      return res.data;
      } catch (e) {
        return e.message;
      }
};

