export const config = {
  api: {
    bodyParser: false,
  },
};

import formidable from "formidable";
import fs from "fs";

export default async function handler(req, res) {
  const form = formidable();

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: "Upload error" });

    const file = files.audio;

    const formData = new FormData();
    formData.append("file", fs.createReadStream(file.filepath));
    formData.append("model", "whisper-large-v3");
    formData.append("response_format", "verbose_json");

    const groqRes = await fetch(
      "https://api.groq.com/openai/v1/audio/transcriptions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: formData,
      }
    );

    const data = await groqRes.json();

    res.status(200).json(data);
  });
}