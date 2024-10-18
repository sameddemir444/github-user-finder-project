class UIApp {
  constructor() {
    this.main = document.querySelector("#main-element");
  }

  renderApp(user, repos, followers) {
    this.main.innerHTML = `
      <!-- a) Searched Users Section  -->
      <section class="py-36">
        <!-- General Container -->
        <div class="container grid grid-cols-1 lg:grid-cols-2 gap-9 md:gap-60 px-3 md:px-0">
          <!-- Left Part  -->
          <div>
            <!-- 1) Profile Details  -->
            <div class="flex flex-col md:flex-row items-center gap-6 mb-10 md:mb-16">
              <!-- Profile IMG  -->
              <img
                src="${user.avatar_url}"
                alt="user-img"
                width="260"
                height="260"
                class="rounded-md"
              />

              <!-- Profile Details  -->
              <div class="flex flex-col">
                <!-- Profile Name  -->
                <p class="text-lg md:text-3xl font-semibold mb-3">${
                  user.name
                }</p>
                <!-- Profile Location  -->
                <div class="flex items-center gap-1">
                  <ion-icon name="location-outline" class="w-5 h-5"></ion-icon>
                  <span class="text-base md:text-lg font-light">${
                    user.location
                  }</span>
                </div>

                <!-- Github Link -->
                <div class="flex items-center gap-1 mb-9">
                  <ion-icon name="link-outline" class="w-5 h-5"></ion-icon>
                  <a href="${
                    user.html_url
                  }" target="_blank" class="text-base md:text-lg font-light text-hover">${
      user.html_url
    }</a>
                </div>

                <!-- Statistical Data -->
                <div class="flex items-center gap-6">
                  <!-- Followers -->
                  <div class="flex flex-col items-center justify-center">
                    <span class="text-xl md:text-2xl font-normal">${
                      user.followers
                    }</span>
                    <p>Followers</p>
                  </div>

                  <!-- Following -->
                  <div class="flex flex-col items-center justify-center border-l border-gray-300 pl-4">
                    <span class="text-xl md:text-2xl font-normal">${
                      user.following
                    }</span>
                    <p>Following</p>
                  </div>

                  <!-- Repos -->
                  <div class="flex flex-col items-center justify-center border-l border-gray-300 pl-4">
                    <span class="text-xl md:text-2xl font-normal">${
                      user.public_repos
                    }</span>
                    <p>Repos</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 2) Repos Details -->
            <h3 class="text-left text-xl md:text-2xl font-medium mb-6">Repositories:</h3>

            <div class="flex items-start flex-col gap-10">
              ${repos
                .map(
                  (repo) => `
                <div class="flex flex-col w-full">
                  <!-- Top Part  -->
                  <div class="mb-6">
                    <!-- Repo Name -->
                    <a href="${
                      repo.html_url
                    }" target="_blank" class="block font-semibold text-base md:text-lg text-alertGreen">${
                    repo.name
                  }</a>

                    <!-- Repo Description -->
                    <span class="text-sm md:text-base">${
                      repo.description || "No description available"
                    }</span>
                  </div>

                  <!-- Bottom Part  -->
                  <div class="flex items-center justify-between">
                    <!-- Language -->
                    <p class="text-sm md:text-base text-hover">${
                      repo.language || "Not specified"
                    }</p>

                    <!-- Last Change  -->
                    <p class="text-hover text-sm md:text-base">Last push: ${new Date(
                      repo.pushed_at
                    ).toLocaleDateString()}</p>
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          </div>

          <!-- Right Part -->
          <div>
            <h3 class="text-left text-xl md:text-2xl font-medium mb-6">Followers:</h3>
            <div class="flex flex-col gap-1 md:gap-8 justify-end">
              ${followers
                .map(
                  (follower) => `
                <div class="flex items-center gap-4 md:gap-5 mb-8">
                  <!-- Left Part -->
                  <a href="${follower.html_url}" target="_blank">
                    <img src="${follower.avatar_url}" alt="${follower.login}" width="65" height="65" class="rounded-full" />
                  </a>

                  <!-- Right Part -->
                  <div class="flex flex-col">
                    <!-- Profile Name  -->
                    <p class="text-base md:text-xl font-medium mb-1">${follower.login}</p>

                    <!-- Github Link -->
                    <div class="flex items-center gap-1">
                      <ion-icon name="link-outline" class="w-5 h-5"></ion-icon>
                      <a href="${follower.html_url}" target="_blank" class="text-sm md:text-xl font-light text-hover">${follower.html_url}</a>
                    </div>
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

// ---------------------------------------------------
