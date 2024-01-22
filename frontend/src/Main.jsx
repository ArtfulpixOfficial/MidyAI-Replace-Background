import { ImageSection } from "./ImageSection";
import { Message } from "./Message";
import UploadFile from "./UploadFile";
import InputForm from "./InputForm";
import { useState } from "react";
import Loader from "./Loader";

export function Main({ image, newImage, handleOriginalImage, handleNewImage }) {
  const [isLoading, setIsLoading] = useState(false);
  async function onFileChange(file) {
    handleOriginalImage(file);
  }

  return (
    <main>
      {!isLoading && image && newImage && (
        <ImageSection image={image} newImage={newImage} />
      )}
      {!isLoading && !image && !newImage && (
        <>
          <Message />
          <UploadFile onFileChange={onFileChange} />
        </>
      )}
      {!isLoading && !newImage && image && (
        <>
          <img
            src={URL.createObjectURL(image)}
            alt="originalImage"
            className="original-image"
          />
          <InputForm
            image={image}
            handleNewImage={handleNewImage}
            setIsLoading={setIsLoading}
          />
        </>
      )}
      {image && isLoading && !newImage && <Loader />}
      {/* {newImage ? (
        <ImageSection image={image} newImage={newImage} />
      ) : (
        <>
          {!image ? (
            <>
              <Message />
              <UploadFile onFileChange={onFileChange} />
            </>
          ) : (
            <>
              <img
                src={URL.createObjectURL(image)}
                alt="originalImage"
                className="original-image"
              />
              <InputForm image={image} handleNewImage={handleNewImage} />
            </>
          )}
        </>
      )} */}
    </main>
  );
}
