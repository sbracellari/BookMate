import React, { Component } from 'react'

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  action: {
    float: 'right'
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
    margin: -10,
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
    open_index: -1
  }

  handleClose = () => {
    this.setState({ open_index: -1 })
  }

  onView = i => {
    this.setState({ open_index: i })
  }

  render() {
    const { 
      classes, 
      purchases 
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
                    <TextField className={classes.field} placeholder="title..." />
                    <TextField className={classes.field} placeholder="genre..." />
                    <TextField className={classes.field} placeholder="author..." />
                    <TextField className={classes.field} placeholder="description..." multiline/>
                    <TextField className={classes.field} placeholder="price..." />
                  </form>
                </CardContent>
                <CardActions className={classes.action}>
                  <Button>
                    List
                  </Button>
                </CardActions>
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
