const init = () => {
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // const input = document.querySelector("input#searchByID");
    const inputValue = e.target.children[1].value;

    fetch(`http://localhost:3000/movies/${inputValue}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const title = document.querySelector("section#movieDetails h4");
        title.innerText = data.title;
        const summary = document.querySelector("section#movieDetails p");
        summary.innerText = data.summary;
      });
    //   .catch((error) => {
    //     console.log("error", error);
    //     const title = document.querySelector("section#movieDetails h4");
    //     title.innerText = "No movie found";
    //     const summary = document.querySelector("section#movieDetails p");
    //     summary.innerText = "";
    //   });
  });
};

document.addEventListener("DOMContentLoaded", init);
