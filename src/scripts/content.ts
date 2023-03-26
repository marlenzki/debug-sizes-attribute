// chrome.runtime.sendMessage("message time!");
console.log("HELLO?");

// function logToConsole(msg: any): void {
//   console.log(`%c here`, "background-color: yellow;", msg);
// }
const viewportWidth = window.innerWidth;

const reBetweenParantheses = /\(.+?\)/;

const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  if (!!img.srcset) {
    // console.log(
    //   img.src,
    //   img.naturalWidth,
    //   img.naturalHeight,
    //   img.getBoundingClientRect().width,
    //   img.getBoundingClientRect().height
    // );
    const sizes = img.sizes.split(",");
    console.log(sizes);
    sizes.forEach((size) => {
      // console.log(size);
      // const [mediaQuery, predictedWidth] = size.split(" ");
      const mediaQuery = size.match(reBetweenParantheses)?.[0];
      const predictedSize = !!mediaQuery
        ? size.replace(mediaQuery, "").replaceAll(" ", "")
        : size.replaceAll(" ", "");

      console.log(
        `mediaQuery: '${mediaQuery}'`,
        `predictedSize: '${predictedSize}'`
      );
    });
    // logToConsole(sizes);
    // console.log(img.sizes, img.srcset);
  }
});

// let mql = window.matchMedia("(min-width: 200px)");
// mql.addEventListener("change", () => {
//   logToConsole("I MATCH");
// });
// logToConsole(mql.matches);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message, sender, sendResponse);
  sendResponse("COPY THAT");
});
