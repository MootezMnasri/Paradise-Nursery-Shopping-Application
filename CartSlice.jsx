import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0,
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Add an item to the cart
        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.name === newItem.name);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    name: newItem.name,
                    image: newItem.image,
                    description: newItem.description,
                    cost: newItem.cost,
                    quantity: 1,
                });
            }
            state.totalQuantity += 1;
        },

        // Remove an item entirely from the cart
        removeItem(state, action) {
            const itemName = action.payload;
            const existingItem = state.items.find(item => item.name === itemName);

            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.items = state.items.filter(item => item.name !== itemName);
            }
        },

        // Update the quantity of a specific item in the cart
        updateQuantity(state, action) {
            const { name, quantity } = action.payload;
            const existingItem = state.items.find(item => item.name === name);

            if (existingItem) {
                const difference = quantity - existingItem.quantity;
                existingItem.quantity = quantity;
                state.totalQuantity += difference;

                // Remove item if quantity drops to 0 or below
                if (existingItem.quantity <= 0) {
                    state.totalQuantity -= existingItem.quantity;
                    state.items = state.items.filter(item => item.name !== name);
                }
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
