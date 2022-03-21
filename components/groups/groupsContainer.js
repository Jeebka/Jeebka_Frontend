import { Link } from "@mui/material";
import css from '../../styles/Group.module.css';

export default function GroupsContainer({children, containerName, shouldRenderButton}) {
    return (
        <div className={css.groupMenu_item}>
            <h2>{containerName}</h2>
            <div className={css.groups_container}>
                {
                    children.map((group) => {
                        return <Link href={group.name}>{group.name}</Link> 
                    })
                }
            </div>
            {shouldRenderButton ? <button>+</button> : null}
        </div>
    );
}