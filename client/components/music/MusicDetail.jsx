import React from 'react'

import AddCircleIcon from '@material-ui/icons/AddCircle'
import {
  makeStyles,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography
} from '@material-ui/core/'
import clsx from 'clsx'
import { red } from '@material-ui/core/colors'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { postMusicToList } from '../../apis/music'

const useStyles = makeStyles((theme) => ({
  // root: {
  //   maxWidth: 345
  // },
  // media: {
  //   height: 0,
  //   paddingTop: '56.25%' // 16:9
  // },
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

const MusicDetail = ({
  artist,
  image,
  album,
  resetResults,
  history,
  id,
  title
}) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const handleAddMusic = () => {
    const newMusic = {
      image,
      id,
      artist,
      album,
      title
    }
    console.log('newMusic', newMusic)
    postMusicToList(newMusic)

    history.push('/musiclist')
  }

  return (
    <Card className="card image-size"
      style={{ backgroundColor: 'transparent', borderRadius: '30px', borderColor: '#8b2eff' }}>

<Typography
        style={{ fontFamily: 'rubik', fontSize: '27px', color: '#8b2eff', textAlign: 'center' }} title>{title}</Typography>
      <Typography style={{ fontFamily: 'rubik', fontSize: '19px', color: '#8b2eff', textAlign: 'center' }}subheader>{artist}</Typography>

      {/* <CardHeader title={title} subheader={artist} /> */}
      <CardMedia
        className='image'
        image={image === undefined ? '' : `${image}`}
        alt={album}
        id={id}
        // title={artist === undefined ? '' : `${artist}`}
      />

      <CardActions style={{ justifyContent: 'center', padding: '0' }} disableSpacing>
        <IconButton aria-label='add to list' onClick={handleAddMusic}>
          <AddCircleIcon style={{ color: '#8b2eff', fontSize: '45' }} />
        </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon style={{ color: '#8b2eff', fontSize: '45' }} />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography style={{ fontFamily: 'rubik', fontSize: '1rem', color: '#8b2eff', textAlign: 'center' }} paragraph>Album: {album}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default MusicDetail
