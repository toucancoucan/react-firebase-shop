import React from "react";
import GoogleMap from "../../Components/Contact Components/GoogleMap/GoogleMap";
import styles from './ContactScreen.module.scss'
import FeedbackForm from "../../Components/Contact Components/FeedbackForm/FeedbackForm";
import AddressBlock from "../../Components/Contact Components/AdressBlock/AddressBlock";

type mapStateToProps = {}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let ContactScreen: React.FC<propsType> = (props) => {
    return (
        <div>
            <GoogleMap/>
            <div className={styles.contactContainer}>
                <FeedbackForm/>
                <AddressBlock/>
            </div>
        </div>
    )
}

export default ContactScreen;
