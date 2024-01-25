const perPage = 10;
let page = 1;

function searchImages() {
  const searchInput = document.getElementById("searchInput").value;
  const imageContainer = document.getElementById("imageContainer");
  const showMoreBtn = document.getElementById("showMoreBtn");
  showMoreBtn.style.display = "none";

  const url = `https://api.unsplash.com/search/photos?query=${searchInput}&page=${page}&per_page=${perPage}&client_id=DiTIDRbqryMoWfP-DmYFp_3nXYFNGNxAOc5Qa_Bpa_M`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayImages(data.results);
      if (data.results.length === perPage) {
        showMoreBtn.style.display = "block";
      }
    })
    .catch((error) => console.error("Error fetching images:", error));
}

function displayImages(images) {
  const imageContainer = document.getElementById("imageContainer");

  if (page === 1) {
    imageContainer.innerHTML = "";
  }

  images.forEach((image) => {
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image-item");

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("image-card");

    const imgElement = document.createElement("img");
    imgElement.src = image.urls.small;
    imgElement.alt = image.alt_description;

    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = image.alt_description;
    descriptionElement.classList.add("image-description");

    cardDiv.appendChild(imgElement);
    cardDiv.appendChild(descriptionElement);

    imageDiv.appendChild(cardDiv);
    imageContainer.appendChild(imageDiv);
  });
}

function showMoreImages() {
  page++;
  searchImages();
}

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      page = 1;
      searchImages();
    }
  });
});
