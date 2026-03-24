import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialValue = { products: [] }

const productSlice = createSlice({
    name: 'products',
    initialState: initialValue,
    reducers: {
        storeProduct(state, action) {
            state.products = action.payload || []
        },
        deleteRows(state, action) {
            state.products = state.products.filter(
                (pro) => !action.payload.includes(pro.id)
            )
        }
    }
})

export const { storeProduct, deleteRows } = productSlice.actions

export function getProductsData() {
    return async dispatch => {
        const response = await fetch('https://raw.githubusercontent.com/Ovi/DummyJSON/refs/heads/master/database/products.json')

        if (!response.ok) {
            throw new Error('Could not fetch the Products')
        }

        const resProduct = await response.json()
        dispatch(storeProduct(resProduct))
    }
}


const store = configureStore({
    reducer: productSlice.reducer
})

export default store;