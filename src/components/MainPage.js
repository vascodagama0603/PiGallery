
import React from "react"
import styles from "./MainPage.module.css"
import PurposeCard from "./PurposeCard"
import "./MainPageCommon.css"
class MainPage extends React.Component {
    constructor(props) {
        super()
        this.state={
            pageNum:6, 
            enable:true,
        }
        this.onClickListner = this.onClickListner.bind(this)
    }
    onClickListner(){
        this.setState({pageNum:this.state.pageNum+6})
        if (this.state.pageNum>this.props.purposes.length){
            this.setState({enable:false})
        }
    }
    render(){
        return (
            <>
                <div className={styles.grid}>
                    {this.props.purposes.slice(0,this.state.pageNum).map(purpose => (
                        <div >
                        <PurposeCard
                            key = {purpose.title}
                            purpose={purpose}
                        />
                        </div> 
                    ))}
                </div>
                <div className={'btn-' + this.state.enable}>
                    <input type="button" className={styles.btn01} value="More" onClick={this.onClickListner}/>
                </div>
            </>
        )
    }
}
export default MainPage;