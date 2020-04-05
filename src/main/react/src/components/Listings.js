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
import Typography from '@material-ui/core/Typography'

import { Redirect } from 'react-router-dom'

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
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: 170,
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
  dialogContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 100,
    width: 250
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
  typography: {
    color: '#6c6c6c',
    marginBottom: 10
  }
})

class Listings extends Component {
  state = {
    auction2_i: -1,
    auction_i: -1,
    err: false,
    purchase2_i: -1,
    purchase_i: -1,
    trade2_i: -1,
    trade_i: -1
  }

  handleClose = () => {
    this.setState({
      auction_i: -1,
      purchase_i: -1,
      trade_i: -1
    })
  }

  handle2Close = () => {
    this.setState({
      auction2_i: -1,
      purchase2_i: -1,
      trade2_i: -1
    })
  }

  onAuctionView = (a_i) => {
    this.setState({ auction_i: a_i })
  }

  onAuction2View = (a2_i) => {
    this.setState({ auction2_i: a2_i })
  }

  onPurchaseView = (p_i) => {
    this.setState({ purchase_i: p_i })
  }

  onPurchase2View = (p2_i) => {
    this.setState({ purchase2_i: p2_i })
  }

  onTradeView = (t_i) => {
    this.setState({ trade_i: t_i })
  }

  onTrade2View = (t2_i) => {
    this.setState({ trade2_i: t2_i })
  }

