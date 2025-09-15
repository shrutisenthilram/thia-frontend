// src/api/pseudobackend.js
// Placeholder "pseudo backend" functions to simulate audio pipeline

export async function convertSpeechToText(audioFile) {
    return { text: "🎤 Pseudo STT: 'Hello, how are you?'" };
  }
  
  export async function getLLMResponse(message) {
    return { text: "🤖 Pseudo LLM: I'm doing great, thanks for asking!" };
  }
  
  export async function convertTextToSpeech(text) {
    // This should eventually return an audio file URL from backend
    return { audioUrl: "/pseudo-response.mp3" }; // Put a sample audio file in public/
  }
  