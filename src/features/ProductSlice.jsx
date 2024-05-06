import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk("product/getProduct", async () => {
  const response = await axios.get(
    "https://deploy-json-server-nine.vercel.app/products"
  );
  return response.data;
});
export const saveProduct = createAsyncThunk(
  "product/saveProduct",
  async ({ title, price }) => {
    const response = await axios.post(
      "https://deploy-json-server-nine.vercel.app/products",
      {
        title,
        price,
      }
    );
    return response.data;
  }
);
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    await axios.delete(
      `https://deploy-json-server-nine.vercel.app/products/${id}`
    );
    return id;
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async ({ id, title, price }) => {
    const response = await axios.patch(
      `https://deploy-json-server-nine.vercel.app/products/${id}`,
      {
        title,
        price,
      }
    );
    return response.data;
  }
);

const productEntity = createEntityAdapter({
  selectId: (product) => product.id,
});
const productSlice = createSlice({
  name: "product",
  initialState: productEntity.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      productEntity.setAll(state, action.payload);
    }),
      builder.addCase(saveProduct.fulfilled, (state, action) => {
        productEntity.addOne(state, action.payload);
      }),
      builder.addCase(deleteProduct.fulfilled, (state, action) => {
        productEntity.removeOne(state, action.payload);
      });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      productEntity.updateOne(state, {
        id: action.payload.id,
        update: action.payload,
      });
    });
  },
});
export const productSelectors = productEntity.getSelectors(
  (state) => state.product
);
export default productSlice.reducer;
