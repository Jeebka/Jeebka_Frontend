import { Portal, SvgIcon } from "@mui/material";
import { useState } from "react";
import PopUpWindow from "./PopUpWindow";

export default function PopUpButton({svgIcon, iconSize, buttonClassName, popUpContainer}) {

    const [isHidden, setIsHidden] = useState(true);

    const changePopUpVisibility = () => {
        setIsHidden(!isHidden);
    }

    return (
        <>
            <div className={buttonClassName} onClick={changePopUpVisibility}>
                <SvgIcon fontSize={iconSize}>
                    {svgIcon}
                </SvgIcon>
            </div>
            {isHidden ? null : (
                <Portal container={popUpContainer?.current}>
                    <PopUpWindow></PopUpWindow>
                </Portal>
            )}
        </>
        
    );
}