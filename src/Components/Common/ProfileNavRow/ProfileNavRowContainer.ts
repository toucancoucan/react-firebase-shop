import {connect} from 'react-redux'
import ProfileNavRow , {mapStateToPropsType} from "./ProfileNavRow";
import {appDispatch, rootState} from "../../../Reducers/store";
import {User} from "../../../Reducers/UserReducer";


const mapStateToProps = (state: rootState): mapStateToPropsType => {
    return {
        userName: getFullUserName(state)
    }
};

let getFullUserName = (state: rootState): string | null => {
    if (state.UserReducer.user == null) return null
    return state.UserReducer.user?.shippingInformation.firstName + state.UserReducer.user?.shippingInformation.lastName;
}

const ProfileNavRowContainer = connect<mapStateToPropsType, any, any, any>(
    mapStateToProps,
)(ProfileNavRow);

export default ProfileNavRowContainer;