import { useCallback, useEffect, useState } from "react";

export const useImage = (inputImageSrc) => {
  const [imageSrc, setImageSrc] = useState(inputImageSrc);

  useEffect(() => {
    setImageSrc(inputImageSrc);
  }, [inputImageSrc]);

  const imageSrcErrorHandler = useCallback(() => {
    setImageSrc(`${process.env.BASE_URL}/assets/noimage.png`);
  }, []);

  return [imageSrc, imageSrcErrorHandler];
};
