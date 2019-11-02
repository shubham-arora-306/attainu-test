import {createStore} from 'redux' ;
import rootreducer from "./reducers/rootreducer";


function Store (){

     return createStore(
        rootreducer,
        window.devToolsExtension && window.devToolsExtension()
     )
}

export default Store;