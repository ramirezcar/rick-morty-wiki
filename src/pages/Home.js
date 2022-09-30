import { useEffect, useState } from 'react'
import Card from '../components/Card'
import WaitingBrand from '../components/utils/WaitingBrand'
import { getAll, getAllByName } from '../services';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/ui/Header';
import { Pagination } from 'react-bootstrap';
import Paginator from '../components/ui/Paginator';

function Home() {
  const [resource, setResource] = useState(1);
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState(null);

  let [searchParams, setSearchParams] = useSearchParams();

  const fetchAll = async () => {
    const { results, info } = await getAll(resource);
    setData(results);
    setMeta(info);
  }

  const searchByName = async (resource, page) => {
    const searchValue = searchParams.get('query')
    const { results, info } = await getAllByName(resource, searchValue, page);
    setData(results);
    setMeta(info);
  };


  const handleClick = (e) => {
    const page = e.target.id
    searchByName(resource, page)
  }

  useEffect(() => {
    setResource(searchParams.get('resource') ? searchParams.get('resource') : 1)
    if (searchParams.get('query')) {
      searchByName(searchParams.get('resource'));
    }
  }, [searchParams])

  useEffect(() => {
    if (!searchParams.get('query')) fetchAll();
  }, [])

  return (
    <>
      <Header />
      <section className="container mb-5">
        {searchParams.get('query') &&
          <h4 className='fw-light mb-2 text-primary'>
            Resultados de búsqueda {searchParams.get('query') ? `para '${searchParams.get('query')}'` : ''}
            <small className='text-muted fs-5 ms-2'>{data?.length} resultados</small>
          </h4>
        }
        <div className="py-2 row">
          {data?.length ?
            data.map((object, index) => {
              let staticResourceType = resource
              return (
                <Card colSize={4} object={object} index={index} resourceType={staticResourceType} key={index}></Card>
              )
            })
            :
            null
          }
        </div>
      </section>
      <Paginator totalPages={meta?.pages} handleClick={handleClick}></Paginator>
    </>
  );
}

export default Home;