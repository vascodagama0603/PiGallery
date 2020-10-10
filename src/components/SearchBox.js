import React from "react"
import styles from "./SearchBox.module.css"
import SearchTag from "./SearchTag.js"
//import { addTodo } from "../redux/ActionCreater";
class SearchBox extends React.Component {
    constructor(props) {
        super()
        this.changeValue = this.changeValue.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state={
            searchTxt: "",
            sList: [],
        }
      }
    handleClick(e) {
        if (e.which == 13) { //Enter keycode                        
            
            
            if (!this.state.sList.includes(this.state.searchTxt)){
                this.state.sList.push(this.state.searchTxt);
                //dispatch(addTodo(text))
                this.setState({searchTxt:""})
                //alert('this is:', this.state.searchTxt);
            }
            console.log(this.state.sList)
        }
    }
    changeValue(e){
        this.setState({searchTxt: e.target.value})
    }
    render(){
        return(
            <>
                <form method="get" action="#" className={styles.search_container}>
                    <input 
                        type="text" 
                        size="25" 
                        value={this.state.searchTxt}
                        placeholder="キーワード検索" 
                        onKeyPress={(e) => this.handleClick(e)} 
                        onChange={(e) => this.changeValue(e)}/>
                </form>
                {this.state.sList.map(tag => (
                    <SearchTag
                        Name = {tag}
                    />
                ))}
                

            </>
        )
        }
}

export default SearchBox;