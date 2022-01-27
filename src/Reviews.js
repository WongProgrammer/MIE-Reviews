import React from 'react';
import { useState } from 'react';
import reviews from './data'
import { Box, Button, Card, CardContent, IconButton, Typography, CardMedia, Rating } from '@mui/material'
import { NavigateNext, NavigateBefore } from '@mui/icons-material'
function Reviews() {
    const [index, setIndex] = useState(0);
    const { name, image, size, time_used, stars, pros, cons } = reviews[index]

    const nextIndex = () => {
        let newIndex = index + 1;
        setIndex((newIndex >= reviews.length) ? 0 : newIndex);
    }

    const prevIndex = () => {
        let newIndex = index - 1;
        setIndex((newIndex < 0) ? reviews.length - 1 : newIndex);
    }

    const randomIndex = () => {
        let newIndex = Math.floor(Math.random() * reviews.length);
        while (newIndex === index) {
            newIndex = Math.floor(Math.random() * reviews.length);
        }
        setIndex(newIndex);
    }

    return (
        <Card sx={{ display: 'flex', backgroundColor: '#DAF7A6' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                component="img"
                image={image}
                sx={{
                    height: 250,
                    width: 250,
                    borderRadius: '50%',
                    margin: '10px',
                    border: 'solid'
                    
                }}
                alt={`${image}'s profile picture`}
            />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton color='secondary' onClick={prevIndex}><NavigateBefore /></IconButton>
                    <IconButton color='secondary' onClick={nextIndex}><NavigateNext /></IconButton>

            </Box>
                <Button color='secondary' onClick={randomIndex}><b>Random</b></Button>
            </Box>
          
            <Box >
                <CardContent >
                    <Typography component="div" variant='h3'>{name}</Typography>
                    <Rating name="half-rating-read" value={stars} precision={0.5} readOnly />
                    <Typography variant='subtitle1' ><b>Time used:</b> {time_used}</Typography>
                    <Typography variant='subtitle1' ><b>Company size:</b> {size}</Typography>
                </CardContent>
                <CardContent>
                    <Typography variant='body1'><b>Pros:</b> {pros}</Typography>
                    <Typography variant='body1'><b>Cons:</b> {cons}</Typography>
                </CardContent>
                
            </Box>
           
                
            
        </Card>
    );
}

export default Reviews;
