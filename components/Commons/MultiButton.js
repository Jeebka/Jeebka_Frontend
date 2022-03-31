import GroupIcon from "/styles/resources/svg/GroupAddIcon"
import PlusIcon from "/styles/resources/svg/PlusIcon"
import LinkIcon from "/styles/resources/svg/LinkAddIcon"
import { SvgIcon } from '@mui/material';
import css from '/styles/css/MultiButton.module.css'
import PopUpButton from "./PopUp/PopUpButton";

export default function MultiButton({container}) {
    console.log(container)
    return (
        <>
            <div className={css.floating_container}>
                <div className={css.floating_button}>
                    <SvgIcon>
                        <PlusIcon/>
                    </SvgIcon>
                </div>
                <div className={css.element_container}>
                    <PopUpButton popUpContainer={container} iconSize={'small'} svgIcon={<GroupIcon/>} buttonClassName={css.float_element}/>
                    <PopUpButton popUpContainer={container} iconSize={'small'} svgIcon={<LinkIcon/>} buttonClassName={css.float_element}/>
                </div>
            </div>
        </>
    );
}