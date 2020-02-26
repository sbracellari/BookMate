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

import Login from './components/Login'
import Home from './components/Home'

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
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value });
  }

  render () {
    const { classes } = this.props
    const {
      value
    } = this.state
  
    return (
      <Router>
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
      </Router>
    )
  }
}

export default withStyles(styles)(App)
