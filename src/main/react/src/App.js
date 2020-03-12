import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Link, 
  Route,
  Switch
} from "react-router-dom"

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import { get_books } from './api/api'

import Login from './components/Login'
import Home from './components/Home'
import Purchase from './components/Purchase'
import Trade from './components/Trade'
import Auction from './components/Auction'
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
    auctions: []
  }

  handleChange = (event, value) => {
    this.setState({ value });
  }

  componentDidMount() {
    get_books(true).then(books => {
      this.setState({
        purchases: books.transactions[0].purchases,
        trades: books.transactions[1].trades,
        auctions: books.transactions[2].auctions
      })
    })
  }

  render () {
    const { classes } = this.props
    const {
      value,
      trades,
      purchases,
      auctions
    } = this.state
  
    return (
      <div style={{margin: 0}}>
      <Router>
        <Route 
          path="/"
          render={props => props.location.pathname !== '/login' &&
          props.location.pathname !== '/' && <Appbar />
          }
        />
        <Route exact path="/" component={Home} />
        <Route path="/login" 
          component={() => 
            <Login 
              TabPanel={TabPanel}
              handleChange={this.handleChange} 
              value={value}
            />
          } 
        />
        <Route path="/purchase" 
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
      </Router>
      </div>
    )
  }
}

export default withStyles(styles)(App)
