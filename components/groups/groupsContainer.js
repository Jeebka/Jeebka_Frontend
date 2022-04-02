import css from '/styles/css/Group.module.css';
import GroupMiniature from './GroupMiniature';

export default function GroupsContainer({groups, changeGroup}) {
    return (
        <div className={css.groups_container}>
            {
                groups.map((group) => {
                    return <GroupMiniature name={group.name} href={group.href} onClick={() => {changeGroup(group.name)}}/>
                })
            }
        </div>
    );
}