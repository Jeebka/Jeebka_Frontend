import css from '/styles/css/Group.module.css';
import GroupMiniature from './GroupMiniature';

export default function GroupsContainer({groups}) {
    return (
        <div className={css.groups_container}>
            {
                groups.map((group) => {
                    return <GroupMiniature name={group.name} href={group.href}/>
                })
            }
        </div>
    );
}