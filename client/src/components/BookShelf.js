import { Container, Grid } from '@mui/material'
import  { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "2rem",
        paddingBottom: "2rem"
    }
})


export default function BookShelf(){
    const classes = useStyles()

    return(
        <>
            <Container maxWidth="xl">
                <Grid container className={classes.container}>
                    <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>

                    </Grid>
                    <Grid item xl={4} lg={4} md={6} sm={12} xs={12}></Grid>
                    <Grid item xl={4} lg={4} md={6} sm={12} xs={12}></Grid>
                </Grid>
            </Container>
        </>
    )
}