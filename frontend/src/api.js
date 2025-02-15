export async function clipBoardAPI(image_url, prompt = "") {
  if (!image_url) return;
  const {
    result: { image: imageUrl },
  } = await fetch(`https://midy-ai-replace-background-backend.vercel.app/api/convert`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ image_url, prompt }),
  }).then((res) => res.json());

  return imageUrl;
}
