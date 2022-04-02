import { Portal, SvgIcon } from "@mui/material";
import { useState } from "react";
import PopUpWindow from "./PopUpWindow";
import store from "/lib/redux"

export default function PopUpButton({svgIcon, iconSize, buttonClassName, isForLink, reloadViewContent}) {

    const appState = store.getState().container;
    let popUpContainer = appState.containerRef;

    const [isHidden, setIsHidden] = useState(true);

    const changePopUpVisibility = (visibility) => {
        setIsHidden(visibility);
        reloadViewContent();
    }

    return (
        <>
            <div className={buttonClassName} onClick={() => {changePopUpVisibility(false)}}>
                <SvgIcon fontSize={iconSize}>
                    {svgIcon}
                </SvgIcon>
            </div>
            {isHidden ? null : (
                <Portal container={popUpContainer?.current}>
                    <PopUpWindow isForLink={isForLink}
                        closeButtonOnClick={() => {changePopUpVisibility(true)}}>
                    </PopUpWindow>
                </Portal>
            )}
        </>
    );
}