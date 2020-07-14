import {connect} from 'react-redux'
import _ProfileNavRow, {mapStateToPropsType} from "./_ProfileNavRow";
import {rootState} from "../../../Reducers/store";


const mapStateToProps = (state: rootState): mapStateToPropsType => {
    return {
        userName: getFullUserName(state)
    }
};

let getFullUserName = (state: rootState): string | null => {
    if (state.UserReducer.user == null) return null
    return state.UserReducer.user.shippingInformation.firstName + state.UserReducer.user.shippingInformation.lastName;
}

const ProfileNavRow = connect<mapStateToPropsType, any, any, any>(
    mapStateToProps,
)(_ProfileNavRow);

export default ProfileNavRow;