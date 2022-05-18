import GroupIcon from "/styles/resources/svg/GroupAddIcon"
import PlusIcon from "/styles/resources/svg/PlusIcon"
import LinkIcon from "/styles/resources/svg/LinkAddIcon"
import { SvgIcon } from '@mui/material';
import css from '/styles/css/MultiButton.module.css'
import PopUpButton from "./PopUp/PopUpButton";

export default function MultiButton({reloadViewContent}) {

    const doNothing = (e) => {
        e.stopPropagation();
    };

    return (
        <>
            <div className={css.floating_container}>
                <div className={css.floating_button} onClick={doNothing}>
                    <SvgIcon>
                        <PlusIcon/>
                    </SvgIcon>
                </div>
                <div className={css.element_container} onClick={doNothing}>
                    <PopUpButton reloadViewContent={reloadViewContent} iconSize={'small'} svgIcon={<GroupIcon/>} buttonClassName={css.float_element}/>
                    <PopUpButton linkWindowProps={{renderGroups: true, defaultGroup: ""}} reloadViewContent={reloadViewContent} isForLink={true} iconSize={'small'} svgIcon={<LinkIcon/>} buttonClassName={css.float_element}/>
                </div>
            </div>
        </>
    );
}