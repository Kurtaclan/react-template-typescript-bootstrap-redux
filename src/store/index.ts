import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';
import { History } from 'history';
import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { exampleReducer, ExampleState } from './example';
import { exampleSaga } from './example/sagas';

export interface ApplicationState {
    example: ExampleState,
    router: RouterState
}

export function* rootSaga() {
    yield all([
        fork(exampleSaga)
        // `fork()` any other store sagas down here...
    ])
}

export default function configureStore(
    history: History,
    initialState?: ApplicationState
): Store<ApplicationState> {
    const rootReducer = combineReducers<ApplicationState>({
        example: exampleReducer,
        router: connectRouter(history),
    });
    const composeEnhancers = composeWithDevTools({})
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
    )
    sagaMiddleware.run(rootSaga)
    return store
}