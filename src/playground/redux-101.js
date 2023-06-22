// Redux serve para aplicações mais complexas, nas quais existe mais de um parent, cada um com seus childs
// O redux permite que uma função seja usada em múltiplos childs de parents diferentes
// Action - Object that gets sent to the store
// switch é mais comumente utilizado com action do que o if
// Nao mudar o setstate ou o setaction. usar o state normal
// store.dispatch faz a função createStore rodar denovo
// type é obrigatório no store.dispatch
// Action generators - function that return action objects 

import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy
});

const setCount = ({ count }) => ({
    type: "SET",
    count
});

const resetCount = () => ({
    type: "RESET"
});

// Reducers:
// Principais caracteristicas dos Reducers:
// 1) Reducers are pure functions (só usa os argumentos que vc declarar na função, e nao usa nada de fora)
// 2) Never change state or action (o state ainda muda, só que retornando um objeto com o novo valor. Nao pode mudar ele diretamente)

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            }
        case "SET":
            return {
                count: action.count
            }
        case "RESET":
            return {
                count: 0
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);


// store.subscribe permite traquear as mudanças no store
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({
//     type: "INCREMENT",
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));


