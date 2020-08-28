import React from "react";
import styles from "./Footer.module.scss";
import FooterBlockLinks from "./FooterBlockLinks/FooterBlockLinks";
import routes from "../../Constants/Routes";
import FooterBlock from "./FooterBlock/FooterBlock";

type mapStateToProps = {}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let Footer: React.FC<propsType> = (props) => {
    return (
        <div className={styles.footerWrap}>
            <div className={styles.container}>
                <FooterBlockLinks className={styles.hot} header={"HOT"} links={
                    [
                        ["TRENDING", routes.shop],
                        ["ACCOUNT", routes.me],
                        ["SALE", routes.shop],
                        ["BLOG", routes.blog],
                    ]
                }/>
                <FooterBlockLinks className={styles.categories} header={"SHOP CATEGORIES"}
                                  links={["ACCESSORIES", "WOMEN", "SHOES", "MEN",].map(e => [e, routes.category(e)])}/>
                <FooterBlockLinks className={styles.brands} header={"BRANDS"} links={
                    [
                        ["RALPH LAUREN", routes.shop],
                        ["CALVIN KLEIN", routes.shop],
                        ["SELECTED", routes.shop],
                        ["SUPREME", routes.shop],
                        ["LACOSTE", routes.shop],
                        ["GUCCI", routes.shop],
                        ["ZARA", routes.shop],
                        ["BOSS", routes.shop],
                    ]
                }/>
                <FooterBlockLinks className={styles.help} header={"HELP"} links={
                    [
                        ["PRIVACY POLICY", routes.privacy],
                        ["CONTACT US", routes.contact],
                        ["SHIPPING", routes.shipping],
                        ["F.A.Q.", routes.faq],
                    ]
                }/>
                <FooterBlock className={styles.social} header={"SOCIAL"}>
                    123145
                </FooterBlock>
            </div>
        </div>
    )
}

export default Footer;
