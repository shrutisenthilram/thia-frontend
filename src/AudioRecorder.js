import React, { useState, forwardRef, useImperativeHandle } from "react";

const AudioRecorder = forwardRef((props, ref) => {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);

  useImperativeHandle(ref, () => ({
    startRecording() {
      console.log("Trying to start recording...");
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
          console.log("Mic access granted!");
          const recorder = new MediaRecorder(stream);

          recorder.ondataavailable = (event) => {
            setAudioChunks((prev) => [...prev, event.data]);
          };

          recorder.start();
          setMediaRecorder(recorder);
        })
        .catch((err) => console.error("Mic access denied:", err));
    },

    stopRecording() {
      if (mediaRecorder) {
        mediaRecorder.onstop = () => {
          console.log("Recording stopped, preparing playback...");
          const blob = new Blob(audioChunks, { type: "audio/wav" });
          const audioURL = URL.createObjectURL(blob);
          const audio = new Audio(audioURL);
          audio.play();
          setAudioChunks([]);
        };
        mediaRecorder.stop();
        setMediaRecorder(null);
      } else {
        console.warn("No active recorder to stop.");
      }
    },
  }));

  return null; // invisible component
});

export default AudioRecorder;
