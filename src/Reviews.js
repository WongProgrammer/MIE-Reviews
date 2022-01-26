import React from 'react';
import { useState } from 'react';
import reviews from './data'
import { Box, Button, Card, CardContent, CardActionArea, IconButton, Typography, CardMedia } from '@mui/material'
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
        while(newIndex === index) {
            newIndex = Math.floor(Math.random() * reviews.length);
        }
        setIndex(newIndex);
    }

    return (
        <Card >
             <CardMedia
                component="img"
                image={image}
                sx={{
                    height: 350,
                    width: 350,
                    borderRadius : '50%'
                }}
                alt={`${image}'s profile picture`}
            />
            <Box >
                <CardContent >
                    <Typography component="div">{name}</Typography>
                </CardContent>
            
                <CardActionArea>
                    <IconButton onClick={prevIndex}><NavigateBefore /></IconButton>
                    <IconButton onClick={nextIndex}><NavigateNext /></IconButton>
                   
                </CardActionArea>
                <Button onClick={randomIndex}>Random</Button>
            </Box>
           
        </Card>
    );
}

export default Reviews;
