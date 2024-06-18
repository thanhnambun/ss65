// import {combineReducers, createStore} from "redux"
// import reducerCount from "./CountReducers"
// import reducerJob from "./JobReducers";

// const rootReducers = combineReducers({
//     reducerCount,
//     reducerJob
// })
// const store = createStore(rootReducers);
// export default store;
import { combineReducers, createStore } from "redux";
import reducerProfile from "./reducers/profileReducer";
import reducerProduct from "./reducers/productreducer";
import reducerCount from "./reducers/CountReducers";

const rootReducer = combineReducers({
  users: reducerProfile,
  products: reducerProduct,
  reducerCount
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;