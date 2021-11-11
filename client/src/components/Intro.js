import { Container } from '@mui/material'
import  { makeStyles } from '@mui/styles'


const useStyles = makeStyles({
    intro: {
        height: "90vh",
        background: "url(tufcat.jpg)",
        backgroundSize: "cover",
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