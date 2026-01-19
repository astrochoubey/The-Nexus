const API_KEY = "sKUX2KPZCcQTdfgQikLa8AODxSQHol3gNXoVpz1f
"; // or DEMO_KEY
const url = `https://api.nasa.gov/planetary/apod?api_key=${sKUX2KPZCcQTdfgQikLa8AODxSQHol3gNXoVpz1f
}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    document.getElementById("apod-title").textContent = data.title;
    document.getElementById("apod-desc").textContent = data.explanation;

    const img = document.getElementById("apod-img");
    const video = document.getElementById("apod-video");

    if (data.media_type === "image") {
      img.src = data.url;
      img.style.display = "block";
      video.style.display = "none";
    } else if (data.media_type === "video") {
      video.src = data.url;
      video.style.display = "block";
      img.style.display = "none";
    }
  })
  .catch(err => console.error(err));



  const counterEl = document.getElementById("counter");
  cosnt incBtn = document.getElementById("inc-btn");
  const decBtn = document.getElementById("dec-btn");