import React, { useState, useRef } from "react";
// import placeholder from '../assets/placeholder.png';

const ImageDrop = ({ onImageChange, image }) => {
const fileInputRef = useRef(null);
const [dragOver, setDragOver] = useState(false);

      const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        const file = e.dataTransfer.files[0];
        handleImage(file);
      };


     const handleDragOver = (e) => {
        e.preventDefault();
        setDragOver(true);
      };

      const handleDragLeave = () => {
        setDragOver(false);
      };

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
          onImageChange(event.target.result);
        };
        reader.readAsDataURL(file);
      };


     const handleUploadButtonClick = () => {
        fileInputRef.current.click();
      };

    return (
         <div className="flex justify-center items-center h-full relative">
         <div
                className={`border-2 border-dashed border-gray-600 p-8 rounded-md w-[500px] h-[300px] cursor-pointer flex flex-col justify-center items-center ${dragOver ? "bg-gray-800 border-blue-500" : "bg-gray-900"}`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={handleUploadButtonClick}
            >
               {image ? (
                    <img
                      src={image}
                      alt="Uploaded"
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <>
                    <p className="text-gray-400 text-xl">Put An Image Here...</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileInputChange}
                      className="hidden"
                      ref={fileInputRef}
                    />
                    </>
                 )}
            </div>
        </div>
    )
    };

    export default ImageDrop;