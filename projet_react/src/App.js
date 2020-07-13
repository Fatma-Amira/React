import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       <h1>Formulaires</h1>
             <form>
               <fieldset>
                 
                 <div class="form-group">
                   <label for="nom">Entrez votre nom</label>
                   <input type="text" class="form-control" id="nom" placeholder="Pierre GIRAUD"/>
                 </div>
                 
                 <div class="form-group">
                   <label for="email">Entrez votre mail</label>
                   <input type="email" class="form-control" id="email" placeholder="pierre.giraud@edhec.com"/>
                 </div>
                 
                 <div class="form-group">
                   <label for="selection">region</label>
                   <select id="selection" class="form-control">
                     <option value="">Liste de choix...</option>
                     <optgroup label="Ben Arous">
                       <option value="">ezzahra</option>
                       <option value="">megrine</option>
                       <option value="">fouchana</option>
                     </optgroup>
                     <optgroup label="Tunis">
                       <option value="">Ariana</option>
                       <option value="">Ibn sina</option>
                     </optgroup>
                   </select>
                 </div>
                 <div class="form-group">
                   <label for="bio">Biographie</label>
                   <textarea class="form-control" id="bio" rows="3"></textarea>
                 </div>
                 <div class="form-group">
                 <button type="button">Submit</button>
                 </div>
               </fieldset>
             </form>
    </div>
  );
}

export default App;
