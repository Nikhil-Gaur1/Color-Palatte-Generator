import React, { useRef } from "react";

const Header = ({ onUploadButtonClick }) => {
    const fileInputRef = useRef(null);

    const handleUploadButtonClick = () => {
      // fileInputRef.current.click(); // Programmatically trigger file input
      if (onUploadButtonClick) {
        onUploadButtonClick(); // Call provided callback function
      }
    };

  return (
    <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex items-center justify-between">
            <h1 className="text-2xl ml-4 font-bold">Color<span className="text-green-400 ml-2">Palette</span></h1>
            <button
                className="py-2 px-4 text-sm bg-gray-700 rounded-md hover:bg-gray-600 transition duration-300 mr-4"
                onClick={handleUploadButtonClick}
            >
                Upload Image
            </button>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={(e) => {
                
              }}
          />
        </div>
    </header>
  );
};

export  {Header};