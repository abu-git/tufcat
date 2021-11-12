
import  { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    nav: {
        position: "sticky",
        top: "0",
        display: "flex",
        justifyContent: "space-around",
        padding: "1em 0",
        background: "#f59e1b",
        height: "25px"
    }
})

export default function Navigation(){
    const classes = useStyles()
    return(
        <>
            <nav className={classes.nav}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Admin Login</a>
            </nav>
        </>
    )
}