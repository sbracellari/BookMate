import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  bar: {
   backgroundColor: '#eeedee', 
   borderBottom: '1px solid lightgray', 
   boxShadow: 'none', 
   height: 75, 
   margin: -10,
   width: '102%', 
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
    margin: '10px 0px 0px 15px',
    padding: 10
 },
 toolbar: {
   marginTop: 5
 }
})

class Appbar extends Component {
  render() {
    const { classes } = this.props

    return (
      <AppBar 
        className={classes.bar}
        position="static" 
      >
        <div className={classes.display}>
          <Typography className={classes.header}>
            BookMate
          </Typography>
          <Toolbar className={classes.toolbar}>
            <Button className={classes.btn}>BUY</Button>
            <Button className={classes.btn}>SELL</Button>
            <Button className={classes.btn}>TRADE</Button>
            <Button className={classes.btn}>BID</Button>
            <Button className={classes.btn}>MY LISTINGS</Button>
            <Button className={classes.btn}>LOG OUT</Button>
          </Toolbar>
        </div>
      </AppBar>
    )
  }
}

export default withStyles(styles)(Appbar)