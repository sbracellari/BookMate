import React, { Component } from 'react'

import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  btn: {
    maxWidth: 100,
    marginLeft: 20,
    textAlign: 'center'
  },
  btns: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    marginTop: 200
  },
  header: {
    alignContent: 'center',
    display: 'flex',
    fontFamily: 'Special Elite',
    fontSize: 25,
    justifyContent: 'center',
    marginBottom: 20,
    padding: 10
  },
  img: {
    backgroundImage: 'url(' + require('../img/home.jpg') + ')',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    margin: -10
  },
  paper: {
    alignContent: 'center',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    display: 'grid',
    height: '100%',
    justifyContent: 'center',
    marginLeft: 100,
    maxWidth: 300,
    minWidth: 200
    }
})

class Home extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.img}>
        <Paper className={classes.paper}>
          <div className={classes.content}>
            <div>
              <Typography className={classes.header}>BookMate</Typography>
            </div>
            <div className={classes.btns}>
              <Button 
                className={classes.btn}
                component={Link}
                to="/purchase"
              >
                BUY
              </Button>
              <Button 
                className={classes.btn}
                component={Link}
                to="/trade"
              >
                TRADE
              </Button>
              <Button 
                className={classes.btn}
                component={Link}
                to="/auction"
              >
                BID
              </Button>
              <Button 
                className={classes.btn}
                component={Link}
                to="/my-listings"
              >
                MY LISTINGS
              </Button>
              <Button 
                className={classes.btn}   
                component={Link}
                to="/login"           
              >
                LOG OUT
              </Button>
            </div>
          </div>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Home)