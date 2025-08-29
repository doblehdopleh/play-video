// Ganti dengan link Adsterra kamu
const adLink = "https://participatechronic.com/jurdr5sk?key=d21a6d1ce0ea1cac5e273c7672f25cfa";

// Fungsi redirect
function goToAd() {
  window.open(adLink, "_blank");
}

document.addEventListener("DOMContentLoaded", function() {
  const agePopup = document.getElementById("agePopup");
  const fakeVideo = document.querySelector(".video-wrapper img");

  // Tombol popup
  document.getElementById("yesBtn").addEventListener("click", function() {
    agePopup.style.display = "none";       // popup hilang
    fakeVideo.classList.remove("blurred"); // hilangkan blur
    goToAd();                              // langsung buka Adsterra
  });

  document.getElementById("noBtn").addEventListener("click", function() {
    goToAd(); // kalau pilih Tidak juga buka Adsterra
  });

  // Semua klik diarahkan ke Adsterra
  document.getElementById("videoBox").addEventListener("click", goToAd);
  document.getElementById("watchBtn").addEventListener("click", goToAd);
  document.getElementById("downloadBtn").addEventListener("click", goToAd);
});
