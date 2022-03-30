import css from "../../styles/HomeContainer.module.css"

export default function HomeContent({child}) {

  return (
    <div className={css.homeContainer}>
        <div className={css.homeContent}>
          {child}
        </div>
    </div>
  )
}
