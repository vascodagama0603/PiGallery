import React from "react"
import {Link} from "gatsby"
import styles from "./PurposeCard.module.css"
import ImageSlides from "../templates/ImageSlides"
class PurposeCard extends React.Component {
    constructor(props) {
        super()
        this.state={
            sList: props.purpose.specs,
            chkindex:0,
            amt:0,
            specNum:0
        }
      }
    componentDidMount(){
        var amtA = 0
        var specNumA =0
        this.state.sList.map(spec=>{
            if(spec.isCheck){
                spec.sales.map(sale=>{
                    amtA+=Number(sale.price)
                    specNumA+=1
                })
            }
            console.log("amtA",amtA)
        })
        this.setState({amt:amtA})
        this.setState({specNum:specNumA})
       

    }
    render(){
        
        return(
            <>
                                    
            <Link to={this.props.purpose.id} style={{ textDecoration: 'none', color: 'Black' }}>
            <p className={styles.title}>{this.props.purpose.title}</p>
            </Link>
            <div>
                <p className={styles.item}>アイテム数:{this.state.specNum}点</p>      
                <p className={styles.amount}>
                        ￥{Number(this.state.amt).toLocaleString()}
                </p>
                {this.state.sList.map((spec,index)=>
                    <>
                        <div style={{display:"flex"}}>
                            
                            <input type="checkbox"
                                defaultChecked={spec.isCheck}
                                style={{marginRight:"1rem"}}
                                onChange ={(e) => this.deleteRow(index)}
                            />
                            <Link to ={spec.sales[0].url}>{spec.name}</Link>
                        </div>
                    </>
                    )}
            </div>
            
            <ImageSlides
                    imgs = {this.props.purpose.images}
                />
            <Link to={this.props.purpose.id} style={{ textDecoration: 'none', color: 'Black' }}>
            <p>{this.props.purpose.discription}</p>
            </Link>
            </>
        )
        }
    deleteRow(index){
            const spec_copy = this.state.sList.slice();
            console.log("spec_copy",spec_copy)
            console.log("index",index)
            spec_copy[index].isCheck = !spec_copy[index].isCheck
            this.setState({sList: spec_copy})
            this.componentDidMount()
    }
}
var index = 0
export default PurposeCard;