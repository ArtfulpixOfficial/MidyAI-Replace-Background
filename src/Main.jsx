import { ImageSection } from "./ImageSection";
import { Message } from "./Message";
import UploadFile from "./UploadFile";
import InputForm from "./InputForm";

export function Main({ image, newImage, handleOriginalImage, handleNewImage }) {
  async function onFileChange(file) {
    handleOriginalImage(file);
  }

  return (
    <main>
      {newImage ? (
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
      )}
    </main>
  );
}
