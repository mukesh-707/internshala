import { useState } from "react";

export default function PromptSection({ initialPrompt }: { initialPrompt: string }) {
  const [prompt, setPrompt] = useState(initialPrompt);

  const handleSave = async () => {
    // Auto-save logic here
  };

  return (
    <textarea
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      onBlur={handleSave}
      className="w-full h-40 border p-2"
    />
  );
}
