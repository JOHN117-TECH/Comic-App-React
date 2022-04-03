
import { useSelector } from 'react-redux'
import { RootState } from '../state/reducers'

export const Section = () => {

    const { comicData } = useSelector((state:RootState) => state.Comic)

    return (
    <>
        <div className="comic__container-comic">
            <h2 className="comic__container-comic-title"><b>{comicData.title.toUpperCase()}</b></h2>
            <div className="comic__container-comic-img"><img src={comicData.img} alt={comicData.alt}/></div>
        </div>
       
        {comicData.transcript !== "" && 
            <div className="comic__container-description">
              <h2>Description</h2>
              <div>
                <p>{comicData.transcript}</p>
              </div>
            </div>
        }
    </>
  )
}
