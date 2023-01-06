import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
// import history from "./helpers/history";
// // import { Header } from "./components/header/Header";
// import { Provider } from "react-redux";
// import store from "./store";
// import Header from "./components/container/Header";
// import ProductComponent from "./components/container/ProductComponent";
// import ProductDetail from "./components/container/ProductDetails";
// import ProductListing from "./components/container/ProductListing";

// const Home = lazy(() => import("./pages/home"));
// const Login = lazy(() => import("./pages/login"));
// const About = lazy(() => import("./pages/about"));
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    // <Router>
    //   <Header />
    //   <Switch>
    //     <Route path="/" exact component={ProductListing} />
    //     <Route path="/product/:productId" exact component={ProductDetail} />
    //     <Route>404</Route>
    //   </Switch>
    // </Router>

    <Router>
      <Header></Header>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:imbID" component={MovieDetail} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
