import { Container } from '@mui/material'
import { styled } from '@mui/material/styles'


const IntroDiv = styled('div')(({theme}) => ({
    [theme.breakpoints.down('xl')]: {
        width: "100%",
        height: "90vh",
        backgroundImage: "url(tufcat.jpg)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    [theme.breakpoints.down('lg')]: {
        backgroundSize: "100% 100%",
        height: "75vh"
    },
    [theme.breakpoints.down('md')]: {
        backgroundSize: "contain",
        height: "55vh"
    },
    [theme.breakpoints.down('sm')]: {
        backgroundSize: "100% 100%",
        height: "30vh"
    }
}))


export default function Intro(){

    return(
        <>
            <Container maxWidth="xl">
                {/*<div className={classes.intro}></div>*/}
                <IntroDiv />
            </Container>
        </>
    )
}