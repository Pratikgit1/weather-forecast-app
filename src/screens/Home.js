import React, {useState, useEffect} from 'react';
import './Home.scss';
import { Search, Dimmer, Loader } from 'semantic-ui-react';
import _ from 'lodash';
import Accordion from '../components/Accordion/Accordion';
import Content from '../components/Content/Content';
import Title from '../components/Title/Title';
import { places } from '../data/places.js';

const Home = () => {

    const [value, setValue] = useState('Kathmandu, NP');
    const [id, setId] = useState(1283240);
    const [results, setResults] = useState([]);
    const [data,setData] = useState([]);
    const [dataGroupedByDate, setDataGroupedByDate] = useState();
    const [dates, setDates] = useState();
    
    const source = places.reduce((acc, current) => {
        return [
          ...acc,
          {
          title: `${current.city.name}, ${current.city.country}`,
          id: current.city.id
        }];
    }, []);

    const handleResultSelect = (e, { result }) => {
      setId(result.id)
    }

    const handleSearchChange = (e, { value }) => {
      setValue(value)
        
        setTimeout(() => {
          if (value.length < 1) return setValue('');
    
          const re = new RegExp(_.escapeRegExp(value), 'i')
          const isMatch = (result) => re.test(result.title)
    
          setResults(_.filter(source, isMatch));
        }, 300)
    };

    useEffect(() => {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=ff5d084541aac5b27ef0f46c449da8ca`)
      .then(response => response.json())
      .then(data => {
        setData(data.list);
        const x  = data.list.reduce((acc, curr) => {
          return [...acc, curr.dt_txt.split(" ")[0]];
        },[]);
        setDates([...new Set(x)]);
        
        const y = [...new Set(x)].reduce((acc, curr, index, array) => {
          return {...acc, 
            [curr]: data.list.filter(item => item.dt_txt.includes(curr))
          }
        },{});
        setDataGroupedByDate(y);
      });
    }, [id]);

    const convertToCelcius = (kelvin) => {
      return _.round(kelvin - 273.15, 1);
    }

    const getTitle = (date) => {
    const dataToPass = dataGroupedByDate[date][0];
    return <Title data={dataToPass} />
    }

    const getContent = (date) => {
      const dataToPass = dataGroupedByDate[date];
      return dataToPass.map(i => {
        return (
          <Content 
            data={i}
          />
        ) 
      });
    }

   return(
    <section className="home">
      <div className="home-heading">
        <span>Weather forecast</span>
        <Search
        onSearchChange={_.debounce(handleSearchChange, 500, {
          leading: true,
        })}
        onResultSelect={handleResultSelect}
        results={results}
        defaultValue={value}
      />
      </div>
      <div className="data-area">
      {
        dataGroupedByDate && dates ? dates.map((i) => {

          return <Accordion 
          key={i}
          title={getTitle(i)}
          content={getContent(i)}
          />
        }) :
        <Dimmer active inverted>
         <Loader inverted content='Loading' />
        </Dimmer>
      }
      </div>
    </section>
   )
}

export default Home;