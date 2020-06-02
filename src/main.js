import api from "./api";

function App() {
  const repositories = [],
    formEl = document.getElementById("repo-form"),
    inputEl = document.querySelector("input[name=repository]"),
    listEl = document.getElementById("repo-list");

  function registerHandlers() {
    formEl.onsubmit = (event) => addRepository(event);
  }

  async function addRepository(event) {
    event.preventDefault();

    const repoInput = inputEl.value;

    if (repoInput.length === 0) return;

    const response = await api.get(`/repos/${repoInput}`);

    console.log(response);

    const {
      name,
      description,
      html_url,
      owner: { avatar_url },
    } = response.data;

    repositories.push({
      name,
      description,
      avatar_url,
      html_url,
    });

    this.inputEl.value = "";

    render();
  }

  function render() {
    listEl.innerHTML = "";

    repositories.forEach((repo) => {
      let imgEl = document.createElement("img"),
        titleEl = document.createElement("strong"),
        descriptionEl = document.createElement("p"),
        linkEl = document.createElement("a"),
        listItemEl = document.createElement("li");

      imgEl.setAttribute("src", repo.avatar_url);
      titleEl.appendChild(document.createTextNode(repo.name));
      descriptionEl.appendChild(document.createTextNode(repo.description));
      linkEl.setAttribute("target", "_blank");
      linkEl.setAttribute("href", repo.html_url);
      linkEl.appendChild(document.createTextNode("Acessar"));

      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      listEl.appendChild(listItemEl);
    });
  }

  registerHandlers();
}

App();
