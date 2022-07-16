//GIPHY
document.addEventListener("DOMContentLoaded", giphyInit);

function giphyInit() {
  const btnSearch = document.querySelector(".btnSearch");
  btnSearch.addEventListener("click", (ev) => {
    ev.preventDefault(); // to stop the page reload
    let numGif = document.querySelector(".num").value;
    console.log("num:" + numGif);

    let url = `http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=FtR8NF0BZTC8WREmYfUfvQYzxO8uGHBA&limit=${numGif}&q=`;

    let searchInput = document.querySelector(".search").value.trim();

    url = url.concat(searchInput); // concat whatever they tayped inside the form
    console.log(url);
    fetch(url)
      .then((response) => response.json()) //gets the response the second then it handle the data
      .then((giphy) => {
        console.log(giphy.meta);
        console.log(giphy.data);
        if (searchInput.value == "") {
          const errorm = document.getElementById("error-m");
          errorm.innerText = "error type a Gif name first";
          console.log(errorm);
        } else {
          giphy.data.forEach((gif) => {
            const giphyUrl = gif.images.downsized.url;
            console.log(giphyUrl);
            let img = document.createElement("img");
            img.src = giphyUrl;
            img.style =
              "width:250px;height:200px;border-radius: 8px;box-shadow: 0px 0px 10px white;margin-top:40px;";
            let outImage = document.querySelector(".out-img");
            img.src = giphyUrl;

            outImage.insertAdjacentElement("afterbegin", img); // I used this instead of appendchild so that evrytime I type a gif name it comes at the top rather than scrolling down to see it
            document.querySelector(".search").value = "";
            document.querySelector(".num").value = "";
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  });
}
