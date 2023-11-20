# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

At the time of this project, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses
  [SWC](https://swc.rs/) for Fast Refresh

# Redux / React-Redux

## SUMMARY

- Create a Redux store with configureStore configureStore accepts a reducer function as a named
  argument configureStore automatically sets up the store with good default settings Provide the
  Redux store to the React application components Put a React Redux <Provider> component around your
  <App /> Pass the Redux store as <Provider store={store}> Create a Redux "slice" reducer with
  createSlice Call createSlice with a string name, an initial state, and named reducer functions
  Reducer functions may "mutate" the state using Immer Export the generated slice reducer and action
  creators Use the React Redux useSelector/useDispatch hooks in React components Read data from the
  store with the useSelector hook Get the dispatch function with the useDispatch hook, and dispatch
  actions as needed

  ### Example tutorial on how to use:

  -[@https://react-redux.js.org/tutorials/quick-start] -[@https://redux.js.org/tutorials/index]

- This Clothing E-Commerce Site is made BY: [@https://deulo.vercel.app/]
