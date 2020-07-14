export const CHANGE_SHOW_SEARCH = 'CHANGE_SHOW_SEARCH';
export const CHANGE_SHOW_CART = 'CHANGE_SHOW_CART';
export const CHANGE_SHOW_MENU = 'CHANGE_SHOW_MENU';
export const GET_SEARCH_VALUE = 'GET_SEARCH_VALUE';


export type changeShowSearchType = {
    type: typeof CHANGE_SHOW_SEARCH
}

export type changeShowCartWidgetType = {
    type: typeof CHANGE_SHOW_CART
}

export type changeShowMenuType = {
    type: typeof CHANGE_SHOW_MENU
}

export type getSearchValueType = {
    type: typeof GET_SEARCH_VALUE,
    payload: searchFieldPayloadType
}

export let changeShowSearch = (): changeShowSearchType => {
    return {
        type: CHANGE_SHOW_SEARCH,
    }
}

export let changeShowCartWidget = (): changeShowCartWidgetType => {
    return {
        type: CHANGE_SHOW_CART,
    }
}

export let changeShowMenu = (): changeShowMenuType => {
    return {
        type: CHANGE_SHOW_MENU,
    }
}

export type searchFieldPayloadType = {
    searchField: string
}

export let getSearchValue = (data: searchFieldPayloadType): getSearchValueType => {
    return {
        type: GET_SEARCH_VALUE,
        payload: data
    }
}


export type NavBarStateType = {
    showSearch: boolean,
    showCart: boolean,
    showMenu: boolean,
    searchText: string,
}

let CartReducerInitialState: NavBarStateType = {
    showSearch: false,
    showCart: false,
    showMenu: false,
    searchText: ""
}

export type actionTypes = changeShowSearchType & changeShowCartWidgetType & changeShowMenuType & getSearchValueType;

const NavBarReducer = (state = CartReducerInitialState, action: actionTypes): NavBarStateType => {
    switch (action.type) {

        case CHANGE_SHOW_SEARCH:
            return {
                ...state,
                showSearch: !state.showSearch
            }
        case CHANGE_SHOW_CART:
            return {
                ...state,
                showCart: !state.showCart
            }
        case CHANGE_SHOW_MENU:
            return {
                ...state,
                showMenu: !state.showMenu
            }
        case GET_SEARCH_VALUE:
            return {
                ...state,
                searchText: action.payload.searchField,
                showSearch: action.payload.searchField?.length > 0
            }
        default:
            return state
    }

}


export default NavBarReducer;