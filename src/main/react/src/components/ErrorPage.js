import React, { Component } from 'react'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Info from '@material-ui/icons/Info'

import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  card: {
    borderLeft: '10px solid #2a3e66',
    margin: 10,
    width: 400

  },
  header: {
    borderBottom: '1px solid #d3d3d3',
    borderRadius: 0
  },
  icon: {
    color: '#2a3e66',
    fontSize: 30
  },
  iconButton: {
    alignSelf: 'center',
    paddingTop: 5
  },
  root: {
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 40,
    position: 'relative',
    width: '100%'
  },
  title: {
    fontSize: 16
  }
})

class ErrorPage extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardHeader
            avatar={<Info className={classes.icon} />}
            classes={{
              action: classes.iconButton,
              title: classes.title,
            }}
            className={classes.header}
            title='There is currently no data to display'
          ></CardHeader>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(ErrorPage)
