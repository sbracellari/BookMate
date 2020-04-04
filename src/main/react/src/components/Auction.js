import React, { Component } from 'react'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CloseIcon from '@material-ui/icons/Close'
import DateFnsUtils from '@date-io/date-fns'
import Dialog from '@material-ui/core/Dialog'
import ErrorPage from './ErrorPage'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Snackbar from '@material-ui/core/Snackbar'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import { KeyboardDatePicker } from '@material-ui/pickers'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

import { Redirect } from 'react-router-dom'

import { list_book_for_auction } from '../api/api'

import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  action: {
    float: 'right'
  },
  amt: {
    color: '#6c6c6c',
    padding: '10px 0px 20px 0px'
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
  date: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  desc: {
    color: '#6c6c6c',
    paddingBottom: 5
  },
  dialog: {
    backgroundColor: '#ecece9',
    maxWidth: 300
  },
  end: {
    alignItems: 'center',
    color: '#a7a7bf',
    display: 'flex'
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
    width: 400
  },
  price: {
    paddingBottom: 20
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

class Auction extends Component {
  state = {
    author: '',
    desc: '',
    email: '',
    end: new Date(),
    genre: '',
    isbn: '',
    listSnackbar: false,
    list_err: false,
    open_auction_index: -1,
    open_index: -1,
    title: ''
  }

  handleAuctionClose = () => {
    this.setState({ open_auction_index: -1 })
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

  onAuctionView = (open_i) => {
    this.setState({ open_auction_index: open_i })
  }

  onList = () => {
    list_book_for_auction(
      this.state.isbn,
      this.state.author,
      this.state.title,
      this.state.genre,
      this.state.desc,
      this.state.end
    ).then((data) => {
      this.setState({
        listSnackbar: true,
        list_err: !data
      })
    })
  }

  onView = (i) => {
    this.setState({ open_index: i })
  }

  render() {
    const {
      auctions,
      bid_err,
      classes,
      handleBid,
      handleSnackbarClose,
      logged_in,
      onBid,
      snackbar,
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
              horizontal: 'center',
              vertical: 'bottom'
            }}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
            open={snackbar}
            message={
              bid_err 
                ? 'Bid unsuccessful. Try again.' 
                : 'Bid successful.'
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
              vertical: 'bottom'
            }}
            autoHideDuration={6000}
            onClose={this.handleListSnackbarClose}
            open={this.state.listSnackbar}
            message={
              this.state.list_err
                ? 'List unsuccessful. Try again.'
                : 'List successful.'
            }
            
          />
          <Grid container direction='row' justify='center'>
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
                  <form noValidate>
                    <TextField
                      className={classes.field}
                      placeholder='isbn...'
                      onChange={(event) =>
                        this.setState({ isbn: event.target.value })
                      }
                    />
                    <TextField
                      className={classes.field}
                      placeholder='author...'
                      onChange={(event) =>
                        this.setState({ author: event.target.value })
                      }
                    />
                    <TextField
                      className={classes.field}
                      placeholder='title...'
                      onChange={(event) =>
                        this.setState({ title: event.target.value })
                      }
                    />
                    <TextField
                      className={classes.field}
                      placeholder='genre...'
                      onChange={(event) =>
                        this.setState({ genre: event.target.value })
                      }
                    />
                    <TextField
                      className={classes.field}
                      placeholder='description...'
                      multiline
                      onChange={(event) =>
                        this.setState({ desc: event.target.value })
                      }
                    />
                    <div className={classes.date}>
                      <Typography className={classes.end}>
                        end:{' '}
                      </Typography>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          disableToolbar
                          format='yyyy-MM-dd:hh:mm:ss'
                          onChange={(date) => this.setState({ end: date })}
                          value={this.state.end}
                          variant='inline'
                        />
                      </MuiPickersUtilsProvider>
                    </div>
                  </form>
                </CardContent>
                <CardActions className={classes.action}>
                  <Button onClick={this.onList}>List</Button>
                </CardActions>
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
              {auctions.map((auctions, i) =>
                auctions.length === 0 ? (
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
                          {auctions.book.title}
                        </Typography>
                        <Typography className={classes.typography}>
                          {auctions.book.author}
                        </Typography>
                        <Typography className={classes.isbn}>
                          ISBN: {auctions.book.isbn}
                        </Typography>
                        <Typography
                          className={classes.typography}
                          component='p'
                        >
                          {auctions.current_bid === 0
                            ? `Current bid: $${auctions.initialBid}`
                            : `Current bid: $${auctions.currentBid}`}
                        </Typography>
                        <Typography>
                          End date: {auctions.end.slice(0, 10)}
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
                          onClick={() => this.onAuctionView(i)}
                          size='small'
                          variant='outlined'
                        >
                          Bid
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
                            {auctions.book.title}
                          </Typography>
                          <Typography className={classes.typography}>
                            {auctions.book.author}
                          </Typography>
                          <Typography className={classes.isbn}>
                            ISBN: {auctions.book.isbn}
                          </Typography>
                          <Typography className={classes.desc}>
                            {auctions.book.desc}
                          </Typography>
                          <Typography className={classes.price} component='p'>
                            {auctions.current_bid === 0
                              ? `Current bid: $${auctions.initialBid}`
                              : `Current bid: $${auctions.currentBid}`}
                          </Typography>
                          <Typography>
                            End date: {auctions.end.slice(0, 10)}
                          </Typography>
                          <Typography>
                            Listed by {auctions.lister.firstName}{' '}
                            {auctions.lister.lastName} ({auctions.lister.email})
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
                            onClick={() => this.onAuctionView(i)}
                            size='small'
                          >
                            Bid
                          </Button>
                        </CardActions>
                      </Card>
                    </Dialog>
                    <Dialog
                      className={classes.text}
                      onClose={this.handleAuctionClose}
                      open={this.state.open_auction_index === i}
                    >
                      <Card className={classes.dialog}>
                        <CardHeader className={classes.header} />
                        <CardContent>
                          <Typography>Bid on this Book?</Typography>
                          <Typography className={classes.amt} component='p'>
                            {auctions.current_bid === 0
                              ? `Current bid: $${auctions.initialBid}`
                              : `Current bid: $${auctions.currentBid}`}
                          </Typography>
                          <form noValidate autoComplete='off'>
                            <TextField
                              className={classes.field}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position='start'>
                                    $
                                  </InputAdornment>
                                ),
                              }}
                              onChange={handleBid}
                              placeholder='bid amount...'
                            />
                          </form>
                        </CardContent>
                        <CardActions className={classes.action}>
                          <Button
                            color='primary'
                            onClick={this.handleAuctionClose}
                            size='small'
                          >
                            Close
                          </Button>
                          <Button
                            color='primary'
                            onClick={() => onBid(i)}
                            size='small'
                          >
                            Bid
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

export default withStyles(styles)(Auction)
