function App() {
  const repositories = [];

  const formEl = document.getElementById("repo-form");

  function registerHandlers() {
    formEl.onsubmit = (event) => addRepository(event);
  }

  function addRepository(event) {
    event.preventDefault();

    repositories.push({
      name: "rocketseat.com.br",
      description: "Tire a sua ideia do papel e dê vida à sua startup.",
      avatar_url: "https://avatars0.githubusercontent.com/u/28929274?v=4",
      html_url: "http://github.com/rocketseat/rocketseat.com.br",
    });

    console.log(repositories);
  }

  registerHandlers();
}

App();
