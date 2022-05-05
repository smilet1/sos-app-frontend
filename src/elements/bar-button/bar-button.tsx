import { FC } from "react"
import { IBarButtonProps } from "./types"
import "./bar-button"

export const BarButton:FC <IBarButtonProps> = (props) => {
    return (
        <button className="bar-button" {...props}></button>
    );
}