import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card from '@mui/material/Card';
import Link from 'next/link';
import {CardContent, Container, Grid, Typography } from '@mui/material';

export default function Home() {
  return (
<Container>
        <Typography variant="h3" gutterBottom sx={{ m: 2 }}>
          Testing Page
        </Typography>
        <Grid container spacing={2}>
          <Card sx={{ m: 3 }}>
            <Link style={{ textDecoration: 'none' }} href={`/blog`}>
              <CardContent>
                <Typography variant="body2" color="text.secondary">Do you want to <span style={{ fontWeight: 'bold' }}>Blog</span> page ? </Typography>
                <Typography variant="body2" color="text.secondary">You can click this path to go to the blog page </Typography>
                <ArrowForwardIcon></ArrowForwardIcon>
              </CardContent>
            </Link>
          </Card>
          <Card sx={{ m: 3 }}>
            <Link style={{ textDecoration: 'none' }} href={`/products`}>
              <CardContent>
                <Typography variant="body2" color="text.secondary">Do you want to <span style={{ fontWeight: 'bold'}}>products</span> page ? </Typography>
                <Typography variant="body2" color="text.secondary">You can click this path to go to the blog page </Typography>

                <ArrowForwardIcon></ArrowForwardIcon>
              </CardContent>
            </Link>
          </Card>
          <Card sx={{ m: 3 }}>
            <Link style={{ textDecoration: 'none' }} href={`/about`}>
              <CardContent>
                <Typography variant="body2" color="text.secondary">Do you want to <span style={{ fontWeight: 'bold' }}>about</span> page ? </Typography>
                <Typography variant="body2" color="text.secondary">You can click this path to go to the blog page </Typography>

                <ArrowForwardIcon></ArrowForwardIcon>
              </CardContent>
            </Link>
          </Card>

        </Grid>

      </Container>
  )
}
