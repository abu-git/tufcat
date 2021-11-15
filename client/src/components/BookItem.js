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
    },
    notavailable: {
        fontSize: "12px",
        color: "red"
    }
})

export default function BookItem({book}){
    const classes = useStyles()
    return(
        <>
            <div className={classes.book}>
                <div className={classes.cover}>
                    <img className={classes.img} src={book.image}/>
                </div>
                <div className={classes.description}>
                    <p className={classes.title}>{book.title}<br></br>
                    <span className={classes.author}>{book.author}</span><br></br>
                    <span className={classes.price}>{book.price}</span><br></br>
                    {book.available === true &&
                    <span className={classes.available}>Available</span>
                    }
                    {book.available === false &&
                    <span className={classes.notavailable}>Not Available</span>
                    }
                    </p>
                </div>
            </div>
        </>
    )
}