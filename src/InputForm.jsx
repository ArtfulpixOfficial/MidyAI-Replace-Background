import { Button } from "./Button";
import { useState } from "react";
import { clipBoardAPI } from "./api";
const InputForm = function ({ image, handleNewImage }) {
  const [prompt, setPrompt] = useState("");
  const handleSubmit = async function (e) {
    e.preventDefault();
    const newImageURL = await clipBoardAPI(image, prompt);
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
