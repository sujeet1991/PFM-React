import { createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk';
import rootreducer from './Reducer';

 //const initialState={};
 const middleware=[thunk];

 function saveTOLocalStorage(state){
    try{
        const serializedState=JSON.stringify(state)
        localStorage.setItem('state',serializedState)
    }catch(e){console.log(e)}
    
    }
    
    function loadFromLocalStorage(){
    try{
        const serializedState=localStorage.getItem('state')
        if(serializedState===null)return undefined
        return JSON.parse(serializedState)
    }
    catch(e)
    {
        console.log(e)
        return undefined
    }
    }
 

const persistedState= loadFromLocalStorage(); 
const store=createStore(
    rootreducer,
    // initialState,
    persistedState,
     compose(
        applyMiddleware(...middleware),
         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
   
)

store.subscribe(()=>saveTOLocalStorage(store.getState()))
export default store;




