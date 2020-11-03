import React from "react";
import HeaderSubHeader from "../../Common/HeaderSubHeader/HeaderSubHeader";
import EmptySpace from "../../Common/EmptySpace/EmptySpace";

type mapStateToProps = {}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let FeedbackForm: React.FC<propsType> = (props) => {
    return (
        <div>
            <HeaderSubHeader mainText={'GET FEEDBACK'} subText={'WRITE US A LETTER'} drawLine={false}/>
            <EmptySpace height={'2rem'}/>

        </div>
    )
}

export default FeedbackForm;
