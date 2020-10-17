import React from "react"

export default class SpecList extends React.Component {
    constructor(props) {
        super()
      }
      render(){
        return(
            <>
                <li>
                    {this.props.spec}
                </li>
                {this.props.sales.map(sale=>(
                    <>
                    <div>
                        　{sale.price}
                    </div>
                    <div>
                        　　{sale.url}
                    </div>
                    </>
                ))}
            </>
        )
        }
}