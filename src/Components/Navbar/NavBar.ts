import {connect} from 'react-redux'
import _NavBar, {mapDispatchToPropsType, mapStateToPropsType} from "./_NavBar";
import {rootState} from "../../Reducers/store";
import {changeShowCartWidget, changeShowMenu, changeShowSearch, getSearchValue} from "../../Reducers/NavBarReducer";

const mapStateToProps = (state: rootState): mapStateToPropsType => {
    return {
        showCart: state.NavBarReducer.showCart,
        showMenu: state.NavBarReducer.showMenu,
        showSearch: state.NavBarReducer.showSearch,
        searchText: state.NavBarReducer.searchText
    }
};

const NavBar = connect<mapStateToPropsType, mapDispatchToPropsType, any, any>(
    mapStateToProps,
    {
        changeShowCartWidget,
        changeShowMenu,
        changeShowSearch,
        getSearchValue
    }
)(_NavBar);

export default NavBar;