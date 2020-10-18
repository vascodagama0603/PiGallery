import React from "react"
import { Link } from "gatsby"
export default class SpecList extends React.Component {
    constructor(props) {
        super()
      }
      render(){
        return(
            <>
                <h2>
                    {this.props.spec}
                </h2>
                {this.props.sales.map(sale=>(
                    <>
                    <div style={{display: "block"}} >
                        <div style={{margin:"1rem"}}>
                    　￥{Number(sale.price).toLocaleString()}
                        </div>
                        <div style={{margin:"1rem"}}>
                        <Link to={sale.url}>AMAZONリンク</Link>
                        </div>
                    </div>
                    <div>
                        　　
                    </div>
                    </>
                ))}
            </>
        )
        }
}