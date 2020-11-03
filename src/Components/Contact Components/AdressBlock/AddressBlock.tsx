import React, {useEffect} from "react";
import styles from "./AdressBlock.module.scss";
import HeaderSubHeader from "../../Common/HeaderSubHeader/HeaderSubHeader";
import EmptySpace from "../../Common/EmptySpace/EmptySpace";
import SocialIcon, {socialIconTypes} from "../../Common/SocialIcon/SocialIcon";
import {connect} from "react-redux";
import {rootState} from "../../../Reducers/store";
import {contactInformation, fetchAndSetContactInformation} from "../../../Reducers/ContactReducer";

type mapStateToProps = {
    contactInformation: contactInformation | null
}

type mapDispatchToProps = {
    fetchAndSetContactInformation: () => void
}

type propsType = mapStateToProps & mapDispatchToProps;

let _AddressBlock: React.FC<propsType> = ({contactInformation, fetchAndSetContactInformation}) => {
    useEffect(() => {
        if (contactInformation === null) fetchAndSetContactInformation();
    }, [contactInformation])
    return (
        <div>
            <HeaderSubHeader mainText={'OUR ADRESS'} subText={'WHERE YOU CAN FIND US'} drawLine={false}/>
            <EmptySpace height={'1rem'}/>
            <div className={styles.textContainer}>
                <div>{contactInformation?.address}</div>
                <div>{contactInformation?.city}</div>
                <div>{contactInformation?.district}</div>
                <div>{contactInformation?.index}</div>
            </div>
            <EmptySpace height={'1rem'}/>
            <div className={styles.textContainer}>
                <div>{contactInformation?.number}</div>
                <div>{contactInformation?.email}</div>
            </div>
            <EmptySpace height={'1rem'}/>
            <div className={styles.social}>
                <SocialIcon style={"light"} socialIcon={socialIconTypes.Instagram}/>
                <SocialIcon style={"light"} socialIcon={socialIconTypes.Facebook}/>
                <SocialIcon style={"light"} socialIcon={socialIconTypes.Twitter}/>
                <SocialIcon style={"light"} socialIcon={socialIconTypes.Youtube}/>
                <SocialIcon style={"light"} socialIcon={socialIconTypes.Pinterest}/>
                <SocialIcon style={"light"} socialIcon={socialIconTypes.Vimeo}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state: rootState): mapStateToProps => {
    return {
        contactInformation: state.ContactReducer.contact
    }
};


let AddressBlock = connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps, {fetchAndSetContactInformation})(_AddressBlock)


export default AddressBlock;
