import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { exp } from "./app.css";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera className='icon' />
          <Typography variant='h6'>Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className='container'>
          <Container maxWidth="md">
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
              been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
              a galley of type and scrambled it to make a type specimen book. It has survived not only five 
              centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
              passages, and more recently with desktop publishing software like Aldus PageMaker including 
              versions of Lorem Ipsum.
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Button variant='contained' color='primary' className='buttons' size='md'>
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary' className='buttons' size='md'>
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className='cardGrip' maxWidth='md'>
          <Grid container spacing={4}>
            
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4} >
                <Card className='card' >
                  
                  <CardMedia className='cardMedia' image='https://source.unsplash.com/random' title='Image title' />
                  
                  <CardContent className='cardContent'>
                    <Typography gutterBottom variant='h5'>
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size='small' color='primary'>View</Button>
                    <Button size='small' color='primary'>Edit</Button>
                  </CardActions>

                </Card>
              </Grid>
            ))}

          </Grid>
        </Container>
      </main>

      <footer className='footer'>
              <Typography variant='h6' align='center' gutterBottom>Footer</Typography>
              <Typography variant='subtitle1' align='center' color='textSecondary'>Some cool text to finish the foorter section</Typography>
      </footer>
    </>
  );
}

export default App;
