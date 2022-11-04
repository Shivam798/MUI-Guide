import React from 'react'
import { Card, CardActionArea, CardActions, CardMedia, CardContent, Button, Typography ,Box} from '@mui/material'
import { red } from '@mui/material/colors'

export const CardCode = () => {
    return (
        <Box display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://www.shutterstock.com/image-photo/kandariya-mahadeva-temple-dedicated-shiva-600w-157132343.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Kandariya Mahadeva Temple
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Kandariya Mahadeva Temple, dedicated to Shiva, Western Temples of Khajuraho under cloudy sky, Madya Pradesh, India. Khajuraho is UNESCO World heritage site and is popular tourist destination.

                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" sx={{background:'#ffcc99'}} color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>
        </Box>
    )
}

