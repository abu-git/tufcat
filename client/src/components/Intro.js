import { Container } from '@mui/material'
import  { makeStyles } from '@mui/styles'


const useStyles = makeStyles({
    intro: {
        width: "100%",
        height: "90vh",
        backgroundImage: "url(tufcat.jpg)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default function Intro(){
    const classes = useStyles()

    return(
        <>
            <Container maxWidth="xl">
                <div className={classes.intro}></div>
            </Container>
        </>
    )
}