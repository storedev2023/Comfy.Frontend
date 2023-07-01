import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { 
    persistStore, 
    persistReducer,   
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import searchReducer from "./reducers/search-reducer";
import cartReducer from "./reducers/cart-reducer";
import productReducer from "./reducers/product-reducer";
import viewedProductsSliderReducer from "./reducers/viewed-products-slider-reducer";

const rootReducer = combineReducers({        
    cart: cartReducer,
    product: productReducer,
    v_product: viewedProductsSliderReducer,
    search_history: searchReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart','v_product','search_history'],
};

const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persister = persistStore(store)
export default store 