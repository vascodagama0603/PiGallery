import React from "react"
import {Link} from "gatsby"
import styles from "./PurposeCard.module.css"
import ImageSlides from "../templates/ImageSlides"
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
        var amt = 0
        if(this.props.purpose.images.length!=0){
            img = this.props.purpose.images[0].url
            console.log(img)
    }
        if(amt==0){this.props.purpose.specs.map(spec=>(
            spec.sales.map(sale=>(
                amt += Number(sale.price)
            ))))}
        return(
            <>
            <Link to={this.props.purpose.id} style={{ textDecoration: 'none', color: 'Black' }}>
            <p className={styles.title}>{this.props.purpose.title}</p>
            <p className={styles.amount}>
                
                    ￥{Number(amt).toLocaleString()}
                    </p>
            
            <div >
                <p className={styles.item}>アイテム数:{this.props.purpose.specs.length}点</p>            
                <p className={styles.favorite}>♡</p>

            </div>
            </Link>
            <ImageSlides
                    imgs = {this.props.purpose.images}
                />
            <Link to={this.props.purpose.id} style={{ textDecoration: 'none', color: 'Black' }}>
            <p>{this.props.purpose.discription}</p>
            </Link>
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