import ColorThief from "colorthief";

class ColorUtil {
  static async extractColors(imageSrc) {
    return new Promise((resolve, reject) => {
      try {
        const colorThief = new ColorThief();
        const img = new Image();
        img.onload = () => {
          const palette = colorThief.getPalette(img, 6);
          const hexColors = palette.map((rgb) => `#${ColorUtil.rgbToHex(rgb)}`);
          resolve(hexColors);
        };
        img.onerror = (err) => reject(err);
        img.src = imageSrc;
      } catch (err) {
        reject(err);
      }
    });
  }

  static async copyToClipboard(color) {
    try {
      await navigator.clipboard.writeText(color);
      alert("Color " + color + " Copied");
    } catch (err) {
      console.error("Failed to copy color", err);
      alert("Failed to copy color: " + color);
    }
  }


  static rgbToHex(rgb) {
    return rgb
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("");
  }
}

export { ColorUtil };