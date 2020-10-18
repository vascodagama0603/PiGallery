import React from "react"
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
export default class ImageSlies extends React.Component {
    constructor(props) {
        super()
        this.state = {
            images: []
           }
           
    }
    
        
      render(){
        const style = {
            //height: "100px",
            margin: "0 auto",
            marginTop: 10
          };
        //console.log("BBBB",this.props.imgs)
         if (this.state.images.length <= 0) {
          let imagesStore = [];
          let url = "";
          this.props.imgs.map(img => {
            imagesStore.push({
            original: img.url,
            thumbnail: img.url,
    
           });
          });
          //console.log("images",imagesStore)
          this.setState({
            images: imagesStore
          })
         }
        return(
            <>
            <div  style={style}>
                <ImageGallery 
                items={this.state.images}
                showThumbnails={false}
                showPlayButton={false}
                showFullscreenButton={false}
                />
                </div>
            </>
        )
        }
    }


    