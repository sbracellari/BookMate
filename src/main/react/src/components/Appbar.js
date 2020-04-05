import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  bar: {
    backgroundColor: '#eeedee',
    borderBottom: '1px solid lightgray',
    boxShadow: 'none',
    height: 75,
    margin: -10,
    width: '102%'
  },
  btn: {
    padding: '0px 10px 0px 10px'
  },
  display: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  header: {
    color: 'black',
    fontFamily: 'Special Elite',
    fontSize: 25,
    padding: '15px 10px 10px 10px'
  },
  home: {
    '&:hover': {
      backgroundColor: 'transparent'
    },
    textTransform: 'none'
  },
  toolbar: {
    marginTop: 5
  }
})

class Appbar extends Component {
  render() {
    const { 
      classes, 
      onListings,
      onLogout
    } = this.props

    return (
      <AppBar 
        className={classes.bar} 
        position='static'
      >
        <div className={classes.display}>
          <Button 
            className={classes.home} 
            component={Link} 
            to='/'
          >
            <Typography className={classes.header}>BookMate</Typography>
          </Button>
          <Toolbar className={classes.toolbar}>
            <Button 
              className={classes.btn} 
              component={Link} 
              to='/purchase'
            >
              BUY
            </Button>
            <Button 
              className={classes.btn} 
              component={Link} 
              to='/trade'
            >
              TRADE
            </Button>
            <Button 
              className={classes.btn} 
              component={Link} 
              to='/auction'
            >
              BID
            </Button>
            <Button
              className={classes.btn}
              component={Link}
              onClick={onListings}
              to='/my-listings'
            >
              MY LISTINGS
            </Button>
            <Button
              className={classes.btn}
              component={Link}
              onClick={onLogout}
              to='/'
            >
              LOG OUT
            </Button>
          </Toolbar>
        </div>
      </AppBar>
    )
  }
}

export default withStyles(styles)(Appbar)
