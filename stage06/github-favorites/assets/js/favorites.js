import { GithubUser } from "./github-user.js"

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        

        this.load()

        GithubUser.search('soukaigiwar')
            .then(user => console.log(user))
    }

    load() {
        this.entries = JSON.parse(
            localStorage.getItem('@github-favorites:')) || []
    }

    delete(user) {
        const filteredEntries = this.entries.filter(entry =>
            entry.login !== user.login
        )
        
        this.entries = filteredEntries
        this.update();
    }
}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()
    }

    update() {
        this.removeAllTr()

        this.entries.forEach( user => {
            const tr = this.createTr()

            tr.querySelector('.user img').src = `https://github.com/${user.login}.png`
            tr.querySelector('.user img').alt = `Imagem do perfil de ${user.name}.`
            tr.querySelector('.user a').href = `https://github.com/${user.login}`
            tr.querySelector('.user p').textContent = `${user.name}`
            tr.querySelector('.user span').textContent = `${user.login}`
            tr.querySelector('.repositories').textContent = `${user.public_repos}`
            tr.querySelector('.followers').textContent = `${user.followers}`

            tr.querySelector('.remove').onclick = () => {
                const isOk = confirm("Tem certeza que deseja excluir essa linha?")

                if (isOk) {
                    this.delete(user)
                }
            }

            this.tbody.append(tr)
        })
    }
    
    createTr() {
        const tr = document.createElement('tr')
            
        tr.innerHTML = `
                    <td class="user">
                        <img src="" alt="">
                        <a href="" target="_blank">
                            <p></p>
                            <span></span>
                        </a>
                    </td>
                    <td class="repositories"></td>
                    <td class="followers"></td>
                    <td>
                        <button class="remove">
                            &times;
                        </button>
                    </td>
        `

        return tr
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr')
            .forEach((tr) => {
                tr.remove()
        })
    }

}


