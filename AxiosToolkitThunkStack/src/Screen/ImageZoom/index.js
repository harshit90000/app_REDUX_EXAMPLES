import { useState } from "react";
import { Image, View } from "react-native";
import ImageZoom from "react-native-image-pan-zoom";

const ImageZooming = () => {
   return (
      <View>
        <View style={{ position: 'relative' , alignItems:"center",width: '100%', height: '100%'}}>
          <ImageZoom style={{ marginTop: "30%" }}
            panToMove={true}
            cropWidth={300}
            cropHeight={300}
            minScale={1}
            maxScale={4}
            imageHeight={300}
            imageWidth={300} >
            <Image style={{ width: '100%', height: '100%', resizeMode: "contain" }}
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVLULDXpXSmzjxMHqOxyv6GD8f-eSQb4GXTA&usqp=CAU'}}
            />
          </ImageZoom>
        </View>
      </View>
    );
  };
  
  export default ImageZooming;