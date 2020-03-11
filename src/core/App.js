import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import ChapterListQuery from "../chapters/ChapterListQuery";
import JQListQuery from "../chapters/JQListQuery";
//import FootballListQuery from "./chapters/FootballListQuery";
import chapterResolvers from "../chapters/resolvers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../Nav";
import "./App.css";
import { Home } from "./Home";
import BatmanEpisodes from "../chapters/Btas/BatmanEpisodes";
import { BtasSection } from "../chapters/Btas/BtasSection";

const client = new ApolloClient({
  clientState: chapterResolvers
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Router>
            <div>
              <Nav />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/btas/rater" component={ChapterListQuery} />
                <Route exact path="/btas/section" component={BtasSection} />
                <Route exact path="/jq" component={JQListQuery} />
                <Route exact path="/btas/episodes" component={BatmanEpisodes} />
              </Switch>
            </div>
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
