import GroupContainer from "./groupsContainer";
import css from '../../styles/Group.module.css';

export default function GroupsBar() {
    const childs = [{name: "Grupo1"},{name: "Grupo1"},{name: "Grupo1"},{name: "Grupo1"},{name: "Grupo1"},{name: "Grupo1"},{name: "Grupo1"},{name: "Grupo1"},{name: "Grupo1"},{name: "Grupo1"}]; 
    return (
        <div className={css.groups_menu}>
            <GroupContainer childs={childs} containerName="My groups" shouldRenderButton={true}></GroupContainer>
            <GroupContainer childs={childs} containerName="Suggested"></GroupContainer>
        </div>
    );
}