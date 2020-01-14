class GitHub{
    constructor(){
        this.client_ID = 'f4463aff3d91072742f2';
        this.client_secret = '0414f5bf17217cf0ee788329fb358a25b2b1edc3';
        this.user = 'KristoLebin';
        this.apiUrl = "https://api.github.com/users";
        this.repos_count = 5;
        this.repos_sort = 'created asc';
    }

    async getUserData(){
        let urlProfile = `${this.apiUrl}${this.user}?client_id=${this.client_ID}&client_secret = ${this.client_secret}`;
        let urlRepos = `${this.apiUrl}${this.user}/repos?per_page=${this.repos_count}&sort${this.repos_sort}&client_id=${this.client_ID}&client_secrets=${this.client_secret}`; 

        const profileResponse = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}


