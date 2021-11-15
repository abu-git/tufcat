import { Container, Grid } from '@mui/material'
import  { makeStyles } from '@mui/styles'
import BookItem from './BookItem'
import { useState } from 'react'

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        //border: "1px solid red"
    },
    item: {
        display: "flex",
        justifyContent: "center"
    }
})


export default function BookShelf(){
    const [books] = useState([
        {
            id: 1,
            image: "https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg",
            title: "Frankenstein",
            author: "Mary Shelley",
            price: "R25.00",
            available: true
        },
        {
            id: 2,
            image: "http://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s192x300.jpg",
            title: "The Alchemist",
            author: "Paulo Coelho",
            price: "R35.00",
            available: true
        },
        {
            id: 3,
            image: "http://d.gr-assets.com/books/1414348859l/23209971.jpg",
            title: "Girl at War",
            author: "Sara Novic",
            price: "R30.00",
            available: false
        },
        {
            id: 4,
            image: "https://alysbcohen.files.wordpress.com/2015/01/little-princess-book-cover.jpg",
            title: "A Little Princess",
            author: "Frances Hodgson Burnett",
            price: "R25.00",
            available: false
        },
        {
            id: 5,
            image: "http://www.publishersweekly.com/images/data/ARTICLE_PHOTO/photo/000/028/28129-1.JPG",
            title: "Roughing It",
            author: "Mark Twain",
            price: "R30.00",
            available: true
        },
        {
            id: 6,
            image: "http://talkingwriting.com//sites/default/files/Bird-by-Bird-image1.jpg",
            title: "Bird by Bird",
            author: "Anne Lamott",
            price: "R35.00",
            available: true
        }
    ])
    const classes = useStyles()

    return(
        <>
            <Container maxWidth="xl">
                <Grid container className={classes.container}>
                    <Grid className={classes.item} item xl={4} lg={4} md={6} sm={12} xs={12}>
                        <BookItem book={books[0]} key={books[0].id} />
                    </Grid>
                    <Grid className={classes.item} item xl={4} lg={4} md={6} sm={12} xs={12}>
                        <BookItem book={books[1]} key={books[1].id}  />
                    </Grid>
                    <Grid className={classes.item} item xl={4} lg={4} md={6} sm={12} xs={12}>
                        <BookItem book={books[2]} key={books[2].id}  />
                    </Grid>
                    <Grid className={classes.item} item xl={4} lg={4} md={6} sm={12} xs={12}>
                        <BookItem book={books[3]} key={books[3].id}  />
                    </Grid>
                    <Grid className={classes.item} item xl={4} lg={4} md={6} sm={12} xs={12}>
                        <BookItem book={books[4]} key={books[4].id}  />
                    </Grid>
                    <Grid className={classes.item} item xl={4} lg={4} md={6} sm={12} xs={12}>
                        <BookItem book={books[5]} key={books[5].id}  />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}