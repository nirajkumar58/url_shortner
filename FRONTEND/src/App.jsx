import React, { useState } from "react";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleShorten = async () => {
    if (!longUrl) {
      setError("Please enter a URL.");
      return;
    }

    setLoading(true);
    setError("");
    
    try {
      const response = await fetch("http://localhost:3000/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: longUrl }),
      });

      if (!response.ok) {
        throw new Error("Failed to shorten URL");
      }

      const data = await response.json();
      setShortUrl(data.shortUrl);
    } catch (err) {
      setError(err.message || "An error occurred while shortening the URL");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleShorten();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col justify-center items-center text-white px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-purple-500 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-500 opacity-10 blur-3xl"></div>
      </div>
      
      {/* Main content - Centered container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center justify-center">
        {/* Header */}
        <div className="mb-8 w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            ✂️ URLify
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            Transform your long URLs into powerful short links
          </p>
          <p className="text-gray-400">
            Fast • Secure • Analytics Ready
          </p>
        </div>

        {/* URL Shortener Form */}
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6 items-center justify-center">
            <div className="flex-1 w-full max-w-2xl relative">
              <input
                type="text"
                placeholder="Paste your long URL here..."
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-gray-300 text-lg backdrop-blur-sm transition-all duration-300"
              />
              {longUrl && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
            <button
              onClick={handleShorten}
              disabled={loading || !longUrl}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:hover:scale-100 whitespace-nowrap"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Shortening...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span>⚡</span>
                  Shorten URL
                </div>
              )}
            </button>
          </div>

          {/* Error Display */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-300 backdrop-blur-sm w-full">
              <div className="flex items-center justify-center gap-2">
                <span>❌</span>
                {error}
              </div>
            </div>
          )}

          {/* Success Display */}
          {shortUrl && (
            <div className="p-6 bg-green-500/20 border border-green-500/50 rounded-xl backdrop-blur-sm w-full">
              <div className="text-green-300 mb-3 font-semibold text-center">
                ✅ Your URL has been shortened successfully!
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                <div className="flex-1 max-w-md p-3 bg-black/30 rounded-lg border border-white/20">
                  <a 
                    href={shortUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-300 hover:text-blue-200 transition-colors duration-200 break-all text-center block"
                  >
                    {shortUrl}
                  </a>
                </div>
                <button
                  onClick={handleCopy}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <span>✓</span>
                      Copied!
                    </>
                  ) : (
                    <>
                      <span>📋</span>
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

     

        {/* Footer */}
        <div className="text-gray-400 text-sm text-center">
          Made with ❤️ 
        </div>
      </div>
    </div>
  );
}

export default App;
