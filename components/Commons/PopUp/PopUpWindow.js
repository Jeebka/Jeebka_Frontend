import css from "/styles/css/PopUp.module.css";
import AddCard from "./AddPopUp/AddCard";


export default function PopUpWindow({closeButtonOnClick, isForLink}) {

    const saveGroup = () => {}
    const doNothing = (e) => {
        e.stopPropagation();

    }
    return (
        <div className={css.popUpContainer} onClick={closeButtonOnClick}>
            <div className={`${css.fade_in} ${css.popUpWindow}`}>
                <AddCard isForLink={isForLink} onClick={doNothing} closePopUp={closeButtonOnClick}></AddCard>
            </div>

        </div>
    );
}