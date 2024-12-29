import React from "react";
import PaletteItem from "./PaletteItem";
import { ColorUtil } from '../utils/ColorUtils';

const ColorPalette = ({ colors, setColors }) => {


      const handleCopyColor = (color) => {
          ColorUtil.copyToClipboard(color);
        };

    return (
        <div className="flex flex-wrap gap-4 justify-center mt-6 ">
            {colors.map((color, index) => (
            <PaletteItem
                key={index}
                color={color}
                onCopy={handleCopyColor}
            />
            ))}
        </div>
      );
    };
export default ColorPalette;