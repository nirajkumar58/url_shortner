import React, { useState } from "react";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = () => {
    if (!longUrl) {
      alert("Please enter a URL.");
      return;
    }

    const fakeShort = "https://short.ly/" + Math.random().toString(36).substring(6);
    setShortUrl(fakeShort);
  };

  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col justify-center items-center text-white px-4">
      <h1 className="text-3xl font-semibold mb-6">URL Shortener</h1>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
        <input
          type="text"
          placeholder="Enter your long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="w-80 px-4 py-2 bg-gray-800 border border-gray-600 rounded sm:rounded-l-md sm:rounded-r-none focus:outline-none"
        />
        <button
          onClick={handleShorten}
          className="px-4 py-2 bg-green-500 text-white rounded sm:rounded-r-md sm:rounded-l-none hover:bg-green-600 transition"
        >
          Shorten
        </button>
      </div>
      {shortUrl && (
        <p className="mt-4 text-blue-400">
          Short URL:{" "}
          <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="underline">
            {shortUrl}
          </a>
        </p>
      )}
    </div>
  );
}

export default App;
