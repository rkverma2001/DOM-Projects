document.getElementById("btn").addEventListener("click", clickHandler);
const para = document.querySelector(".text");
function clickHandler() {
  // Fetch the Joke
  let joke = "";
  para.innerText = "Updating...";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.api-ninjas.com/v1/dadjokes?limit=1");
  xhr.setRequestHeader("X-Api-Key", "+/PRiEs74O1Hm16k+WW/EQ==jCuyFKf4T9rbPHOt");
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      const result = JSON.parse(xhr.responseText);
      joke = result[0].joke;
      para.innerText = joke;
    }
  };
}

function shareOnTwitter() {
  var message = encodeURIComponent(para.innerText);
  var url = "https://twitter.com/intent/tweet?text=" + message;
  window.open(url, "_blank");
}

var shareButton = document.getElementById("share-button");
shareButton.addEventListener("click", shareOnTwitter);
