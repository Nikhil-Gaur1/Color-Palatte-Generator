import React from "react";
import { ColorUtil } from '../utils/ColorUtils';

const PaletteItem = ({ color, onCopy }) => {
  return (
    <div
      className="relative w-24 h-24 shadow-md rounded-md overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
      onClick={() => onCopy(color)}
    >
        <div
        className="absolute inset-0"
        style={{ backgroundColor: color }}
      />

       <div className="absolute bottom-0 left-0 right-0 p-2 bg-gray-900 bg-opacity-70 text-white text-sm text-center transition-all duration-300 group-hover:bg-opacity-100">
           <span className="select-none">{color}</span>
        </div>

    <button
        className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-800 bg-opacity-50 hover:bg-opacity-100 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
        onClick={(e) => {e.stopPropagation();onCopy(color)}}
    >
        <svg className="w-4 h-4 text-gray-400 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 7h-1V6a4 4 0 00-4-4H7a4 4 0 00-4 4v1H2a2 2 0 00-2 2v10a2 2 0 002 2h15a2 2 0 002-2V9a2 2 0 00-2-2zM7 4h4a2 2 0 012 2v1H7V6a2 2 0 012-2zm13 16H3v-10h17v10zM9 13h2v-2H9v2zm0-5h2V6H9v2zm4 5h2v-2h-2v2zm0-5h2V6h-2v2z"/></svg>
     </button>
    </div>
  );
};

export default PaletteItem;