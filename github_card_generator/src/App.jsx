import { useState } from "react";
import domtoimage from "dom-to-image";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  // Fetch GitHub user data
  const fetchGitHubUser = async () => {
    setError("");
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("User not found");
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
      setUserData(null);
    }
  };

  // Download the GitHub card as a PNG
  const downloadCard = () => {
    const cardElement = document.getElementById("github-card");
    if (cardElement) {
      domtoimage
        .toPng(cardElement, {
          quality: 0.95,
          width: 500,
          height: 500,
          filter: (node) => node.id !== "download-button",
          imageSmoothingEnabled: true,
          imageSmoothingQuality: "high",
        })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = `${username}_github_card.png`;
          link.href = dataUrl;
          link.click();
        })
        .catch((error) => console.error("Error generating image:", error))
        .finally(() => {
          console.log("Image generation completed");
        });
    }
  };

  // Render the GitHub card
  const GitHubCard = () => (
    <div
      id="github-card"
      className="mt-8 p-6 bg-gray-800 rounded-lg shadow-lg text-center w-full max-w-md transform transition duration-500 hover:scale-105"
    >
      <img
        src={userData.avatar_url}
        alt={`${userData.name}'s avatar`}
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-500"
      />
      <h2 className="text-2xl font-bold">{userData.name || "No Name"}</h2>
      <p className="text-gray-400">@{userData.login}</p>
      <p className="mt-2">{userData.bio || "No bio available"}</p>
      <div className="mt-4 flex justify-around text-sm">
        <Stat label="Repositories" value={userData.public_repos} />
        <Stat label="Followers" value={userData.followers} />
        <Stat label="Following" value={userData.following} />
      </div>
      <div className="mt-6">
        <Info label="Location" value={userData.location} />
        <Info
          label="Blog"
          value={
            userData.blog ? (
              <a
                href={userData.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                {userData.blog}
              </a>
            ) : (
              "Not available"
            )
          }
        />
        <Info
          label="Twitter"
          value={
            userData.twitter_username ? (
              <a
                href={`https://twitter.com/${userData.twitter_username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                @{userData.twitter_username}
              </a>
            ) : (
              "Not available"
            )
          }
        />
      </div>
      <button
        id="download-button"
        onClick={downloadCard}
        className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition"
      >
        Download Card
      </button>
    </div>
  );

  // Reusable component for stats
  const Stat = ({ label, value }) => (
    <div>
      <p className="font-bold">{value}</p>
      <p className="text-gray-400">{label}</p>
    </div>
  );

  // Reusable component for info
  const Info = ({ label, value }) => (
    <p className="text-sm text-gray-400">
      {label}: <span className="text-white">{value || "Not available"}</span>
    </p>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6 animate-bounce">
        GitHub Card Generator
      </h1>
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
        />
        <button
          onClick={fetchGitHubUser}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg transition"
        >
          Generate Card
        </button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {userData && <GitHubCard />}
    </div>
  );
}

export default App;
