import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './components/Orders';
import LocationHeader from './components/LocationHeader';
import Footer from './components/Footer';
import Top from './components/Top';

const promise = loadStripe('pk_test_51HtdUQIYEeNurv9nkGw6VkJtp8D79yAVKZGpeFQmVAacIZtNGnDo4u2YbvgleWyGUcMgzeJmnQo78MXi5ZvRSDuP00m3AZ0HNj')

function App() {
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app" id="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <LocationHeader />
            <Checkout />
            <Top />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <LocationHeader />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Top />
            <Footer />
          </Route>
          <Route path="/orders">
            <Header />
            <LocationHeader />
            <Orders />
            <Top />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <LocationHeader />
            <Home />
            <Top />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
