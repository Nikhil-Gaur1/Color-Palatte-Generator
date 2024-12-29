import React from "react";
import {  Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import ImageDrop from "./components/ImageDrop";
import ColorPalette from "./components/ColorPalette";
import LoadingSpinner from "./components/LoadingSpinner";
import { ColorUtil } from './utils/ColorUtils';
import { useState, useEffect, useRef } from "react";

function App() {
  const [image, setImage] = useState(null);
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
        if(image){
        extractColors();
        }else{
          setColors([]);
        }
    }, [image]);

    const handleImageChange = (newImage) => {
        setImage(newImage);
    };

  const extractColors = async () => {
    setLoading(true);
    try{
        const extractedColors = await ColorUtil.extractColors(image);
        setColors(extractedColors);
    }catch(err){
        console.error(err);
    } finally{
        setLoading(false);
    }
  };

   const handleHeaderUploadButtonClick = () => {
      fileInputRef.current.click();
   }

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
         handleImage(file);
      };

    const handleImage = (file) => {
        if (!file || !file.type.startsWith("image/")) {
           alert("Please Select only Image");
           return;
        }
        const reader = new FileReader();
        reader.onload = (event) => {
           setImage(event.target.result);
        };
        reader.readAsDataURL(file);
      };


    return (
      <>
        <Header onUploadButtonClick={handleHeaderUploadButtonClick} />
        <div className="flex flex-col min-h-screen bg-gray-800 text-white">
            <div className="flex-1 container mx-auto p-4">
               <ImageDrop onImageChange={handleImageChange} image={image} />
                 {loading ? <LoadingSpinner/> : <ColorPalette colors={colors} setColors={setColors} />}
            </div>
        </div>
        <Footer />
        <input
              type="file"
              accept="image/*"
              onChange={handleFileInputChange}
              className="hidden"
              ref={fileInputRef}
            />
      </>
    );
}
export default App;