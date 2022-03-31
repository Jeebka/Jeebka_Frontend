import css from "/styles/css/HomeContainer.module.css"
import MultiButton from "/components/Commons/MultiButton"

export default function HomeContent({children, shouldRenderAddButton}) {
  return (
    <div className={`${css.homeContainer} ${shouldRenderAddButton ? "" : css.noPadding}`}>
        <div className={css.homeContent}>
          {children}
        </div>
        {shouldRenderAddButton ? <div className={css.buttonsContainer}>
          <MultiButton></MultiButton>
        </div> : null}
    </div>
  );
}