  render() {
    const {
      classes,
      handleSnackbarClose,
      list_err,
      listed_auctions,
      listed_purchases,
      listed_trades,
      logged_in,
      onAuctionRemove,
      onPurchaseRemove,
      onTradeRemove,
      removeSnackbar,
      remove_err
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
            open={removeSnackbar}
            message={
              remove_err
                ? 'Listing could not be removed.'
                : 'Listing was successfully removed.'
            }
          />
          <Grid 
            container direction='row' 
            justify='center'
          >
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
              {list_err ? (
                <ErrorPage />
              ) : (
                <>
                  {listed_purchases.map((purchases, i) => (
                    <>
                      <Card key={i} className={classes.card}>
                        <CardHeader className={classes.header} />
                        <CardContent className={classes.container}>
                          <Typography
                            className={classes.title2}
                            component='h2'
                            gutterBottom
                          >
                            {purchases.book.title}
                          </Typography>
                          <Typography className={classes.typography}>
                            {purchases.book.author}
                          </Typography>
                          <Typography className={classes.isbn}>
                            ISBN: {purchases.book.isbn}
                          </Typography>
                          <Typography
                            className={classes.typography}
                            component='p'
                          >
                            ${purchases.price}
                          </Typography>
                        </CardContent>
                        <CardActions className={classes.action}>
                          <Button
                            onClick={() => this.onPurchaseView(i)}
                            size='small'
                            variant='outlined'
                          >
                            View
                          </Button>
                          <Button
                            onClick={() => this.onPurchase2View(i)}
                            size='small'
                            variant='outlined'
                          >
                            Remove
                          </Button>
                        </CardActions>
                      </Card>
                      <Dialog
                        className={classes.text}
                        onClose={this.handleClose}
                        open={this.state.purchase_i === i}
                      >
                        <Card className={classes.dialog}>
                          <CardHeader className={classes.header} />
                          <CardContent className={classes.dialogContainer}>
                            <Typography
                              className={classes.title2}
                              component='h2'
                              gutterBottom
                            >
                              {purchases.book.title}
                            </Typography>
                            <Typography className={classes.typography}>
                              {purchases.book.author}
                            </Typography>
                            <Typography className={classes.isbn}>
                              ISBN: {purchases.book.isbn}
                            </Typography>
                            <Typography className={classes.desc}>
                              {purchases.book.desc}
                            </Typography>
                            <Typography className={classes.price} component='p'>
                              ${purchases.price}
                            </Typography>
                            <Typography>
                              Listed by {purchases.lister.firstName}{' '}
                              {purchases.lister.lastName} (
                              {purchases.lister.email})
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
                              onClick={() => this.onPurchase2View(i)}
                              size='small'
                            >
                              Remove
                            </Button>
                          </CardActions>
                        </Card>
                      </Dialog>
                      <Dialog
                        className={classes.text}
                        onClose={this.handlePurchaseClose}
                        open={this.state.purchase2_i === i}
                      >
                        <Card className={classes.dialog}>
                          <CardHeader className={classes.header} />
                          <CardContent>
                            <Typography>Remove this Listing?</Typography>
                            <Typography>
                              This action cannot be undone.
                            </Typography>
                          </CardContent>
                          <CardActions className={classes.action}>
                            <Button
                              color='primary'
                              onClick={this.handle2Close}
                              size='small'
                            >
                              Close
                            </Button>
                            <Button
                              color='primary'
                              onClick={() => onPurchaseRemove(i)}
                              size='small'
                            >
                              Remove
                            </Button>
                          </CardActions>
                        </Card>
                      </Dialog>
                    </>
                  ))}
                  {listed_trades.map((trades, j) => (
                    <>
                      <Card key={j} className={classes.card}>
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
                            onClick={() => this.onTradeView(j)}
                            size='small'
                            variant='outlined'
                          >
                            View
                          </Button>
                          <Button
                            onClick={() => this.onTrade2View(j)}
                            size='small'
                            variant='outlined'
                          >
                            Remove
                          </Button>
                        </CardActions>
                      </Card>
                      <Dialog
                        className={classes.text}
                        onClose={this.handleClose}
                        open={this.state.trade_i === j}
                      >
                        <Card className={classes.dialog}>
                          <CardHeader className={classes.header} />
                          <CardContent className={classes.dialogContainer}>
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
                              onClick={() => this.onTrade2View(j)}
                              size='small'
                            >
                              Remove
                            </Button>
                          </CardActions>
                        </Card>
                      </Dialog>
                      <Dialog
                        className={classes.text}
                        onClose={this.handlePurchaseClose}
                        open={this.state.trade2_i === j}
                      >
                        <Card className={classes.dialog}>
                          <CardHeader className={classes.header} />
                          <CardContent>
                            <Typography>Remove this Listing?</Typography>
                            <Typography>
                              This action cannot be undone.
                            </Typography>
                          </CardContent>
                          <CardActions className={classes.action}>
                            <Button
                              color='primary'
                              onClick={this.handle2Close}
                              size='small'
                            >
                              Close
                            </Button>
                            <Button
                              color='primary'
                              onClick={() => onTradeRemove(j)}
                              size='small'
                            >
                              Remove
                            </Button>
                          </CardActions>
                        </Card>
                      </Dialog>
                    </>
                  ))}

                  {listed_auctions.map((auctions, k) => (
                    <>
                      <Card key={k} className={classes.card}>
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
                            onClick={() => this.onAuctionView(k)}
                            size='small'
                            variant='outlined'
                          >
                            View
                          </Button>
                          <Button
                            onClick={() => this.onAuction2View(k)}
                            size='small'
                            variant='outlined'
                          >
                            Remove
                          </Button>
                        </CardActions>
                      </Card>
                      <Dialog
                        className={classes.text}
                        onClose={this.handleClose}
                        open={this.state.auction_i === k}
                      >
                        <Card className={classes.dialog}>
                          <CardHeader className={classes.header} />
                          <CardContent className={classes.dialogContainer}>
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
                              {auctions.lister.lastName} (
                              {auctions.lister.email})
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
                              onClick={() => this.onAuction2View(k)}
                              size='small'
                            >
                              Remove
                            </Button>
                          </CardActions>
                        </Card>
                      </Dialog>
                      <Dialog
                        className={classes.text}
                        onClose={this.handlePurchaseClose}
                        open={this.state.auction2_i === k}
                      >
                        <Card className={classes.dialog}>
                          <CardHeader className={classes.header} />
                          <CardContent>
                            <Typography>Remove this Listing?</Typography>
                            <Typography>
                              This action cannot be undone.
                            </Typography>
                          </CardContent>
                          <CardActions className={classes.action}>
                            <Button
                              color='primary'
                              onClick={this.handle2Close}
                              size='small'
                            >
                              Close
                            </Button>
                            <Button
                              color='primary'
                              onClick={() => onAuctionRemove(k)}
                              size='small'
                            >
                              Remove
                            </Button>
                          </CardActions>
                        </Card>
                      </Dialog>
                    </>
                  ))}
                </>
              )}
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Listings)
