import React, { useState } from "react";
import {
  convertSpeechToText,
  getLLMResponse,
  convertTextToSpeech,
} from "./api/pseudobackend";

function VoiceTest() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);

  async function handleRecord() {
    if (isRecording) {
      setIsRecording(false);

      const sttResult = await convertSpeechToText("pseudo-audio.wav");
      const llmResponse = await getLLMResponse(sttResult.text);
      const ttsResult = await convertTextToSpeech(llmResponse.text);

      setAudioUrl(ttsResult.audioUrl);
    } else {
      setIsRecording(true);
    }
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-xl text-center">
      <h1 className="text-xl font-bold mb-4">Voice Assistant Test</h1>

      <button
        onClick={handleRecord}
        className={`px-6 py-3 rounded-md text-white font-semibold ${
          isRecording ? "bg-red-500" : "bg-blue-500"
        }`}
      >
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>

      {audioUrl && (
        <div className="mt-6">
          <p className="mb-2">Assistant's Response:</p>
          <audio controls src={audioUrl}></audio>
        </div>
      )}
    </div>
  );
}

export default VoiceTest;
