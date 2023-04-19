import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';

function Content() {
    return (
        <div className="Content">
            <Box>
                <h4>Welcome to My Website</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laborum soluta optio dignissimos. Possimus iure ab quos dolor modi atque quasi quod odit quae, voluptatibus, quam, repellat vero aliquid accusantium!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quisquam ex libero voluptas aliquam dolores, id nulla sapiente voluptatibus obcaecati maiores aperiam, perspiciatis culpa nisi error, facere facilis ut placeat!</p>
            </Box>

            <Grid container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://media.istockphoto.com/id/146059113/photo/iguana.jpg?s=612x612&w=0&k=20&c=ddyOBJUQbN3B6gWgI04jHzFdnycwUkF7TzwRqFKHqPE="
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>

                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://media.istockphoto.com/id/146059113/photo/iguana.jpg?s=612x612&w=0&k=20&c=ddyOBJUQbN3B6gWgI04jHzFdnycwUkF7TzwRqFKHqPE="
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>

                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://media.istockphoto.com/id/146059113/photo/iguana.jpg?s=612x612&w=0&k=20&c=ddyOBJUQbN3B6gWgI04jHzFdnycwUkF7TzwRqFKHqPE="
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://media.istockphoto.com/id/146059113/photo/iguana.jpg?s=612x612&w=0&k=20&c=ddyOBJUQbN3B6gWgI04jHzFdnycwUkF7TzwRqFKHqPE="
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Content;