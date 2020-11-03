import React from "react";
import styles from "./SocialIcon.module.scss";
import {IconContext} from "react-icons";
import {
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoPinterest,
    IoLogoTwitter,
    IoLogoVimeo,
    IoLogoYoutube
} from "react-icons/all";
import routes from "../../../Constants/Routes";

export enum socialIconTypes {
    Instagram,
    Pinterest,
    Facebook,
    Twitter,
    Youtube,
    Vimeo,
}

type mapStateToProps = {
    socialIcon: socialIconTypes,
    style?: 'default' | 'light'
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let SocialIcon: React.FC<propsType> = ({socialIcon, style = 'default'}) => {
    return (
        <IconContext.Provider value={{className: style === 'default' ? styles.icon : styles.light}}>
            {(() => {
                switch (socialIcon) {
                    case socialIconTypes.Vimeo:
                        return <a href={routes.socialLinks.vimeo}>
                            <IoLogoVimeo/>
                        </a>
                    case socialIconTypes.Instagram:
                        return <a href={routes.socialLinks.instagram}>
                            <IoLogoInstagram/>
                        </a>;
                    case socialIconTypes.Pinterest:
                        return <a href={routes.socialLinks.pinterest}>
                            <IoLogoPinterest/>
                        </a>
                    case socialIconTypes.Facebook:
                        return <a href={routes.socialLinks.facebook}>
                            <IoLogoFacebook/>
                        </a>
                    case socialIconTypes.Twitter:
                        return <a href={routes.socialLinks.twitter}>
                            <IoLogoTwitter/>
                        </a>
                    case socialIconTypes.Youtube:
                        return <a href={routes.socialLinks.youtube}>
                            <IoLogoYoutube/>
                        </a>
                }
            })()}
        </IconContext.Provider>
    )
}

export default SocialIcon;
