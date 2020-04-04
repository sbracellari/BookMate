import React, { Component } from 'react'

import Button from '@material-ui/core/Button'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import MailOutlinedIcon from '@material-ui/icons/MailOutlined'
import Paper from '@material-ui/core/Paper'
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import { Redirect } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'

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
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 30,
    paddingBottom: 20
  },
  title: {
    paddingLeft: 5
  },
  top: {
    display: 'flex',
    paddingBottom: 20
  }
})

class Login extends Component {
  render() {
    const {
      TabPanel,
      classes,
      email,
      first_name,
      handleChange,
      handleEmail,
      handleFirstName,
      handleLastName,
      handlePass,
      last_name,
      logged_in,
      login_err,
      onLogin,
      onRegister,
      password,
      register_err,
      value
    } = this.props

    if (logged_in) {
      return <Redirect to='/home' />
    }

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
                  centered
                  classes={{
                    indicator: classes.indicator,
                  }}
                  onChange={handleChange}
                  textColor='inherit'
                  value={value}
                >
                  <Tab
                    classes={{
                      root: classes.btn,
                    }}
                    label='login'
                  />
                  <Tab
                    classes={{
                      root: classes.btn,
                    }}
                    label='register'
                  />
                </Tabs>
                <TabPanel 
                  index={0} 
                  value={value}
                >
                  {login_err && (
                    <Typography className={classes.title}>
                      Your email or password is incorrect.
                    </Typography>
                  )}
                  <div>
                    <form
                      autoComplete='off'
                      className={classes.text}
                      noValidate
                    >
                      <div className={classes.top}>
                        <div className={classes.icon}>
                          <MailOutlinedIcon />
                        </div>
                        <TextField
                          onChange={handleEmail}
                          placeholder='email'
                          value={email}
                        />
                      </div>
                      <div className={classes.bottom}>
                        <div className={classes.icon}>
                          <LockOutlinedIcon />
                        </div>
                        <TextField
                          value={password}
                          onChange={handlePass}
                          type='password'
                          placeholder='password'
                        />
                      </div>
                    </form>
                    <Button className={classes.btns} onClick={onLogin}>
                      login
                    </Button>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  {register_err && (
                    <Typography className={classes.title}>
                      Email already in use.
                    </Typography>
                  )}
                  <div>
                    <form
                      autoComplete='off'
                      className={classes.text}
                      noValidate
                    >
                      <div className={classes.top}>
                        <div className={classes.icon}>
                          <PersonOutlinedIcon />
                        </div>
                        <TextField
                          onChange={handleFirstName}
                          placeholder='first name'
                          value={first_name}
                        />
                      </div>
                      <div className={classes.top}>
                        <div className={classes.icon}>
                          <PersonOutlinedIcon />
                        </div>
                        <TextField
                          onChange={handleLastName}
                          placeholder='last name'
                          value={last_name}
                        />
                      </div>
                      <div className={classes.top}>
                        <div className={classes.icon}>
                          <MailOutlinedIcon />
                        </div>
                        <TextField
                          onChange={handleEmail}
                          placeholder='email'
                          value={email}
                        />
                      </div>
                      <div className={classes.bottom}>
                        <div className={classes.icon}>
                          <LockOutlinedIcon />
                        </div>
                        <TextField
                          onChange={handlePass}
                          placeholder='password'
                          type='password'
                          value={password}
                        />
                      </div>
                    </form>
                    <Button 
                      className={classes.btns}
                      onClick={onRegister}
                    >
                      register
                    </Button>
                  </div>
                </TabPanel>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Login)
