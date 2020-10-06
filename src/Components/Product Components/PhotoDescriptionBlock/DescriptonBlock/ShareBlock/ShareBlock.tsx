import React from "react";
import styles from "./ShareBlock.module.scss";
import {EmailShareButton, FacebookShareButton, PinterestShareButton, TwitterShareButton} from "react-share";
import {useLocation} from "react-router-dom";
import {IoIosMail, IoLogoFacebook, IoLogoPinterest, IoLogoTwitter} from "react-icons/all";
import combineClassNames from "../../../../../Functions/сombineClassNames";
import {IconBaseProps} from "react-icons";

type mapStateToProps = {}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let ShareBlock: React.FC<propsType> = (props) => {
    const currentLocation = useLocation().pathname;

    const ElementsArray: Array<{ component: any; icon: (props: IconBaseProps) => JSX.Element; className: string; text: string }> = [
        {component: FacebookShareButton, text: "Facebook", icon: IoLogoFacebook, className: styles.facebook},
        {component: PinterestShareButton, text: "Pinterest", icon: IoLogoPinterest, className: styles.pinterest},
        {component: TwitterShareButton, text: "Twitter", icon: IoLogoTwitter, className: styles.twitter},
        {component: EmailShareButton, text: "Email", icon: IoIosMail, className: styles.email},
    ]

    return (
        <div className={styles.shareBlock}>
            <div>
                SHARE THIS PRODUCT:
            </div>
            {ElementsArray.map((e, key) => (<e.component media={''} url={currentLocation} key={key}>
                <div className={combineClassNames(styles.general, e.className)}>
                    <e.icon className={styles.icon}/>
                    <div className={styles.text}>{e.text}</div>
                </div>
            </e.component>))}

        </div>
    )
}

export default ShareBlock;
