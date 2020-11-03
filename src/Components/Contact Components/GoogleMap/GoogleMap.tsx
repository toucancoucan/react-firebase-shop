import React from "react";
import styles from "./GoogleMap.module.scss";
import GoogleMapReact from "google-map-react";
import MapMark from "./MapMark/MapMark";
import CONSTANTS from "../../../Constants/CONSTANTS";

type mapStateToProps = {}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let GoogleMap: React.FC<propsType> = (props) => {
    return (
        <div className={styles.wrap}>
            <GoogleMapReact
                defaultCenter={CONSTANTS.MAP.CENTER}
                defaultZoom={CONSTANTS.MAP.ZOOM}>
                {CONSTANTS.MAP.SHOPS_COORDINATES.map((e, i) =>
                    <MapMark {...e} key={i}/>
                )}
            </GoogleMapReact>
        </div>
    )
}

export default GoogleMap;
