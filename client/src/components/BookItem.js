import  { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    book: {
        display: "inline-block",
        width: "230px",
        height: "420px",
        boxShadow: "0 0 20px #aaa",
        margin: "25px",
        padding: "10px 10px 0 10px",
        verticalAlign: "top",
        transition: "height 1s"
    },
    cover: {
        border: "2px solid gray",
        height: "72%",
        overflow: "hidden"
    },
    img: {
        width: "100%"
    },
    title: {
        marginTop: "12px",
        fontSize: "20px"
    },
    author: {
        fontSize: "15px"
    },
    price: {
        fontSize: "13px"
    },
    available: {
        fontSize: "12px",
        color: "green"
    }
})

export default function BookItem(){
    const classes = useStyles()
    return(
        <>
            <div className={classes.book}>
                <div className={classes.cover}>
                    <img className={classes.img} src="https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg"/>
                </div>
                <div className={classes.description}>
                    <p className={classes.title}>Frankenstein<br></br>
                    <span className={classes.author}>Mary Shelley</span><br></br>
                    <span className={classes.price}>R25.00</span><br></br>
                    <span className={classes.available}>Available</span></p>
                </div>
            </div>
        </>
    )
}