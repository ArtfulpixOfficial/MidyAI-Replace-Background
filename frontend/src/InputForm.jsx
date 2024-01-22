import { Button } from "./Button";
import { useState } from "react";
import { clipBoardAPI } from "./api";
const InputForm = function ({ image, handleNewImage, setIsLoading }) {
  const [prompt, setPrompt] = useState("");

  async function fileToBase64Url(file) {
    if (!file) return;
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = function (e) {
        const base64Url = e.target.result;
        resolve(base64Url);
      };

      reader.onerror = function (error) {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  }

  const handleSubmit = async function (e) {
    e.preventDefault();
    if (!image) return;
    setIsLoading(true);
    const imageURL = await fileToBase64Url(image);
    const newImageURL = await clipBoardAPI(imageURL, prompt);
    setIsLoading(false);
    handleNewImage(newImageURL);
  };
  return (
    <section className="input-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Prompt"
          className="animate-borderColor"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button className="retryBtn">Generate</Button>
      </form>
    </section>
  );
};

export default InputForm;
