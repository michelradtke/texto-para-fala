function handleSpeak() {
    const fraseInput = document.getElementById('fraseInput');
    const frase = fraseInput.value.trim();

    if (frase) {
      const utterance = new SpeechSynthesisUtterance(frase);
      window.speechSynthesis.speak(utterance);
    }
  }