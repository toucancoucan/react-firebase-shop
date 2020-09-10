export type RecentlyViewedReducerType = {
    viewedHistory: Array<number>
}

let RecentlyViewedReducerInitialState: RecentlyViewedReducerType = {
    viewedHistory: [],
}

const ADD_ITEM_TO_HISTORY = 'ADD_ITEM_TO_HISTORY';

export type addItemToHistoryType = {
    type: typeof ADD_ITEM_TO_HISTORY,
    payload: number
}

export let addItemToHistory = (item: number): addItemToHistoryType => {
    return {
        type: ADD_ITEM_TO_HISTORY,
        payload: item
    }
}

type actionTypes = addItemToHistoryType;

const RecentlyViewedReducer = (state = RecentlyViewedReducerInitialState, action: actionTypes): RecentlyViewedReducerType => {
    switch (action.type) {
        case ADD_ITEM_TO_HISTORY:
            return {
                ...state,
                viewedHistory: [...state.viewedHistory, action.payload]
            }
        default:
            return state
    }

}

export default RecentlyViewedReducer;