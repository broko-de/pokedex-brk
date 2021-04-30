import logo from '../assets/images/pokedex.png';

const Header = () => {
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1>
                    <a href="/">
                        <img src="${logo}" alt="pokedex-brk">
                    </a>
                </h1>
            </div>
            <div class="Header-nav">
                <a href="#/about">
                    About
                </a>
            </div>
        </div>
    `
    return view;
}

export default  Header;