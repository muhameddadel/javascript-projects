let input = document.querySelector(".get-repos input"),
  button = document.querySelector(".get-button"),
  showData = document.querySelector(".show-data");

button.onclick = function () {
  getRepos();
};
function getRepos() {
  if (input.value == "") {
    showData.innerHTML = "<span>Please Write A Github Username</span>";
  } else {
    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then((res) => {
        return res.json();
      })
      .then((repos) => {
        showData.innerHTML = "";
        repos.forEach((repo) => {
          let mainDiv = document.createElement("div");
          let txt = document.createTextNode(repo.name);
          mainDiv.appendChild(txt);

          let repoUrl = document.createElement("a");
          let repoUrltxt = document.createTextNode("Visit");
          repoUrl.appendChild(repoUrltxt);
          repoUrl.href = `htttps://github.com/${input.value}/${repo.name}`;
          repoUrl.setAttribute("target", "_blank");
          mainDiv.appendChild(repoUrl);
          let starsSpan = document.createElement("span");
          let starsTxt = document.createTextNode(
            `Stars ${repo.stargazers_count}`
          );
          starsSpan.appendChild(starsTxt);
          mainDiv.appendChild(starsSpan);

          mainDiv.className = "repo-box";
          showData.appendChild(mainDiv);
        });
      });
  }
}
