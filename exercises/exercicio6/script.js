// 1. Web Share API
document.getElementById("btn-partilhar").addEventListener("click", function () {
    var texto = document.getElementById("texto").value;
    navigator.share({ title: "Partilha", text: texto });
});

// 2. Speech Synthesis API
document.getElementById("btn-falar").addEventListener("click", function () {
    var msg = new SpeechSynthesisUtterance(document.getElementById("texto-falar").value);
    msg.lang = "pt-PT";
    speechSynthesis.speak(msg);
});
