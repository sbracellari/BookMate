import React, { Component } from 'react'

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { list_book_for_purchase } from '../api/api';

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
    width: 200
  },
  cardHeader: {
    borderBottom: '1px solid lightgray'
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
    margin: "-10px -35px -10px -10px",
    overflow: 'scroll'
  },
  list: {
    margin: '30px 30px 30px 50px', 
    width: 300
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
  title: {
    fontSize: 20
  },
  title2: {
    fontWeight: 'bolder'
  },
  typography: {
    color: '#6c6c6c'
  }  
})

class Purchase extends Component {
  state={
    open_index: -1,
    isbn: '',
    author: '',
    title: '',
    genre: '',
    desc: '',
    price: ''
  }

  handleClose = () => {
    this.setState({ open_index: -1 })
  }

  onView = i => {
    this.setState({ open_index: i })
  }

  onList = () => {
    list_book_for_purchase(
      this.state.isbn,
      this.state.author,
      this.state.title,
      this.state.genre,
      this.state.desc,
      this.state.price
    )
  }

  onPurchase = () => {
    
  }

  render() {
    const { 
      classes, 
      purchases,
    } = this.props

    return (
      <div className={classes.img}>
        <div className={classes.root}>
          <Grid 
            container
            direction="row"
            justify="center"
          >
            <Grid item xs>
              <Card className={classes.list}>
                <CardHeader
                  classes={{
                    title: classes.title
                  }}
                  className={classes.cardHeader}
                  title="List a Book?"
                />
                <CardContent>
                  <form noValidate autoComplete="off">
                    <TextField 
                      className={classes.field} 
                      onChange={(event) => this.setState({isbn: event.target.value})} 
                      placeholder="isbn..." 
                    />
                    <TextField 
                      className={classes.field} 
                      onChange={(event) => this.setState({author: event.target.value})} 
                      placeholder="author..." 
                    />
                    <TextField 
                      className={classes.field} 
                      onChange={(event) => this.setState({title: event.target.value})}
                      placeholder="title..." 
                    />
                    <TextField 
                      className={classes.field} 
                      onChange={(event) => this.setState({genre: event.target.value})}
                      placeholder="genre..." 
                    />
                    <TextField 
                      className={classes.field}
                      multiline 
                      onChange={(event) => this.setState({desc: event.target.value})}
                      placeholder="description..." 
                    />
                    <TextField 
                      className={classes.field} 
                      InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                      }}
                      onChange={(event) => this.setState({price: event.target.value})}
                      placeholder="price..." 
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
            direction="row"
            item
            justify="center"
            spacing={6}
            wrap="wrap"
            xs={6}
          >
            {purchases.map((purchases, i) => (
              <>
                <Card key={i} className={classes.card}>
                  <CardHeader className={classes.header}/>
                  <CardContent>
                    <Typography gutterBottom component="h2">
                      {purchases.listed_book.title}
                    </Typography>
                    <Typography className={classes.typography} component="p">
                      ${purchases.price}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.action}>
                    <Button 
                      onClick={() => this.onView(i)}
                      size="small" 
                      variant="outlined" 
                    >
                      View
                    </Button>
                    <Button variant="outlined" size="small">
                      Purchase
                    </Button>
                  </CardActions>
                </Card>
                <Dialog onClose={this.handleClose} open={this.state.open_index === i} style={{textAlign: 'center'}}>
                  <Card className={classes.dialog}>
                    <CardHeader className={classes.header}/>
                    <CardContent>
                      <Typography 
                        className={classes.title2} 
                        component="h2"
                        gutterBottom 
                      >
                        {purchases.listed_book.title}
                      </Typography>
                      <Typography 
                        className={classes.desc}
                      >
                        {purchases.listed_book.desc}
                      </Typography>
                      <Typography 
                        className={classes.price} 
                        component="p"
                      >
                        ${purchases.price}
                      </Typography>
                      <Typography>
                        Listed by {purchases.lister.first_name} {purchases.lister.last_name} {" "}
                        ({purchases.lister.email})
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.action}>
                      <Button size="small" color="primary" onClick={this.handleClose}>
                        Close
                      </Button>
                      <Button size="small" color="primary">
                        Purchase
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

export default withStyles(styles)(Purchase)
