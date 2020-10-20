import React from "react"
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import styles from "./ImageSlies.module.css"
import "./image-gallery.css"
export default class ImageSlies extends React.Component {
    constructor(props) {
        super()
        this.state = {
            images: []
           }
           
    }
    
        
      render(){
         if (this.state.images.length <= 0) {
          let imagesStore = [];
          let url = "";
          this.props.imgs.map(img => {
            imagesStore.push({
            original: img.url,
            thumbnail: img.url,
    
           });
          });
          this.setState({
            images: imagesStore
          })
         }
        return(
            <>
            <div className={styles.img}>
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