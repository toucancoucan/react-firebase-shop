import React from "react";
import styles from "./Footer.module.scss";
import FooterBlockLinks from "./FooterBlockLinks/FooterBlockLinks";
import routes from "../../Constants/Routes";
import FooterBlock from "./FooterBlock/FooterBlock";
import SocialIcon, {socialIconTypes} from "../Common/SocialIcon/SocialIcon";
import FooterSubLink from "./FooterSubLink/FooterSubLink";
import FooterLogo from "./FooterLogo/FooterLogo";
import {FaApplePay, FaFedex, FaUps, RiMastercardLine, RiPaypalLine, RiVisaLine} from "react-icons/all";

type mapStateToProps = {}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let Footer: React.FC<propsType> = (props) => {
    return (
        <footer className={styles.footerWrap}>
            <div className={styles.firstRow}>
                <FooterBlockLinks className={styles.hot} header={"HOT"} links={
                    [
                        ["TRENDING", routes.shop], ["ACCOUNT", routes.me], ["SALE", routes.shop], ["BLOG", routes.blog],
                    ]
                }/>
                <FooterBlockLinks className={styles.categories} header={"SHOP CATEGORIES"}
                                  links={["ACCESSORIES", "WOMEN", "SHOES", "MEN",].map(e => [e, routes.category(e)])}
                />
                <FooterBlockLinks className={styles.brands} header={"BRANDS"} links={
                    [
                        ["RALPH LAUREN", routes.shop], ["CALVIN KLEIN", routes.shop], ["SELECTED", routes.shop],
                        ["SUPREME", routes.shop], ["LACOSTE", routes.shop], ["GUCCI", routes.shop],
                        ["ZARA", routes.shop], ["BOSS", routes.shop],
                    ]
                }/>
                <FooterBlockLinks className={styles.help} header={"HELP"} links={
                    [
                        ["PRIVACY POLICY", routes.privacy], ["CONTACT US", routes.contact],
                        ["SHIPPING", routes.shipping], ["F.A.Q.", routes.faq],
                    ]
                }/>
                <FooterBlock className={styles.social} header={"SOCIAL"}>
                    <SocialIcon socialIcon={socialIconTypes.Instagram}/>
                    <SocialIcon socialIcon={socialIconTypes.Facebook}/>
                    <SocialIcon socialIcon={socialIconTypes.Twitter}/>
                    <SocialIcon socialIcon={socialIconTypes.Youtube}/>
                    <SocialIcon socialIcon={socialIconTypes.Pinterest}/>
                    <SocialIcon socialIcon={socialIconTypes.Vimeo}/>
                </FooterBlock>
                <div className={styles.line}/>
                <div className={styles.links}>
                    <div>
                        © Copyright 2020 | By <a className={styles.copyrightLink} href={routes.telegram}>Maxim
                        Budnik</a>
                    </div>
                    <div>
                        <FooterSubLink url={routes.loremPage} text={"Privacy & Cookies"}/>
                        <FooterSubLink url={routes.loremPage} text={"Terms & Conditions"}/>
                        <FooterSubLink url={routes.loremPage} text={"Store"}/>
                        <FooterSubLink url={routes.loremPage} text={"Directory"}/>
                        <FooterSubLink url={routes.loremPage} text={"About"}/>
                    </div>
                </div>
                <div className={styles.logos}>
                    <FooterLogo>
                        <RiVisaLine/>
                    </FooterLogo>
                    <FooterLogo>
                        <RiMastercardLine/>
                    </FooterLogo>
                    <FooterLogo>
                        <RiPaypalLine/>
                    </FooterLogo>
                    <FooterLogo>
                        <FaUps/>
                    </FooterLogo>
                    <FooterLogo>
                        <FaFedex/>
                    </FooterLogo>
                    <FooterLogo>
                        <FaApplePay/>
                    </FooterLogo>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
