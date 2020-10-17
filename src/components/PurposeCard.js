import React from "react"
import styles from "./PurposeCard.module.css"
class PurposeCard extends React.Component {
    constructor(props) {
        super()
        this.state={
            mainImg: "",
            sList: [],
        }
      }
      
    render(){
        var img = ""
        if(this.props.purpose.images.length!=0){
            img = this.props.purpose.images[0].url
            console.log(img)
    }
        return(
            <>
            
            <p className={styles.title}>{this.props.purpose.title}</p>
            <p className={styles.amount}>1000円</p>
            <div >
                <p className={styles.item}>アイテム数:{this.props.purpose.specs.length}点</p>            
                <p className={styles.favorite}>♡</p>
                <img src={img}  />
            </div>
            <p>📎{this.props.purpose.url}</p>
            <p>{this.props.purpose.discription}</p>
            </>
        )
        }
}
const mainImg = ()=>{
    var url = ""
    if(this.props.purpose.images!=null){
        url = this.props.purpose.images[0].url
        //console.log(this.props.purpose.images)
    }
    return url
}
export default PurposeCard;