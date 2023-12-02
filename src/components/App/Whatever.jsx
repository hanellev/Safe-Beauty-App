import React, { useCallback, useEffect, useMemo, useState } from "react";
import Tesseract from "tesseract.js";

export const Whatever = () => {
  const [ocr, setOcr] = useState("");
  const [imageData, setImageData] = useState(null);
  const [progress, setProgress] = useState(0);

  const worker = useMemo(
    () =>
      Tesseract.createWorker({
        logger: (m) => {
          console.log(m);
          setProgress(parseInt(m.progress * 100));
        },
      }),
    [setProgress],
  );

  const convertImageToText = useCallback(async () => {
    if (!imageData) return;
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");

    const {
      data: { text },
    } = await worker.recognize(imageData);

    setOcr(text);
  }, [imageData, worker]);

  useEffect(() => {
    convertImageToText();
  }, [imageData]);

  const handleImageChange = useCallback(
    (e) => {
      const file = e.target.files[0];

      if (!file) {
        return;
      }

      const reader = new FileReader();

      reader.onloadend = () => {
        const imageDataUri = reader.result;
        console.log({ imageDataUri });
        setImageData(imageDataUri);
      };

      reader.readAsDataURL(file);
    },
    [setImageData],
  );

  return (
    <div className="nothing">
      <div>
        <p>Choose an Image</p>
        <input
          type="file"
          name=""
          id=""
          onChange={handleImageChange}
          accept="image/*"
        />
      </div>
      {progress < 100 && progress > 0 && (
        <div>
          <div className="progress-label">Progress ({progress}%)</div>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      )}
      <div className="display-flex">
        {/* <img src={imageData} alt="" srcSet="" /> */}
        <p>{ocr}</p>
      </div>
    </div>
  );
};
