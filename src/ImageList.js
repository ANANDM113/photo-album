import React from "react";
import Image from "./components/Image";

export default class ImageList extends React.Component{

    shouldComponentUpdate(nextProps,_){
        const imagesLength  =   nextProps.images.length;

        if(nextProps.images.length  >   0){
            const lastImageUrl  =   nextProps.images[imagesLength-1];
            if(lastImageUrl <=  5   ||  lastImageUrl.indexOf(" ") >=0 ){
                return false;
            }
        }
        return true;
    }

    render(){
        return(
            <div className="image-list">
                {
                    this.props.images.map((image,index) => {
                        return <Image key={index} image = {image}/>
                    })
                }
            </div>
        )
    }

}