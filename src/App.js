import { Box, Button, Container, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './redux/counter'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    color: 'black',
    background: 'gray',
    padding: theme.spacing(2)
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: theme.spacing(2),
  },


}))

const App = () => {
  const classes = useStyles()
  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <Container>
      <Paper className={classes.root}>
        <Box>
          <Typography variant="h5">Count:{count}</Typography>
        </Box>
        <Box className={classes.box}>
          <Button type="submit" variant="contained" onClick={() => dispatch(increment())}>Increment</Button>
          <Button type="submit" variant="contained" onClick={() => dispatch(decrement())}>Decrement</Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default App
