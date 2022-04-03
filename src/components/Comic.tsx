import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeRatingValue, startLoadingComicData } from '../state/actions-creators'
import { RootState } from '../state/reducers/index';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CircularProgress from '@mui/material/CircularProgress';
import { Section } from './Section';



const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export const Comic = () => {

    const dispatch = useDispatch()

    const { comicData } = useSelector((state:RootState) => state.Comic)
    
    const {loadingComic} = useSelector((state:RootState) => state.ui)

    const [numRandom, setnumRandom] = useState<number>(1);
    const [numComic, setnumComic] = useState<string>('');
    const [defaultValue, setDefaultValue] = useState<number>(1);
    const [ratingValue, setRatingValue] = useState<number>(0);
    
    
    const generateNumberRandom = () =>  {
      const comicRandom = Math.floor(Math.random()*2601);
      setnumRandom(comicRandom )
      dispatch(startLoadingComicData(numRandom))
      setRatingValue(0)
      setDefaultValue(1)
    }

    const changeValue = (event:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setnumComic(event.target.value)
      setDefaultValue(Number(event.target.value))
    }
      
    const search = (event: React.KeyboardEvent<HTMLDivElement>) => {
      const tecla = event.charCode;
      return (tecla === 13) && (
        dispatch(startLoadingComicData(Number(numComic))),
        setRatingValue(0)
      )
    }

    useEffect(() => {
      dispatch(startLoadingComicData())
    }, [dispatch])

    useEffect(() => {
      dispatch(changeRatingValue(ratingValue))
    }, [dispatch,ratingValue])

    return (
        <div className="comic__container">
            <div  className="comic__container-options">
                <div className="comic__container-options-btn">
                  <Button color="info" variant="contained" onClick={generateNumberRandom}>Random Comic</Button>
                </div>
                <div className="comic__container-options-input">
                  <TextField 
                    label="Standard" 
                    variant="standard" 
                    type="number"
                    value={defaultValue}
                    onChange={e => changeValue(e)}  
                    onKeyPress={(event) => { search(event) }}
                    InputProps={{
                      inputProps: { 
                          max: 2601, min: 1
                      }
                    }}
                    helperText="Min:1 - Max:2601"
                    />  
                  </div>
                <div className="comic__container-options--title-rating"><h3>Rating this comic</h3></div>
                <div className="comic__container-options-rating"> 
                <StyledRating
                    name="customized-color"
                    value={ratingValue}
                    onChange={(event, newValue) => {
                      newValue !== null && setRatingValue(newValue);
                    }}
                    getLabelText={(value: number) => `${ratingValue} Heart${ratingValue !== 1 ? 's' : ''}`}
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                />
                
                </div>
                { loadingComic 
                 ? <div className='comic__container-options-progress center'><CircularProgress size={50}/></div>
                 : comicData.transcript !== "" && (
                      <div className="comic__container-options-description">  
                        <h2>Description</h2>
                        <div>
                          <p>{comicData.transcript}</p>
                        </div>
                      </div>
                    )
                }
            </div>
            { loadingComic 
              ? <div className='center'><CircularProgress size={100}/></div>
              : <Section/>
            }
            
        </div>
    )
}
