import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
//import CardHeader from '@material-ui/core/CardHeader';
//import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
//import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
//import { red } from '@material-ui/core/colors';
//import FavoriteIcon from '@material-ui/icons/Favorite';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
//import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import MoreVertIcon from '@material-ui/icons/MoreVert';

import {Link} from "gatsby"
import styles from "./PurposeCard.module.css"
import ImageSlides from "../templates/ImageSlides"
import "./purposeCommon.css"
/*
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
*/
class PurposeCard extends React.Component {
    constructor(props) {
        super()
        this.state={
            sList: props.purpose.specs,
            chkindex:0,
            amt:0,
            specNum:0,
            hidediv: false,
            rank:"",
            expanded:false
        }
        this.txtClick = this.txtClick.bind(this)
        this.handleExpandClick = this.handleExpandClick.bind(this)
   }
    getArticleRank(){
        this.setState({rank:this.props.purpose.rank})
    }
    componentDidMount(){
        this.getArticleRank()
        this.getSpecNum()
    }

    getSpecNum(){
        var amtA = 0
        var specNumA =0
        this.state.sList.map(spec=>{
            if(spec.isCheck){
                spec.sales.map(sale=>{
                    amtA+=Number(sale.price)
                    specNumA+=1
                })
            }
            //console.log("amtA",amtA)
        })
        this.setState({amt:amtA})
        this.setState({specNum:specNumA})
       
    }
    txtClick(){
        //console.log("hidediv",this.state.hidediv)
        this.setState({hidediv: !this.state.hidediv})
    }
    handleExpandClick(){
        this.setState({expanded:!this.state.expanded})
    }
    deleteRow(index){
        const spec_copy = this.state.sList.slice();
        console.log("spec_copy",spec_copy)
        console.log("index",index)
        spec_copy[index].isCheck = !spec_copy[index].isCheck
        this.setState({sList: spec_copy})
        this.getSpecNum()
}
    render(){
        const rankCss = this.state.rank
        const classes=""
    return (
        <div style={{margin:"5px"}}>
            <Card className={classes.root}>
                <div className={rankCss}>
                    <ImageSlides
                        imgs = {this.props.purpose.images}
                    />
                </div>
                
                <CardActions disableSpacing style={{padding:"0"}}>
                    {/*
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                    */} 
                    <div  className={styles.figcaption}>
                        <IconButton aria-label="add to favorites" onClick={() => window.open(this.props.purpose.url)}>
                            <ExitToAppIcon />
                        </IconButton>
                        </div>
                </CardActions>
                    
                <CardContent style={{paddingBottom:"0"}}>
                    <p className={styles.title}>{this.props.purpose.title}</p>
                    <p className={styles.discription}>{this.props.purpose.discription}</p>
                </CardContent>
                
                <div style={{display:"table" ,width: "-webkit-fill-available"}}>
                    <div style={{display:"table-cell",marginTop:"auto"}}>
                        <CardActions disableSpacing style={{padding:"0"}}>
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: this.state.expanded,
                                })}
                                onClick={this.handleExpandClick}
                                aria-expanded={this.state.expanded}
                                aria-label="show more"
                                edgeEnd="end"
                            >
                            <ExpandMoreIcon />
                            
                            </IconButton>
                            <Typography >
                            部品リスト
                        </Typography>
                        </CardActions>

                    </div>

                    <div style={{display:"table-cell"　,marginTop:"auto"}}>
                        <p className={styles.amount}>
                                ￥{Number(this.state.amt).toLocaleString()}
                        </p>
                    </div>
                </div>
         
            
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent style={{marginBottom: "auto" ,padding:"0"}}>           
                    <p style={{marginBottom: "auto"}}>点数:{this.state.specNum}点</p>  
                </CardContent>
                <CardContent>
                    <div>
                        {this.state.sList.map((spec,index)=>
                            <>
                                <div style={{paddingBottom:"5px"}}>
                                    <div style={{display:"inline-block"}} >
                                        <input type="checkbox"
                                            defaultChecked={spec.isCheck}
                                            
                                            onChange ={(e) => this.deleteRow(index)}
                                        />
                                    </div>

                                    <div style={{display:"inline-block",paddingLeft:"20px"}} >
                                        
                                        <Link to = {spec.sales[0].url} className={styles.speclink}>{spec.name}</Link>

                                    </div>
                                    <div style={{display:"inline-block",paddingLeft:"5px"}} >
                                        <p>:{spec.discription}</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </CardContent>
            </Collapse>
            </Card>
        </div>
    );
   }
}
export default PurposeCard;
/*
import React from "react"
import {Link} from "gatsby"
import styles from "./PurposeCard.module.css"
import ImageSlides from "../templates/ImageSlides"
import "./purposeCommon.css"
class PurposeCard extends React.Component {
    constructor(props) {
        super()
        this.state={
            sList: props.purpose.specs,
            chkindex:0,
            amt:0,
            specNum:0,
            hidediv: false,
            rank:""
        }
        this.txtClick = this.txtClick.bind(this)
    }
    getArticleRank(){
        this.setState({rank:this.props.purpose.rank})
    }
    componentDidMount(){
        this.getArticleRank()
        this.getSpecNum()
    }

    getSpecNum(){
        var amtA = 0
        var specNumA =0
        this.state.sList.map(spec=>{
            if(spec.isCheck){
                spec.sales.map(sale=>{
                    amtA+=Number(sale.price)
                    specNumA+=1
                })
            }
            //console.log("amtA",amtA)
        })
        this.setState({amt:amtA})
        this.setState({specNum:specNumA})
       
    }
    txtClick(){
        //console.log("hidediv",this.state.hidediv)
        this.setState({hidediv: !this.state.hidediv})
    }
    render(){
        const rankCss = this.state.rank
        //console.log(rankCss)
        return(
            <>
            <div className={rankCss}>
                <ImageSlides
                        imgs = {this.props.purpose.images}
                    />
            </div>
            <div className={styles.text}>
                <p className={styles.title}>{this.props.purpose.title}</p>
                <p className={styles.discription}>{this.props.purpose.discription}</p>
                <div>
                    <p className={styles.item} >部品数:{this.state.specNum}点</p>
                    <button className={styles.btn} onClick={this.txtClick}>▼</button>
                    <p className={styles.amount}>
                            ￥{Number(this.state.amt).toLocaleString()}
                    </p>
                </div>
                <div className={'hide-' + this.state.hidediv}>
                    {this.state.sList.map((spec,index)=>
                        <>
                            <div style={{display:"table"}}>
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

            </div>
            </>
        )
        }
    deleteRow(index){
            const spec_copy = this.state.sList.slice();
            console.log("spec_copy",spec_copy)
            console.log("index",index)
            spec_copy[index].isCheck = !spec_copy[index].isCheck
            this.setState({sList: spec_copy})
            this.getSpecNum()
    }
}



export default PurposeCard;
*/