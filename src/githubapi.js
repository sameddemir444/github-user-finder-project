class GithubAPI {
  constructor() {
    this.url = "https://api.github.com/users/";
  }

  async getGithubData(getSearchValue) {
    const userData = await fetch(`${this.url}${getSearchValue}`);
    const responseUser = await userData.json();

    const reposData = await fetch(`${this.url}${getSearchValue}/repos`);
    const responseRepos = await reposData.json();

    const followersData = await fetch(`${this.url}${getSearchValue}/followers`);
    const responseFollowers = await followersData.json();

    return {
      user: responseUser,
      repos: responseRepos,
      followers: responseFollowers,
    };
  }
}
