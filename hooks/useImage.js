import { useState } from "react";

export const useImage = (inputImageSrc) => {
  const [imageSrc, setImageSrc] = useState(inputImageSrc);

  function imageSrcErrorHandler() {
    setImageSrc("/assets/noimage.png");
  }

  return { imageSrc, imageSrcErrorHandler };
};
