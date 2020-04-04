import React, { Component } from 'react'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CloseIcon from '@material-ui/icons/Close'
import Dialog from '@material-ui/core/Dialog'
import ErrorPage from './ErrorPage'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import { Redirect } from 'react-router-dom'

import { list_book_for_trade } from '../api/api'

import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  action: {
    float: 'right',
    marginBottom: 10
  },
  card: {
    border: '1px solid lightgray',
    borderRadius: 0,
    boxShadow: 'none',
    margin: 10,
    width: 250
  },
  cardHeader: {
    borderBottom: '1px solid lightgray'
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 100
  },
  desc: {
    color: '#6c6c6c',
    paddingBottom: 5
  },
  dialog: {
    backgroundColor: '#ecece9',
    maxWidth: 300
  },
  field: {
    padding: '10px 0px 10px 0px'
  },
  grid: {
    marginBottom: 100
  },
  header: {
    backgroundColor: '#2a3e66',
    borderBottom: '3px solid #6c6c6c',
    display: 'grid',
    height: 30,
    justifyItems: 'center'
  },
  img: {
    backgroundColor: '#eeedee',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    margin: '-10px -35px -10px -10px',
    overflow: 'scroll'
  },
  isbn: {
    paddingBottom: 10
  },
  list: {
    margin: '30px 30px 30px 50px',
    width: 300
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 30,
    textAlign: 'center'
  },
  text: {
    textAlign: 'center'
  },
  title: {
    fontSize: 20
  },
  title2: {
    fontWeight: 'bolder',
    marginBottom: 0
  },
  typography: {
    color: '#6c6c6c',
    marginBottom: 10
  }
})

class Trade extends Component {
  state = {
    author: '',
    desc: '',
    genre: '',
    isbn: '',
    listSnackbar: false,
    list_err: false,
    open_index: -1,
    open_trade_index: -1,
    price: '',
    title: ''
  }

  handleClose = () => {
    this.setState({ open_index: -1 })
  }

  handleListSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    this.setState({ listSnackbar: false })
  }

  handleTradeClose = () => {
    this.setState({ open_trade_index: -1 })
  }

  onList = () => {
    list_book_for_trade(
      this.state.isbn,
      this.state.author,
      this.state.title,
      this.state.genre,
      this.state.desc
    ).then((data) => {
      this.setState({ 
        listSnackbar: true,
        list_err: !data
      })
    })
  }
  
  onTradeView = (open_i) => {
    this.setState({ open_trade_index: open_i })
  }

  onView = (i) => {
    this.setState({ open_index: i })
  }

  render() {
    const {
      classes,
      handleSnackbarClose,
      logged_in,
      onTrade,
      snackbar,
      trade_err,
      trades,
    } = this.props

    if (!logged_in) {
      return <Redirect to='/' />
    }

    return (
      <div className={classes.img}>
        <div className={classes.root}>
          <Snackbar
            action={
              <React.Fragment>
                <IconButton
                  aria-label='close'
                  color='inherit'
                  onClick={handleSnackbarClose}
                  size='small'
                >
                  <CloseIcon fontSize='small' />
                </IconButton>
              </React.Fragment>
            }
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
            open={snackbar}
            message={
              trade_err 
                ? 'Trade unsuccessful. Try again.' 
                : 'Trade successful.'
            }
          />
          <Snackbar
            action={
              <React.Fragment>
                <IconButton
                  aria-label='close'
                  color='inherit'
                  onClick={this.handleListSnackbarClose}
                  size='small'
                >
                  <CloseIcon fontSize='small' />
                </IconButton>
              </React.Fragment>
            }
            anchorOrigin={{
              horizontal: 'left',
              vertical: 'bottom',
            }}
            open={this.state.listSnackbar}
            autoHideDuration={6000}
            onClose={this.handleListSnackbarClose}
            message={
              this.state.list_err
                ? 'List unsuccessful. Try again.'
                : 'List successful.'
            }
            
          />
          <Grid 
            container 
            direction='row' 
            justify='center'
          >
            <Grid item xs>
              <Card className={classes.list}>
                <CardHeader
                  classes={{
                    title: classes.title,
                  }}
                  className={classes.cardHeader}
                  title='List a Book?'
                />
                <CardContent>
                  <form noValidate autoComplete='off'>
                    <TextField
                      className={classes.field}
                      onChange={(event) =>
                        this.setState({ isbn: event.target.value })
                      }
                      placeholder='isbn...'
                    />
                    <TextField
                      className={classes.field}
                      onChange={(event) =>
                        this.setState({ author: event.target.value })
                      }
                      placeholder='author...'
                    />
                    <TextField
                      className={classes.field}
                      onChange={(event) =>
                        this.setState({ title: event.target.value })
                      }
                      placeholder='title...'
                    />
                    <TextField
                      className={classes.field}
                      onChange={(event) =>
                        this.setState({ genre: event.target.value })
                      }
                      placeholder='genre...'
                    />
                    <TextField
                      className={classes.field}
                      multiline
                      onChange={(event) =>
                        this.setState({ desc: event.target.value })
                      }
                      placeholder='description...'
                    />
                    <Button 
                      className={classes.action} 
                      onClick={this.onList}
                    >
                      List
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              className={classes.grid}
              container
              direction='row'
              item
              justify='center'
              spacing={6}
              wrap='wrap'
              xs={6}
            >
              {trades.map((trades, i) =>
                trades.length === 0 ? (
                  <ErrorPage />
                ) : (
                  <>
                    <Card key={i} className={classes.card}>
                      <CardHeader className={classes.header} />
                      <CardContent className={classes.container}>
                        <Typography
                          className={classes.title2}
                          component='h2'
                          gutterBottom
                        >
                          {trades.book.title}
                        </Typography>
                        <Typography className={classes.typography}>
                          {trades.book.author}
                        </Typography>
                        <Typography className={classes.isbn}>
                          ISBN: {trades.book.isbn}
                        </Typography>
                      </CardContent>
                      <CardActions className={classes.action}>
                        <Button
                          onClick={() => this.onView(i)}
                          size='small'
                          variant='outlined'
                        >
                          View
                        </Button>
                        <Button
                          onClick={() => this.onTradeView(i)}
                          size='small'
                          variant='outlined'
                        >
                          Trade
                        </Button>
                      </CardActions>
                    </Card>
                    <Dialog
                      className={classes.text}
                      onClose={this.handleClose}
                      open={this.state.open_index === i}
                    >
                      <Card className={classes.dialog}>
                        <CardHeader className={classes.header} />
                        <CardContent>
                          <Typography
                            className={classes.title2}
                            component='h2'
                            gutterBottom
                          >
                            {trades.book.title}
                          </Typography>
                          <Typography className={classes.typography}>
                            {trades.book.author}
                          </Typography>
                          <Typography className={classes.isbn}>
                            ISBN: {trades.book.isbn}
                          </Typography>
                          <Typography className={classes.desc}>
                            {trades.book.desc}
                          </Typography>
                          <Typography>
                            Listed by {trades.lister.firstName}{' '}
                            {trades.lister.lastName} ({trades.lister.email})
                          </Typography>
                        </CardContent>
                        <CardActions className={classes.action}>
                          <Button
                            color='primary'
                            onClick={this.handleClose}
                            size='small'
                          >
                            Close
                          </Button>
                          <Button
                            color='primary'
                            onClick={() => this.onTradeView(i)}
                            size='small'
                          >
                            Trade
                          </Button>
                        </CardActions>
                      </Card>
                    </Dialog>
                    <Dialog
                      className={classes.text}
                      onClose={this.handleTradeClose}
                      open={this.state.open_trade_index === i}
                    >
                      <Card className={classes.dialog}>
                        <CardHeader className={classes.header} />
                        <CardContent>
                          <Typography>Trade a Book?</Typography>
                          <form noValidate autoComplete='off'>
                            <TextField
                              className={classes.field}
                              onChange={(event) =>
                                this.setState({ isbn: event.target.value })
                              }
                              placeholder='isbn...'
                            />
                            <TextField
                              className={classes.field}
                              onChange={(event) =>
                                this.setState({ author: event.target.value })
                              }
                              placeholder='author...'
                            />
                            <TextField
                              className={classes.field}
                              onChange={(event) =>
                                this.setState({ title: event.target.value })
                              }
                              placeholder='title...'
                            />
                            <TextField
                              className={classes.field}
                              onChange={(event) =>
                                this.setState({ genre: event.target.value })
                              }
                              placeholder='genre...'
                            />
                            <TextField
                              className={classes.field}
                              multiline
                              onChange={(event) =>
                                this.setState({ desc: event.target.value })
                              }
                              placeholder='description...'
                            />
                          </form>
                        </CardContent>
                        <CardActions className={classes.action}>
                          <Button
                            color='primary'
                            onClick={this.handleTradeClose}
                            size='small'
                          >
                            Close
                          </Button>
                          <Button
                            color='primary'
                            onClick={() => onTrade(i)}
                            size='small'
                          >
                            Trade
                          </Button>
                        </CardActions>
                      </Card>
                    </Dialog>
                  </>
                ))}
              </Grid>
            <Grid item xs></Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Trade)
