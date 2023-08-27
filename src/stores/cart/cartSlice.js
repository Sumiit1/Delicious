import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { _id } = action.payload;
            const isproduct = state.products.find((product) => product._id === _id);
            if (isproduct) {
                const productIndex = state.products.findIndex((product) => product._id === _id);
                state.products = state.products.map((product, index) =>
                    index === productIndex ? { ...product, amount: product.amount + 1 } : product)
            }
            else {
                state.products = [...state.products, { ...action.payload, amount: 1 }];
            }

        },
        clearCart: (state) => {
            state.products = [];
        },
        incrementProductAmount: (state, action) => {
            const { _id } = action.payload;
            const productIndex = state.products.findIndex((product) => product._id === _id);
            if (productIndex !== -1) {
                state.products = state.products.map((product, index) =>
                    index === productIndex ? { ...product, amount: product.amount + 1 } : product
                );
            }
        },
        decrementProductAmount: (state, action) => {
            const { _id } = action.payload;
            console.log(_id)
            const productIndex = state.products.findIndex((product) => product._id === _id);
            if (productIndex !== -1) {
                state.products = state.products.map((product, index) =>
                    index === productIndex ? { ...product, amount: product.amount - 1 } : product
                );
            } else if (productIndex === 0) {
                return
            }
        },
    },
});

export const cartProducts = state => state.cart.products

export const { addToCart, clearCart, incrementProductAmount, decrementProductAmount } = cartSlice.actions

export default cartSlice.reducer
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   products: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       state.products.push({ ...action.payload, amount: 1 });
//     },
//     clearCart: (state) => {
//       state.products = [];
//     },
//     incrementProductAmount: (state, action) => {
//       const { id } = action.payload;
//       const product = state.products.find((product) => product.id === id);
//       if (product) {
//         product.amount +=1;
//       }
//     },
//     decrementProductAmount: (state, action) => {
//       const { id } = action.payload;
//       const product = state.products.find((product) => product.id === id);
//       console.log(product)
//       if (product) {
//         product.amount - 1;
//       }
//     },
//   },
// });

// export const {
//   addToCart,
//   clearCart,
//   incrementProductAmount,
//   decrementProductAmount,
// } = cartSlice.actions;

// export const cartProducts = state => state.cart.products
// export const selectCartProducts = (state) => state.cart.products;

// export default cartSlice.reducer;
