import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';
import { RootState } from '../state/reducers';

export const NavBar = () => {

  const { comicData, ratingValue } = useSelector((state:RootState) => state.Comic)

  return (
    <>
    <AppBar position="fixed" color="primary">
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="error"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FavoriteIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Comic #{comicData.num}
          </Typography>
          Rating Comic: {ratingValue}/5
        </Toolbar>
      </AppBar>

    </>
  )
}
