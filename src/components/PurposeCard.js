import React from "react"
import styles from "./PurposeCard.module.css"
class PurposeCard extends React.Component {
    constructor(props) {
        super()
      }
    render(){
        return(
            <>
            
            <p className={styles.title}>{this.props.purpose.title}</p>
            <p className={styles.amount}>1000円</p>
            <div >
                <p className={styles.item}>アイテム数:{this.props.purpose.specs.length}点</p>            
                <p className={styles.favorite}>♡</p>
            </div>
            <p>📎{this.props.purpose.url}</p>
            <p>{this.props.purpose.discription}</p>
            </>
        )
        }
}

export default PurposeCard;