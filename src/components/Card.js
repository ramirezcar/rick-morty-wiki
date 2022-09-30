import Character from './Character'
import Location from './Location'
import Episode from './Episode'


function Card({ colSize, object, index, resourceType, unmount }) {
  const card = {
    1: <Character object={object} key={index} unmount={unmount}></Character>,
    2: <Location object={object} key={index} unmount={unmount}></Location>,
    3: <Episode object={object} key={index} unmount={unmount}></Episode>
  }

  return (
    <>
      <div className={"mb-3 col-md-" + colSize}>
        <div className="card shadow-sm">
          {
            card[resourceType]
          }
        </div>
      </div>
    </>
  )
}

export default Card;