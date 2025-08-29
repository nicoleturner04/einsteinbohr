document.addEventListener("DOMContentLoaded", function() {
  const articles = document.querySelectorAll("#posts article");

  articles.forEach(article => {
    const title = article.querySelector("h2");
    const content = article.querySelector(".post-content");

    if(content) {
      content.style.display = "none"; // hide by default
      title.style.cursor = "pointer";

      title.addEventListener("click", () => {
        if(content.style.display === "none") {
          content.style.display = "block";
        } else {
          content.style.display = "none";
        }
      });
    }
  });
});
