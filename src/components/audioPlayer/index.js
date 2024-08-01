import React from "react";
import "./audioPlayer.css";
import ProgressCircle from "./progressCircle";

export default function AudioPlayer({ currentTrack }) {
  return (
    <div className="player-body">
      <div className="player-left-body">
        <ProgressCircle
          percentage={75}
          isPlaying={true}
          image={currentTrack?.images[0]?.url}
          size={300}
          color="#c96850"
        />
      </div>
    </div>
  );
}
