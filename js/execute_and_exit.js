/** 어플리케이션을 더블클릭해서 창을 띄우는 기능을 구현하는 js 파일 */
/** 애플리케이션 상단에 있는 X 버튼을 눌러 창을 닫는 기능을 구현하는 js 파일. */

function appExcute(event) {
  let target = event.target.id;
  if (target === "") {
    target = event.target.className;
  }

  if (target === "to-do-list") {
    const quote = document.querySelector("#quote span:first-child");
    const author = document.querySelector("#quote span:last-child");

    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quote.innerText = `"${todaysQuote.quote}"`;
    author.innerText = `- ${todaysQuote.author} -`;
  }

  const app = document.querySelector(`.application.${target}`);

  app.style.opacity = 100;
  app.style.visibility = "visible";
}

function appKill(event) {
  const target = event.target.className;
  const app = document.querySelector(`.application.${target}`);

  app.style.opacity = 0;
  app.style.visibility = "hidden";
}

function nomadLetsgo() {
  window.open("https://nomadcoders.co/", "_blank");
}
