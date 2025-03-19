import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, name, price, quantity = 1 } = action.payload;
            const existingItem = state.find(item => item.id === id);
            
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.push({ id, name, price, quantity });
            }
        },
        
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            return state.filter(item => item.id !== itemId);
        },
        
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.find(item => item.id === id);
            if (item) {
                item.quantity = quantity;
            }
        },
        
        resetCart: () => {
            return initialState;
        }
    }
});

export const { addToCart, removeFromCart, updateQuantity, resetCart } = cartSlice.actions;
export default cartSlice.reducer;