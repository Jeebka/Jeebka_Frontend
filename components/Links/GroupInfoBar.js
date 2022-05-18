import css from "../../styles/css/Link.module.css";
import {useState} from "react";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import {DeleteGroup} from "../../lib/jeebka/jeebka.services";

export default function GroupInfoBar({groupProps, handleDeleteGroup}) {

    const [active, setActive] = useState(false)

    const menuBarToggle = () => {
        setActive(!active)
    }

    const handleDelete = () => {
        DeleteGroup(groupProps.name, handleDeleteGroup);
    }
    return (
        <div className={`${css.group__info__bar} ${active ? css.active : ""}`} >
            <div className={`${css.menu}`}>
                <div className={css.menu__section}>
                    <h4>Description</h4>
                    <span>{groupProps.description}</span>
                </div>
                <div className={css.menu__section}>
                    <h4>Members: {groupProps.members.length}</h4>
                    {groupProps.members.map((member) => {
                        return <span>{member}</span>;
                    })}
                </div>
                <div className={css.menu__section}>
                    <h4>Share</h4>
                </div>
                <div className={`${css.menu__section} ${css.centered}`}>
                    <DeleteIcon className={css.icon__delete} onClick={handleDelete}/>
                </div>
            </div>
            <InfoIcon className={css.menu__groupInfo} onClick={menuBarToggle} fontSize={'large'}/>
        </div>
    );
}