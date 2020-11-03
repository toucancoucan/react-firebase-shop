import React from "react";
import styles from "./AdressBlock.module.scss";
import HeaderSubHeader from "../../Common/HeaderSubHeader/HeaderSubHeader";
import EmptySpace from "../../Common/EmptySpace/EmptySpace";
import SocialIcon, {socialIconTypes} from "../../Common/SocialIcon/SocialIcon";

type mapStateToProps = {}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let AddressBlock: React.FC<propsType> = (props) => {
    return (
        <div>
            <HeaderSubHeader mainText={'OUR ADRESS'} subText={'WHERE YOU CAN FIND US'} drawLine={false}/>
            <EmptySpace height={'1rem'}/>
            <div className={styles.textContainer}>
                <div>Nauky Ave, 14,</div>
                <div>Kharkiv,</div>
                <div>Kharkiv Oblast,</div>
                <div>61000</div>
            </div>
            <EmptySpace height={'1rem'}/>
            <div className={styles.textContainer}>
                <div>+380577021013</div>
                <div>info@nure.ua</div>
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

export default AddressBlock;
