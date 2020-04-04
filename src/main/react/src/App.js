import React, { Component } from 'react'

import Appbar from './components/Appbar'
import Auction from './components/Auction'
import Box from '@material-ui/core/Box'
import Home from './components/Home'
import Listings from './components/Listings'
import Login from './components/Login'
import Purchase from './components/Purchase'
import Trade from './components/Trade'
import Typography from '@material-ui/core/Typography'

import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'

import { get_listings } from './api/api'
import { get_transactions } from './api/api'
import { login } from './api/api'
import { make_bid } from './api/api'
import { purchase_book } from './api/api'
import { register } from './api/api'
import { remove_auction } from './api/api'
import { remove_purchase } from './api/api'
import { remove_trade } from './api/api'
import { trade_book } from './api/api'

import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  root: {
    margin: 0,
  },
})

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      aria-labelledby={`simple-tab-${index}`}
      component='div'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role='tabpanel'
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  )
}

class App extends Component {
  state = {
    auctions: [],
    bid: 0,
    bid_err: false,
    email: '',
    first_name: '',
    last_name: '',
    list_err: false,
    listed_auctions: [],
    listed_purchases: [],
    listed_trades: [],
    logged_in: false,
    login_err: false,
    password: '',
    purchase_err: false,
    purchases: [],
    register_err: false,
    removeSnackbar: false,
    remove_err: false,
    snackbar: false,
    trade_err: false,
    trades: [],
    value: 0
  }

  componentDidMount() {
    get_transactions().then((books) => {
      this.setState({
        auctions: books.auctions,
        purchases: books.purchases,
        trades: books.trades
      })
    })
  }

  handleBid = event => {
    this.setState({ bid: event.target.value })
  }

  handleChange = (event, value) => {
    this.setState({ value: value })
  }

  handleEmail = event => {
    this.setState({ email: event.target.value })
  }

  handleFirstName = event => {
    this.setState({ first_name: event.target.value })
  }

  handleLastName = event => {
    this.setState({ last_name: event.target.value })
  }

  handlePass = event => {
    this.setState({ password: event.target.value })
  }

  handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    this.setState({ 
      removeSnackbar: false,
      snackbar: false
    })
  }

  onAuctionRemove = (k) => {
    remove_auction(this.state.listed_auctions[k].id).then((data) => {
      this.setState({
        removeSnackbar: true,
        remove_err: !data
      })
    })
  }

  onBid = (i) => {
    make_bid(this.state.auctions[i].id, this.state.bid).then((data) => {
      this.setState({
        bid_err: !data,
        snackbar: true,
      })
    })
  }

  onListings = () => {
    get_listings().then((listings) => {
      this.setState({
        listed_auctions: listings.auctions,
        listed_purchases: listings.purchases,
        listed_trades: listings.trades
      })

      if (
        this.state.listed_auctions.length === 0 &&
        this.state.listed_purchases.length === 0 &&
        this.state.listed_trades.length === 0
      ) {
        this.setState({ list_err: true })
      }
    })
  }

  onLogin = () => {
    login(this.state.email).then((data) => {
      let password = data.password
      let token = data.token

      if (this.state.password === password) {
        this.setState({
          logged_in: true,
          login_err: false
        })

        localStorage.setItem('token', token)

      } else {
        this.setState({ login_err: true })
      }
    })
  }

  onLogout = () => {
    this.setState({
      logged_in: false,
      login_err: false,
    })

    localStorage.removeItem('token')
  }

  onPurchase = (i) => {
    purchase_book(this.state.purchases[i].id).then((data) => {
      this.setState({
        purchase_err: !data,
        snackbar: true,
      })
    })
  }

  onPurchaseRemove = (i) => {
    remove_purchase(this.state.listed_purchases[i].id).then((data) => {
      this.setState({
        removeSnackbar: true,
        remove_err: !data
      })
    })
  }

  onRegister = () => {
    register(
      this.state.email,
      this.state.password,
      this.state.first_name,
      this.state.last_name
    ).then((data) => {
      let token = data.token

      if (token === null) {
        this.setState({
          logged_in: false,
          register_err: true
        })
        return
      }

      this.setState({
        logged_in: true,
        register_err: false
      })

      localStorage.setItem('token', token)
    })
  }

  onTrade = (i) => {
    trade_book(this.state.trades[i].id).then((data) => {
      this.setState({
        snackbar: true,
        trade_err: !data
      })
    })
  }
  
  onTradeRemove = (j) => {
    remove_trade(this.state.listed_trades[j].id).then((data) => {
      this.setState({
        removeSnackbar: true,
        remove_err: !data
      })
    })
  }

  render() {
    const { classes } = this.props
    const {
      auctions,
      bid,
      bid_err,
      email,
      first_name,
      last_name,
      list_err,
      listed_auctions,
      listed_purchases,
      listed_trades,
      logged_in,
      login_err,
      password,
      purchase_err,
      purchases,
      register_err,
      removeSnackbar,
      remove_err,
      snackbar,
      trade_err,
      trades,
      value
    } = this.state

    return (
      <div className={classes.root}>
        <Router>
          <Route
            render={(props) =>
              (props.location.pathname === '/purchase' ||
                props.location.pathname === '/trade' ||
                props.location.pathname === '/auction' ||
                props.location.pathname === '/my-listings') && (
                <Appbar onLogout={this.onLogout} onListings={this.onListings} />
              )
            }
          />
          <Switch>
            <Route
              exact
              path='/'
              render={() => (
                <Login
                  email={email}
                  first_name={first_name}
                  handleChange={this.handleChange}
                  handleEmail={this.handleEmail}
                  handleFirstName={this.handleFirstName}
                  handleLastName={this.handleLastName}
                  handlePass={this.handlePass}
                  last_name={last_name}
                  logged_in={logged_in}
                  login_err={login_err}
                  onLogin={this.onLogin}
                  onRegister={this.onRegister}
                  password={password}
                  register_err={register_err}
                  TabPanel={TabPanel}
                  value={value}
                />
              )}
            />
            <Route
              exact
              path='/home'
              render={() => (
                <Home
                  logged_in={logged_in}
                  onListings={this.onListings}
                  onLogout={this.onLogout}
                />
              )}
            />
            <Route
              exact
              path='/purchase'
              render={() => (
                <Purchase
                  handleSnackbarClose={this.handleSnackbarClose}
                  logged_in={logged_in}
                  onPurchase={this.onPurchase}
                  purchase_err={purchase_err}
                  purchases={purchases}
                  snackbar={snackbar}
                />
              )}
            />
            <Route
              exact
              path='/trade'
              render={() => (
                <Trade
                  handleSnackbarClose={this.handleSnackbarClose}
                  logged_in={logged_in}
                  onTrade={this.onTrade}
                  snackbar={snackbar}
                  trade_err={trade_err}
                  trades={trades}
                />
              )}
            />
            <Route
              exact
              path='/auction'
              render={() => (
                <Auction
                  auctions={auctions}
                  bid={bid}
                  bid_err={bid_err}
                  handleBid={this.handleBid}
                  handleSnackbarClose={this.handleSnackbarClose}
                  logged_in={logged_in}
                  onBid={this.onBid}
                  snackbar={snackbar}
                />
              )}
            />
            <Route
              exact
              path='/my-listings'
              render={() => (
                <Listings
                  handleSnackbarClose={this.handleSnackbarClose}
                  list_err={list_err}
                  listed_auctions={listed_auctions}
                  listed_purchases={listed_purchases}
                  listed_trades={listed_trades}
                  logged_in={logged_in}
                  onAuctionRemove={this.onAuctionRemove}
                  onListings={this.onListings}
                  onPurchaseRemove={this.onPurchaseRemove}
                  onTradeRemove={this.onTradeRemove}
                  removeSnackbar={removeSnackbar}
                  remove_err={remove_err}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default withStyles(styles)(App)
