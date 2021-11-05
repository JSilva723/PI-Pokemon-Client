import { createStore, applyMiddleware, compose } from 'redux'; // importamos createStore para poder crear el store, esta fucnion recibe el REDUCER, y en caso de usar metodos asincronos, vamos a mediar con el middleware, para que ese gestione esos casos, para ello le pasamos como parametro la libreria thunk. Para poder usar las devTool usamos el compose. https://github.com/zalmoxisus/redux-devtools-extension/blob/master/src/app/stores/windowStore.js

import thunk from 'redux-thunk'; // importamos thunk para poder pasarselo al middleware

import { rootReducer } from '../reducers/index';// Importamos el reducer para poder pasarlo al store

// Hacemos esto porque el createStore espera dos argumentos
let enhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(
  rootReducer,
  enhancer
);