const searchInput = document.querySelector("#searchInput");
const searchForm = document.querySelector("#searchForm");

const uiApp = new UIApp();
const githubAPI = new GithubAPI();

runAddEventListeners();

function runAddEventListeners() {
  searchForm.addEventListener("submit", findUser);
  searchInput.addEventListener("focus", lastSearchs);
}

// --------------------------------------------------
function alertFunction() {
  if (document.querySelector(".alert-message")) return;

  const alertItem = document.createElement("div");
  alertItem.className =
    "alert-message flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 w-96 fixed bottom-10 right-8";
  alertItem.innerHTML = `
  <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">Info alert!</span> Please enter a value to search.
  </div>
  `;

  document.body.appendChild(alertItem);

  setTimeout(() => {
    alertItem.remove();
  }, 3500);
}

// ---------------------------------------------------
function findUser(e) {
  e.preventDefault();

  const getSearchValue = searchInput.value.trim();

  if (getSearchValue === null || getSearchValue === "") {
    alertFunction();
  } else {
    githubAPI.getGithubData(getSearchValue).then((data) => {
      console.log(data.repos, data.user);
      uiApp.renderApp(data.user, data.repos, data.followers);
    });
  }

  searchInput.value = "";
}
// -------------------------------------------------
