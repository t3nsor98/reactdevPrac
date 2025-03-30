import React, { useState } from "react";
import dayjs from "dayjs";

const LifeStats = () => {
  const [birthDate, setBirthDate] = useState("");
  const [stats, setStats] = useState(null);

  const calculateStats = (date) => {
    const birth = dayjs(date);
    const today = dayjs();
    const ageInDays = today.diff(birth, "day");
    const ageInYears = today.diff(birth, "year");

    return {
      ageInDays,
      heartBeats: Math.floor(ageInDays * 112500),
      bloodPumped: Math.floor(ageInDays * 86400 * 0.01),
      redBloodCells: ageInDays * 200_000_000_000,
      breaths: ageInDays * 20_000,
      blinks: ageInDays * 21_600,
      sleepDays: Math.floor(ageInDays * (8 / 24)),
      earthOrbitKm: ageInYears * 940_000_000,
      galaxyOrbitKm: ageInYears * 7.65e12,
      moonOrbits: Math.floor(ageInDays / 27.32),
      moonDrift: ageInYears * 3.8,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (birthDate) {
      setStats(calculateStats(birthDate));
    }
  };

  return (
    <div className="p-6 bg-gray-800 text-white max-w-3xl mx-auto rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-green-400 text-center">
        Your Life in Numbers
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <label className="block text-lg font-medium">
          Enter your birthdate:
        </label>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="p-2 text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <button
          type="submit"
          className="p-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition-all"
        >
          Calculate
        </button>
      </form>
      {stats && (
        <div className="mt-8 bg-gray-900 p-6 rounded-lg shadow-lg">
          <p className="text-xl font-semibold text-green-300 text-center">
            You've been alive for{" "}
            <span className="text-green-400">
              {stats.ageInDays.toLocaleString()}
            </span>{" "}
            days!
          </p>
          <ul className="mt-6 space-y-4 text-lg">
            <li>❤️ Heartbeats: {stats.heartBeats.toLocaleString()}</li>
            <li>💨 Breaths: {stats.breaths.toLocaleString()}</li>
            <li>👀 Blinks: {stats.blinks.toLocaleString()}</li>
            <li>
              🩸 Blood Pumped: {stats.bloodPumped.toLocaleString()} liters
            </li>
            <li>🛏️ Days Asleep: {stats.sleepDays.toLocaleString()}</li>
            <li>
              🌍 Distance Traveled Around Sun:{" "}
              {stats.earthOrbitKm.toLocaleString()} km
            </li>
            <li>
              🌌 Distance in Milky Way: {stats.galaxyOrbitKm.toLocaleString()}{" "}
              km
            </li>
            <li>🌕 Moon Orbits: {stats.moonOrbits.toLocaleString()}</li>
            <li>🚀 Moon Drift: {stats.moonDrift.toFixed(1)} cm</li>
          </ul>
          <p className="mt-6 text-gray-400 text-center">
            More changes are happening every second...
          </p>
        </div>
      )}
    </div>
  );
};

export default LifeStats;
