export class GithubUser {
    static searchByUsername(username) {
        const endpoint = `https://github.com/${username}`
        
        return fetch(endpoint)
            .then(data => data.json())
            .then(({ login, name, public_repos, followers }) => ({
                login, name, public_repos, followers
            }))
    }
}
