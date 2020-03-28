import React, { Component } from 'react'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import MailOutlinedIcon from '@material-ui/icons/MailOutlined'
import Paper from '@material-ui/core/Paper'
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = () => ({
  bottom: {
    display: 'flex'
  },
  btn: {
    textTransform: 'none'
  },
  btns: {
    float: 'right',
    textTransform: 'none'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '0px 10px'
  },
  content: {
    marginTop: 100
  },
  header: {
    alignContent: 'center',
    display: 'flex',
    fontFamily: 'Special Elite',
    fontSize: 25,
    justifyContent: 'center',
    padding: 10
  },
  icon: {
    marginTop: 2,
    paddingRight: 10
  },
  img: {
    backgroundImage: 'url(' + require('../img/login.jpg') + ')',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    margin: -10
  },
  indicator: {
    backgroundColor: 'black'
  },
  paper: {
    alignContent: 'center',
    backgroundColor: '#5c638540',
    display: 'grid',
    height: '100%',
    marginLeft: 100,
    minWidth: 150,
    width: 350
  }, 
  text: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 30,
    paddingBottom: 20
  },
  top: {
    display: 'flex',
    paddingBottom: 20
  }
})

class Login extends Component {
  render () {
    const { 
      classes, 
      handleChange, 
      TabPanel,
      value 
    } = this.props

  return (
    <div className={classes.img}>
      <Paper className={classes.paper}>
        <div className={classes.content}>
          <div>
            <Typography className={classes.header}>BookMate</Typography>
          </div>
          <div className={classes.container}>
            <div>
              <Tabs
                centered="true"
                classes={{
                  indicator: classes.indicator
                }}
                onChange={handleChange}
                textColor="inherit"
                value={value}
              >
                <Tab 
                  classes={{
                    root: classes.btn
                  }} 
                  label="login" 
                />
                <Tab 
                  classes={{
                    root: classes.btn
                  }}
                  label="register" 
                 />
              </Tabs>
              <TabPanel value={value} index={0}>
                <div>
                  <form className={classes.text} noValidate autoComplete="off">
                    <div className={classes.top}>
                      <div className={classes.icon}><MailOutlinedIcon /></div> 
                      <TextField placeholder="email" />
                    </div>
                    <div className={classes.bottom}>
                      <div className={classes.icon}><LockOutlinedIcon /></div> 
                      <TextField type="password" placeholder="password" />
                    </div>
                  </form> 
                  <Button className={classes.btns}>
                    login
                  </Button>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div>
                  <form className={classes.text} noValidate autoComplete="off">
                    <div className={classes.top}>
                      <div className={classes.icon}><PersonOutlinedIcon /></div> 
                      <TextField placeholder="first name" />
                    </div>
                    <div className={classes.top}>
                      <div className={classes.icon}><PersonOutlinedIcon /></div> 
                      <TextField placeholder="last name" />
                    </div>
                    <div className={classes.top}>
                      <div className={classes.icon}><MailOutlinedIcon /></div> 
                      <TextField placeholder="email" />
                    </div>
                    <div className={classes.bottom}>
                      <div className={classes.icon}><LockOutlinedIcon /></div> 
                      <TextField type="password" placeholder="password" />
                    </div>
                  </form> 
                  <Button className={classes.btns}>
                    register
                  </Button>
                </div>
              </TabPanel>
            </div>
          </div>
          </div>
      </Paper>
    </div>
  )}
}

export default withStyles(styles)(Login)