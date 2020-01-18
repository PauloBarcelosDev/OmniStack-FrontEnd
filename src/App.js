import React from 'react';

import './Main.css';
import './global.css';
import './App.css';
import './Sidebar.css';

function App() {
  return (
   <div id="app">
        <aside>
              <strong>Cadastrar</strong>
              <form>
                <div class ="input-block">
                      <label htmlFor="github_username">Usuário do GitHub</label>
                      <input name="github_username" id="github_username" required />
                </div>
                <div class ="input-block">
                      <label htmlFor="techs">Tecnologias</label>
                      <input name="techs" id="techs" required />
                </div>
                <div className="input-group">
                      <div class ="input-block">
                            <label htmlFor="latitude">Latitude</label>
                            <input name="latitude" id="latitude" required />
                      </div>
                      <div class ="input-block">
                            <label htmlFor="longitude">longitude</label>
                            <input name="longitude" id="longitude" required />
                      </div>
                      
                </div>
                <button type="submit">Salvar</button>
              </form>
        </aside>
        <main>
              <ul>
                  <li className="dev-item">
                        <header>
                              <img src="https://avatars1.githubusercontent.com/u/46430156?s=460&v=4" alt="Paulo"/>
                              <div className ="user-info">                                    
                                    <strong> Paulo Barcelos</strong>
                                    <span> ReactJs, React</span>
                              </div>  
                        </header>
                        <p> teste para estilização da aplicação que esta sendo desenvolvida junto com a rocket seat</p>
                        <a href="https://github.com/PauloBarcelosDev">Acessar perfil no Github</a>
                  </li>
                  <li className="dev-item">
                        <header>
                              <img src="https://avatars1.githubusercontent.com/u/46430156?s=460&v=4" alt="Paulo"/>
                              <div className ="user-info">                                    
                                    <strong> Paulo Barcelos</strong>
                                    <span> ReactJs, React</span>
                              </div>  
                        </header>
                        <p> teste para estilização</p>
                        <a href="https://github.com/PauloBarcelosDev">Acessar perfil no Github</a>
                  </li>
                  <li className="dev-item">
                        <header>
                              <img src="https://avatars1.githubusercontent.com/u/46430156?s=460&v=4" alt="Paulo"/>
                              <div className ="user-info">                                    
                                    <strong> Paulo Barcelos</strong>
                                    <span> ReactJs, React</span>
                              </div>  
                        </header>
                        <p> teste para estilização</p>
                        <a href="https://github.com/PauloBarcelosDev">Acessar perfil no Github</a>
                  </li>
                  <li className="dev-item">
                        <header>
                              <img src="https://avatars1.githubusercontent.com/u/46430156?s=460&v=4" alt="Paulo"/>
                              <div className ="user-info">                                    
                                    <strong> Paulo Barcelos</strong>
                                    <span> ReactJs, React</span>
                              </div>  
                        </header>
                        <p> teste para estilização</p>
                        <a href="https://github.com/PauloBarcelosDev">Acessar perfil no Github</a>
                  </li>
                  <li className="dev-item">
                        <header>
                              <img src="https://avatars1.githubusercontent.com/u/46430156?s=460&v=4" alt="Paulo"/>
                              <div className ="user-info">                                    
                                    <strong> Paulo Barcelos</strong>
                                    <span> ReactJs, React</span>
                              </div>  
                        </header>
                        <p> teste para estilização</p>
                        <a href="https://github.com/PauloBarcelosDev">Acessar perfil no Github</a>
                  </li>
            </ul>
        </main>
   </div>
  );
}

export default App;
