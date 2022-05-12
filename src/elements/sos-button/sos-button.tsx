import { useEffect, useState } from "react";
import { ButtonElement, CircleElement, GreenCircleElement, GreenButtonElement} from "./sos-button.styles";


export const SOSButton = () => {
    return (
            <GreenCircleElement><GreenButtonElement>SOS</GreenButtonElement></GreenCircleElement>
    );
}