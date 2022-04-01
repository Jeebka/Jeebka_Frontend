import css from "/styles/css/HomeContainer.module.css"
import MultiButton from "/components/Commons/MultiButton"

export default function HomeContent({children, shouldRenderAddButton, isRenderAGroup}) {
    console.log(isRenderAGroup);
  return (
    <div className={`${css.homeContainer} ${shouldRenderAddButton ? "" : css.noPadding}`}>
        <div className={`${css.homeContent} ${isRenderAGroup ? css.noScroll : ""}`}>
          {children}
        </div>
        {shouldRenderAddButton ? <div className={css.buttonsContainer}>
          <MultiButton></MultiButton>
        </div> : null}
    </div>
  );
}
