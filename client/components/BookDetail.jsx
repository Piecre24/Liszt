import { Book } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

import AddCircleIcon from '@material-ui/icons/AddCircle'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}))

const BookDetail = ({
  key,
  alt,
  image,
  author,
  description,
  resetResults,
  history
}) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const handleAddBook = () => {
    const newBook = {
      key,
      image
    }
    console.log(newBook)

    // resetResults()
    history.push('/booklist')
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        // action={
        //   <IconButton aria-label='settings'>
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={alt}
        subheader={author}
      />
      <CardMedia
        className={classes.media}
        image={image === undefined ? '' : `${image}`}
        alt={alt}
        key={key}
        title={alt}
      />

      <CardActions disableSpacing>
        <IconButton aria-label='add to list'>
          <AddCircleIcon onClick={handleAddBook} />
        </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

// const BookDetail = ({ key, alt, image }) => {
//   // const book = props.book

//   return (
//     <div>
//       <img src={image === undefined ? '' : `${image}`} alt={alt} key={key} />
//     </div>
//   )
// }

export default BookDetail
