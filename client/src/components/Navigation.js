
import  { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    nav: {
        position: "sticky",
        top: "0",
        display: "flex",
        justifyContent: "space-around",
        padding: "1em 0",
        background: "#ff8400",
        height: "25px"
    },
    link: {
        textDecoration: "none",
        color: "black"
    }
})

export default function Navigation(){
    const classes = useStyles()
    return(
        <>
            <nav className={classes.nav}>
                <a className={classes.link} href="#">Home</a>
                <a className={classes.link} href="#">About</a>
                <a className={classes.link} href="#">Contact</a>
                <a className={classes.link} href="#">Admin Login</a>
            </nav>
        </>
    )
}