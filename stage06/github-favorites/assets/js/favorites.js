export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        

        this.load()
    }

    load() {
        this.entries = [
            {
                login: 'soukaigiwar',
                name: 'Sergio Mello',
                public_repos: '88',
                followers: '15'
            },
            {
                login: 'maykbrito',
                name: 'Mayk Brito',
                public_repos: '34',
                followers: '15909'
            }
        ]
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


