import React from "react"
import styles from "./SearchTag.module.css"


class SearchTag extends React.Component {
    constructor(props) {
        super()
        this.onClickEvent =this.onClickEvent.bind()
      }
      onClickEvent(){
        this.props = []
      }
      render(){
          return(
              <>
                <div className={styles.tag}>
                    <p className={styles.tag_text}>{this.props.Name}</p>
                    <button className={styles.tag_btn} onclick={this.onClickEvent}>×</button>
                </div>
              </>
          )
      }
}

export default SearchTag;