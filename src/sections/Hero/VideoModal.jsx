import { useEffect, useRef, useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";

import "./videoModal.css";

export default function VideoModal({ onClose }) {
  const videoRef = useRef(null);
  const progressRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const format = (sec) => {
      if (!sec || isNaN(sec)) return "0:00";
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return `${m}:${String(s).padStart(2, "0")}`;
    };

    const loaded = () => {
      setDuration(format(video.duration));
      video.play().catch(() => {});
    };

    const update = () => {
      setProgress((video.currentTime / video.duration) * 100 || 0);
      setTime(format(video.currentTime));
    };

    const play = () => setPlaying(true);
    const pause = () => setPlaying(false);

    video.addEventListener("loadedmetadata", loaded);
    video.addEventListener("timeupdate", update);
    video.addEventListener("play", play);
    video.addEventListener("pause", pause);

    const keyboard = (e) => {
      switch (e.code) {
        case "Escape":
          closeModal();
          break;

        case "Space":
          e.preventDefault();
          togglePlay();
          break;

        case "ArrowRight":
          video.currentTime = Math.min(
            video.duration,
            video.currentTime + 5
          );
          break;

        case "ArrowLeft":
          video.currentTime = Math.max(
            0,
            video.currentTime - 5
          );
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", keyboard);

    return () => {
      video.removeEventListener("loadedmetadata", loaded);
      video.removeEventListener("timeupdate", update);
      video.removeEventListener("play", play);
      video.removeEventListener("pause", pause);

      window.removeEventListener("keydown", keyboard);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;

    video.muted = !video.muted;

    setMuted(video.muted);
  };

  const seek = (e) => {
    const rect = progressRef.current.getBoundingClientRect();

    const percent = (e.clientX - rect.left) / rect.width;

    videoRef.current.currentTime =
      percent * videoRef.current.duration;
  };

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    onClose();
  };

  return (
    <div className="video-overlay" onClick={closeModal}>
      <div
        className="video-box"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-btn"
          onClick={closeModal}
        >
          <X size={22} />
        </button>

        <video
          ref={videoRef}
          className="modal-video"
          playsInline
          preload="metadata"
          onClick={togglePlay}
        >
          <source
            src="/videos/hero.mp4"
            type="video/mp4"
          />
        </video>

        <div className="controls">
          <button
            className="control-btn"
            onClick={togglePlay}
          >
            {playing ? (
              <Pause size={20} />
            ) : (
              <Play size={20} />
            )}
          </button>

          <div
            className="progress"
            ref={progressRef}
            onClick={seek}
          >
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="time">
            {time} / {duration}
          </span>

          <button
            className="control-btn"
            onClick={toggleMute}
          >
            {muted ? (
              <VolumeX size={20} />
            ) : (
              <Volume2 size={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}