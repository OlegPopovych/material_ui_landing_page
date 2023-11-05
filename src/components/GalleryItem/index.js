import { ImageListItem, ImageListItemBar, IconButton } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import { useState } from 'react';
import { Colors } from '../../styles';

const GalleryItem = ({ img, title }) => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => setLiked(!liked);

  return (
    <ImageListItem>
      <img
        src={`images/${img}`}
        srcSet={`images/${img}`}
        alt={title}
      />
      <ImageListItemBar
        title={title}
        actionIcon={
          <IconButton onClick={handleClick}>
            <Favorite sx={{ color: liked ? Colors.primary : Colors.light }} />
          </IconButton>
        }
      ></ImageListItemBar>
    </ImageListItem>
  );
};

export default GalleryItem;
