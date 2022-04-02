import css from "/styles/css/HomeContainer.module.css"
import MultiButton from "/components/Commons/MultiButton"

export default function HomeContent({children, shouldRenderAddButton, isRenderAGroup, reloadViewContent}) {

    return (
    <div className={`${css.homeContainer} ${shouldRenderAddButton ? "" : css.noPadding}`}>
        <div className={`${css.homeContent} ${isRenderAGroup ? css.noScroll : ""}`}>
          {children}
        </div>
        {shouldRenderAddButton ? <div className={css.buttonsContainer}>
          <MultiButton reloadViewContent={reloadViewContent}></MultiButton>
        </div> : null}
    </div>
    );
}
