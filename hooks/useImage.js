import { useState } from "react";

export const useImage = (inputImageSrc) => {
  const [imageSrc, setImageSrc] = useState(inputImageSrc);

  function imageSrcErrorHandler() {
    setImageSrc(`${process.env.BASE_URL}/assets/noimage.png`);
  }

  return [imageSrc, imageSrcErrorHandler];
};
