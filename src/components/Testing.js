import React from 'react'
import { Grid, Button } from '@material-ui/core'

//test imports
import TimelineNode from '../structures/timeline/TimelineNode'

console.log('Welcome to the tests!')

export default function App() {
  const Test1 = () => {
    const node = new TimelineNode()
    console.log(node)
  }

  return (
    <Grid container justify='center' alignItems='center' direction='column'>
      <Grid item>
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          This page is for the development and testing of lorelines.com
          <br />
          Output in the console
        </p>
      </Grid>
      <Grid item padding={2}>
        <Button
          style={{
            marginTop: '20px',
            backgroundColor: 'green',
            color: 'white'
          }}
          onClick={Test1}
        >
          Default TimelineNode
        </Button>
      </Grid>
    </Grid>
  )
}
