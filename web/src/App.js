// Packages
import React from 'react';

// Styles
import './styles/global.css';
import './styles/App.css';
import './styles/sidebar.css';
import './styles/main.css';

function App() {
    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <form>
                    <div className="input-block">
                        <label htmlFor="github_username">Usuário</label>
                        <input name="github_username" id="github_username"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="techs">Tecnologias</label>
                        <input name="techs" id="techs"/>
                    </div>

                    <div className="input-group">
                        <div className="input-block">
                            <label htmlFor="latitude">Latitude</label>
                            <input name="latitude" id="latitude"/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="longitude">Longitude</label>
                            <input name="longitude" id="longitude"/>
                        </div>
                    </div>
                    <button type="submit">
                        Salvar
                    </button>
                </form>
            </aside>
            <main>
                <ul>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/28576727?s=460&v=4" alt="André Figueira"/>
                            <div className="user-info">
                                <strong>André Figueira</strong>
                                <span>ReactJS, React Native, Node.js</span>
                            </div>
                        </header>
                        <p>Full-Stack Web Developer</p>
                        <a href="https://github.com/andrefigueira93" target="_blank">Acessar Perfil no Github</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/28576727?s=460&v=4" alt="André Figueira"/>
                            <div className="user-info">
                                <strong>André Figueira</strong>
                                <span>ReactJS, React Native, Node.js</span>
                            </div>
                        </header>
                        <p>Full-Stack Web Developer</p>
                        <a href="https://github.com/andrefigueira93" target="_blank">Acessar Perfil no Github</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/28576727?s=460&v=4" alt="André Figueira"/>
                            <div className="user-info">
                                <strong>André Figueira</strong>
                                <span>ReactJS, React Native, Node.js</span>
                            </div>
                        </header>
                        <p>Full-Stack Web Developer</p>
                        <a href="https://github.com/andrefigueira93" target="_blank">Acessar Perfil no Github</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/28576727?s=460&v=4" alt="André Figueira"/>
                            <div className="user-info">
                                <strong>André Figueira</strong>
                                <span>ReactJS, React Native, Node.js</span>
                            </div>
                        </header>
                        <p>Full-Stack Web Developer</p>
                        <a href="https://github.com/andrefigueira93" target="_blank">Acessar Perfil no Github</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/28576727?s=460&v=4" alt="André Figueira"/>
                            <div className="user-info">
                                <strong>André Figueira</strong>
                                <span>ReactJS, React Native, Node.js</span>
                            </div>
                        </header>
                        <p>Full-Stack Web Developer</p>
                        <a href="https://github.com/andrefigueira93" target="_blank">Acessar Perfil no Github</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/28576727?s=460&v=4" alt="André Figueira"/>
                            <div className="user-info">
                                <strong>André Figueira</strong>
                                <span>ReactJS, React Native, Node.js</span>
                            </div>
                        </header>
                        <p>Full-Stack Web Developer</p>
                        <a href="https://github.com/andrefigueira93" target="_blank">Acessar Perfil no Github</a>
                    </li>
                </ul>
            </main>
        </div>
    );
}

export default App;
