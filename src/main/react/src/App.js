import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Link, 
  Route,
  Switch,
  Redirect
} from "react-router-dom"

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import { get_transactions, get_listings, login } from './api/api'

import Login from './components/Login'
import Home from './components/Home'
import Purchase from './components/Purchase'
import Trade from './components/Trade'
import Auction from './components/Auction'
import Listings from './components/Listings'
import Appbar from './components/Appbar'

const styles = () => ({

})

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      aria-labelledby={`simple-tab-${index}`}
      component="div"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

class App extends Component {
  state = {
    value: 0,
    purchases: [],
    trades: [],
    auctions: [],
    listed_purchases: [],
    listed_auctions: [],
    listed_trades: [],
    logged_in: true
  }

  handleChange = (event, value) => {
    this.setState({ value });
  }

  componentDidMount() {
    get_transactions(true).then(books => {
      this.setState({
        purchases: books.transactions[0].purchases,
        trades: books.transactions[1].trades,
        auctions: books.transactions[2].auctions
      })
    })

    get_listings(true).then(listings => {
      this.setState({
        listed_purchases: listings.transactions[0].purchases,
        listed_trades: listings.transactions[1].trades,
        listed_auctions: listings.transactions[2].auctions
      })
    })

  }

  render () {
    const { classes } = this.props
    const {
      value,
      trades,
      purchases,
      auctions,
      listed_auctions,
      listed_trades,
      listed_purchases,
      logged_in
    } = this.state
  
    return (
      <div style={{margin: 0}}>
      <Router>
        <Route 
          render={props => props.location.pathname !== '/' &&
          props.location.pathname !== '/home' && <Appbar />
          }
        />
        <Route path="/home" component={Home} />
        <Route exact path="/" 
          component={() => 
            <Login 
              TabPanel={TabPanel}
              handleChange={this.handleChange} 
              value={value}
            />
          } 
        />
        {logged_in ? (
          <>
          <Route exact path="/purchase"
            component={
              () =>
                <Purchase
                  purchases={purchases}
                />
            } 
          />
          <Route path="/trade" 
            component={
              () =>
                <Trade
                  trades={trades}
                />
            } 
          />
          <Route path="/auction" 
            component={
              () =>
                <Auction
                  auctions={auctions}
                />
              } 
            />
          <Route path="/my-listings" 
            component={
              () =>
                <Listings
                  listed_auctions={listed_auctions}
                  listed_trades={listed_trades}
                  listed_purchases={listed_purchases}
                />
              } 
            />
          </>
          ) : (
          <Redirect to="/" />
          )}
        </Router>
      </div>
    )
  }
}

export default withStyles(styles)(App)
