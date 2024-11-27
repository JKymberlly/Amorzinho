    // Seleciona os elementos HTML
    const audio = document.getElementById("audio");
    const playButton = document.getElementById("play");
    const pauseButton = document.getElementById("pause");
    const volumeSlider = document.getElementById("volume");
    const currentTimeDisplay = document.getElementById("currentTime");
    
    // Função para formatar o tempo
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    }
    
    // Adiciona eventos aos botões
    playButton.addEventListener("click", () => {
      audio.play();
    });
    
    pauseButton.addEventListener("click", () => {
      audio.pause();
    });
    
    // Controla o volume
    volumeSlider.addEventListener("input", (e) => {
      audio.volume = e.target.value;
    });
    
    // Atualiza o tempo atual do áudio
    audio.addEventListener("timeupdate", () => {
      currentTimeDisplay.textContent = `Tempo: ${formatTime(audio.currentTime)}`;
    });
    