import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm.js";

export default function App() {
  return (
    <main>
      <Header />
      <div className="contentCont">
        <Route exact path="/" component={WelcomePage} />
        <Route path="/characters" component={CharacterList} />
        <Route path="/search" component={SearchForm} />
        {/* <CharacterList /> */}
      </div>
    </main>
  );
}
