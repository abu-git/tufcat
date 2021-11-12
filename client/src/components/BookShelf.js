import { Container, Grid } from '@mui/material'
import  { makeStyles } from '@mui/styles'
import BookItem from './BookItem'

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
    const classes = useStyles()

    return(
        <>
            <Container maxWidth="xl">
                <Grid container className={classes.container}>
                    <Grid className={classes.item} item xl={4} lg={4} md={6} sm={12} xs={12}>
                        <BookItem />
                    </Grid>
                    <Grid className={classes.item} item xl={4} lg={4} md={6} sm={12} xs={12}>
                        <BookItem />
                    </Grid>
                    <Grid className={classes.item} item xl={4} lg={4} md={6} sm={12} xs={12}>
                        <BookItem />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}