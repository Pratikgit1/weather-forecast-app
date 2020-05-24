import React, {useState, useEffect} from 'react';
import './Home.scss';
import { Search, Flag, Menu } from 'semantic-ui-react';
import _ from 'lodash';
// import {places} from '../data/placesData.js';
import Accordion from '../components/Accordion/Accordion';

const Home = () => {

    const [value, setValue] = useState('Kathmandu, NP');
    const [id, setId] = useState(1283240);
    const [results, setResults] = useState([]);
    const [data,setData] = useState([]);
    const [dataGroupedByDate, setDataGroupedByDate] = useState();
    const [dates, setDates] = useState();

    const places = [
      {"city":{"id":1283240,"name":"Kathmandu","country":"NP","coord":{"lon":85.316666,"lat":27.716667}},"time":1489465075,"data":[{"dt":1489471200,"temp":{"day":286.84,"min":269.81,"max":286.84,"night":269.81,"eve":278.25,"morn":286.15},"pressure":708.98,"humidity":65,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":0.4,"deg":212,"clouds":8,"rain":0.96,"snow":0.2,"uvi":8.37},{"dt":1489557600,"temp":{"day":278.34,"min":270.01,"max":279.27,"night":271.76,"eve":276.5,"morn":270.01},"pressure":709.79,"humidity":58,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":0.29,"deg":193,"clouds":0,"snow":0,"uvi":8.33},{"dt":1489644000,"temp":{"day":278.23,"min":270.22,"max":278.23,"night":272.41,"eve":274.27,"morn":270.22},"pressure":707.85,"humidity":57,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":0.53,"deg":179,"clouds":36,"rain":2.59,"snow":1.01,"uvi":8.69},{"dt":1489730400,"temp":{"day":283.83,"min":276.06,"max":283.83,"night":276.06,"eve":279.1,"morn":276.38},"pressure":787.6,"humidity":0,"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"}],"speed":0.83,"deg":215,"clouds":17,"rain":9.8,"snow":4.18,"uvi":7.68},{"dt":1489816800,"temp":{"day":283.37,"min":272.76,"max":283.37,"night":276.06,"eve":280.5,"morn":272.76},"pressure":788.48,"humidity":0,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":0.74,"deg":201,"clouds":17,"rain":2.2,"snow":1.35,"uvi":7.49},{"dt":1489903200,"temp":{"day":284.95,"min":274.89,"max":284.95,"night":274.95,"eve":281.87,"morn":274.89},"pressure":790,"humidity":0,"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"}],"speed":0.69,"deg":205,"clouds":41,"rain":2.05,"snow":2.05,"uvi":8.3},{"dt":1489989600,"temp":{"day":283.35,"min":272.73,"max":283.35,"night":273.35,"eve":281.32,"morn":272.73},"pressure":790.08,"humidity":0,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":0.85,"deg":240,"clouds":26,"rain":1.97,"snow":1.35,"uvi":9.3},{"dt":1490076000,"temp":{"day":287.06,"min":271.35,"max":287.06,"night":274.74,"eve":285.12,"morn":271.35},"pressure":790.94,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":0.5,"deg":291,"clouds":0,"uvi":9.3},{"dt":1490162400,"temp":{"day":287.84,"min":273.87,"max":287.84,"night":276.31,"eve":286.25,"morn":273.87},"pressure":790.56,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":0.65,"deg":262,"clouds":0,"snow":0.01,"uvi":9.3},{"dt":1490248800,"temp":{"day":289.08,"min":273.25,"max":289.08,"night":278.02,"eve":288.06,"morn":273.25},"pressure":789.54,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":0.58,"deg":271,"clouds":0,"rain":0.2,"uvi":9.3},{"dt":1490335200,"temp":{"day":290.51,"min":276,"max":290.51,"night":279.46,"eve":288.44,"morn":276},"pressure":790.5,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":0.6,"deg":251,"clouds":0,"rain":0.31,"uvi":9.3},{"dt":1490421600,"temp":{"day":290.91,"min":277.51,"max":290.91,"night":278.02,"eve":287.6,"morn":277.51},"pressure":790.91,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":0.72,"deg":262,"clouds":1,"snow":0.03,"uvi":9.3},{"dt":1490508000,"temp":{"day":290.32,"min":278.79,"max":290.32,"night":281.03,"eve":287.87,"morn":278.79},"pressure":790.04,"humidity":0,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":0.63,"deg":148,"clouds":28,"snow":0.11,"uvi":9.3},{"dt":1490594400,"temp":{"day":288.95,"min":279.25,"max":288.95,"night":280.36,"eve":284.65,"morn":279.25},"pressure":791.55,"humidity":0,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":0.6,"deg":168,"clouds":67,"rain":3.66,"snow":1.25,"uvi":9.3},{"dt":1490680800,"temp":{"day":285.5,"min":278.1,"max":285.5,"night":278.1,"eve":281.73,"morn":279.04},"pressure":792.56,"humidity":0,"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"}],"speed":0.82,"deg":186,"clouds":42,"rain":8.4,"snow":1.89,"uvi":9.3},{"dt":1490767200,"temp":{"day":274.7,"min":274.7,"max":274.7,"night":274.7,"eve":274.7,"morn":274.7},"pressure":789.81,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":0.78,"deg":43,"clouds":8,"snow":0.01,"uvi":9.3}]},
      {"city":{"id":3632308,"name":"Merida","country":"VE","coord":{"lon":-71.144997,"lat":8.598333}},"time":1489465075,"data":[{"dt":1489420800,"temp":{"day":284.63,"min":284.63,"max":284.63,"night":284.63,"eve":284.63,"morn":284.63},"pressure":777.47,"humidity":92,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01n"}],"speed":0.7,"deg":152,"clouds":0,"uvi":16.11},{"dt":1489507200,"temp":{"day":289.96,"min":282.23,"max":289.96,"night":284.63,"eve":289.7,"morn":282.23},"pressure":778.43,"humidity":85,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":0.05,"deg":74,"clouds":24,"rain":5.74,"uvi":16.28},{"dt":1489593600,"temp":{"day":290.48,"min":282.32,"max":290.76,"night":286.56,"eve":289.95,"morn":282.32},"pressure":778.09,"humidity":74,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":0.22,"deg":23,"clouds":24,"rain":2.39,"uvi":16.31},{"dt":1489680000,"temp":{"day":297.63,"min":292.33,"max":297.63,"night":292.33,"eve":296.25,"morn":292.53},"pressure":907.74,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":0.7,"deg":291,"clouds":30,"rain":3.27,"uvi":16.03},{"dt":1489766400,"temp":{"day":298.61,"min":292.22,"max":298.61,"night":292.22,"eve":296.31,"morn":292.3},"pressure":908.18,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":0.86,"deg":292,"clouds":19,"rain":2.08,"uvi":16.07},{"dt":1489852800,"temp":{"day":298.91,"min":291.55,"max":298.91,"night":291.55,"eve":295.64,"morn":292.25},"pressure":907.52,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":1.09,"deg":316,"clouds":25,"rain":2.8,"uvi":15.78},{"dt":1489939200,"temp":{"day":298.15,"min":291.77,"max":298.15,"night":292.55,"eve":295.68,"morn":291.77},"pressure":907.02,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":0.63,"deg":308,"clouds":41,"rain":5.7,"uvi":16.34},{"dt":1490025600,"temp":{"day":297.8,"min":292.01,"max":297.8,"night":292.01,"eve":295.65,"morn":292.52},"pressure":906.96,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":0.58,"deg":351,"clouds":40,"rain":2.15,"uvi":17.17},{"dt":1490112000,"temp":{"day":296.29,"min":292.17,"max":296.29,"night":292.24,"eve":294.47,"morn":292.17},"pressure":906.93,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":0.35,"deg":301,"clouds":46,"rain":4.37,"uvi":17.17},{"dt":1490198400,"temp":{"day":296.46,"min":292.15,"max":296.46,"night":292.53,"eve":294.05,"morn":292.15},"pressure":906.5,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":0.11,"deg":271,"clouds":42,"rain":6.68,"uvi":17.17},{"dt":1490284800,"temp":{"day":296.87,"min":292.71,"max":296.87,"night":292.96,"eve":294.75,"morn":292.71},"pressure":905.97,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":0.54,"deg":35,"clouds":49,"rain":3.87,"uvi":17.17},{"dt":1490371200,"temp":{"day":296.91,"min":292.64,"max":296.91,"night":292.66,"eve":294.31,"morn":292.64},"pressure":906.2,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":0.48,"deg":331,"clouds":28,"rain":6.86,"uvi":17.17},{"dt":1490457600,"temp":{"day":298.47,"min":292.72,"max":298.47,"night":292.72,"eve":294.04,"morn":293.4},"pressure":905.76,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":0.77,"deg":32,"clouds":18,"rain":4.42,"uvi":17.17},{"dt":1490544000,"temp":{"day":297.78,"min":291.9,"max":297.78,"night":291.9,"eve":295.35,"morn":293.27},"pressure":907.24,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":0.49,"deg":48,"clouds":36,"rain":4.13,"uvi":17.17},{"dt":1490630400,"temp":{"day":297.46,"min":292.3,"max":297.46,"night":292.3,"eve":295.19,"morn":292.7},"pressure":907.41,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":0.42,"deg":5,"clouds":39,"rain":2.75,"uvi":17.17},{"dt":1490716800,"temp":{"day":296.65,"min":292.88,"max":296.65,"night":294.75,"eve":294.75,"morn":292.88},"pressure":906.98,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":0.73,"deg":311,"clouds":31,"rain":4.08,"uvi":17.17}]},
      {"city":{"id":1280737,"name":"Lhasa","country":"CN","coord":{"lon":91.099998,"lat":29.65}},"time":1489465075,"data":[{"dt":1489471200,"temp":{"day":273.27,"min":261.41,"max":273.27,"night":261.41,"eve":269.56,"morn":270.53},"pressure":586.33,"humidity":17,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":2.85,"deg":232,"clouds":44,"snow":0.02,"uvi":10.11},{"dt":1489557600,"temp":{"day":274.24,"min":255.98,"max":275.12,"night":260.91,"eve":270.8,"morn":255.98},"pressure":592.26,"humidity":13,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":1.54,"deg":268,"clouds":0,"uvi":9.78},{"dt":1489644000,"temp":{"day":275.23,"min":256.37,"max":275.23,"night":262.96,"eve":270.67,"morn":256.37},"pressure":587.64,"humidity":21,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":1.18,"deg":212,"clouds":44,"snow":0.71,"uvi":10.19},{"dt":1489730400,"temp":{"day":270.18,"min":255.95,"max":270.18,"night":261.06,"eve":266.2,"morn":255.95},"pressure":572.99,"humidity":0,"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"}],"speed":1.73,"deg":206,"clouds":42,"snow":4.14,"uvi":9.38},{"dt":1489816800,"temp":{"day":268.37,"min":254.76,"max":268.37,"night":254.76,"eve":264.85,"morn":256.36},"pressure":573.47,"humidity":0,"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"}],"speed":1.8,"deg":256,"clouds":54,"snow":1.97,"uvi":9.51},{"dt":1489903200,"temp":{"day":269.05,"min":249.74,"max":269.05,"night":257.1,"eve":264.77,"morn":249.74},"pressure":576.82,"humidity":0,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":1.21,"deg":221,"clouds":60,"snow":1.15,"uvi":9.78},{"dt":1489989600,"temp":{"day":267.95,"min":254.98,"max":267.95,"night":256.9,"eve":264.52,"morn":254.98},"pressure":573.85,"humidity":0,"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"}],"speed":1.27,"deg":232,"clouds":38,"snow":5.46,"uvi":9.56},{"dt":1490076000,"temp":{"day":265.11,"min":250.89,"max":265.11,"night":250.89,"eve":262.32,"morn":255.95},"pressure":579.37,"humidity":0,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":3.26,"deg":293,"clouds":76,"snow":1.14,"uvi":9.56},{"dt":1490162400,"temp":{"day":274.19,"min":251.52,"max":274.19,"night":257.66,"eve":270.45,"morn":251.52},"pressure":579,"humidity":0,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":2.46,"deg":262,"clouds":24,"rain":0.22,"snow":0.73,"uvi":9.56},{"dt":1490248800,"temp":{"day":272.93,"min":257.65,"max":272.93,"night":259.37,"eve":268.91,"morn":257.65},"pressure":578.79,"humidity":0,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":2.17,"deg":283,"clouds":27,"snow":1.46,"uvi":9.56},{"dt":1490335200,"temp":{"day":274.06,"min":256.2,"max":274.06,"night":259.46,"eve":270.19,"morn":256.2},"pressure":579.75,"humidity":0,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":2.35,"deg":264,"clouds":4,"snow":0.54,"uvi":9.56},{"dt":1490421600,"temp":{"day":275.36,"min":254.71,"max":275.36,"night":261.17,"eve":270.45,"morn":254.71},"pressure":578.53,"humidity":0,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":1.8,"deg":236,"clouds":37,"rain":0.58,"snow":1.25,"uvi":9.56},{"dt":1490508000,"temp":{"day":274.92,"min":256.69,"max":274.92,"night":263.03,"eve":271.27,"morn":256.69},"pressure":577.66,"humidity":0,"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"}],"speed":1.79,"deg":216,"clouds":40,"rain":0.54,"snow":1.7,"uvi":9.56},{"dt":1490594400,"temp":{"day":276,"min":256.55,"max":276,"night":265.66,"eve":272.4,"morn":256.55},"pressure":579.78,"humidity":0,"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"}],"speed":1.16,"deg":210,"clouds":49,"rain":0.61,"snow":1.71,"uvi":9.56},{"dt":1490680800,"temp":{"day":275.15,"min":263.24,"max":275.15,"night":266.8,"eve":271.38,"morn":263.24},"pressure":579.98,"humidity":0,"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"}],"speed":0.58,"deg":174,"clouds":41,"rain":1.07,"snow":4.37,"uvi":9.56},{"dt":1490767200,"temp":{"day":265.05,"min":265.05,"max":265.05,"night":265.05,"eve":265.05,"morn":265.05},"pressure":577.43,"humidity":0,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":1.06,"deg":230,"clouds":81,"snow":0.62,"uvi":9.56}]},
      {"city":{"id":745042,"name":"Istanbul","country":"TR","coord":{"lon":28.983311,"lat":41.03508}},"time":1489465075,"data":[{"dt":1489399200,"temp":{"day":280.63,"min":279.36,"max":280.63,"night":279.36,"eve":279.89,"morn":279.84},"pressure":1013.74,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":5.12,"deg":263,"clouds":98,"rain":8.32,"uvi":3.33},{"dt":1489485600,"temp":{"day":278.65,"min":277.61,"max":280.45,"night":280.45,"eve":279.86,"morn":277.61},"pressure":1030.72,"humidity":100,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":5.88,"deg":301,"clouds":92,"rain":9.67,"uvi":4.16},{"dt":1489572000,"temp":{"day":281.42,"min":280.4,"max":281.42,"night":280.4,"eve":281.13,"morn":281.03},"pressure":1032.87,"humidity":100,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":6.01,"deg":1,"clouds":76,"rain":0.53,"uvi":3.45},{"dt":1489658400,"temp":{"day":280.39,"min":279.98,"max":280.98,"night":280.41,"eve":280.98,"morn":280.21},"pressure":1028.38,"humidity":100,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":3.71,"deg":247,"clouds":92,"rain":1.11,"uvi":4.31},{"dt":1489744800,"temp":{"day":281.1,"min":277.31,"max":281.1,"night":277.31,"eve":279.26,"morn":279.48},"pressure":1015.1,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":5.86,"deg":21,"clouds":60,"rain":4.23,"uvi":3.85},{"dt":1489831200,"temp":{"day":282.35,"min":278.47,"max":282.35,"night":280.69,"eve":280.46,"morn":278.47},"pressure":1013.83,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":3.19,"deg":249,"clouds":0,"rain":0.91,"uvi":4.16},{"dt":1489917600,"temp":{"day":285.67,"min":281.23,"max":285.67,"night":281.23,"eve":282.85,"morn":281.55},"pressure":1010.03,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":2.66,"deg":245,"clouds":13,"rain":0.52,"uvi":3.95},{"dt":1490004000,"temp":{"day":287.82,"min":282.2,"max":287.82,"night":282.2,"eve":285.3,"morn":282.3},"pressure":1002.42,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":2.68,"deg":172,"clouds":18,"rain":9.21,"uvi":4.45},{"dt":1490090400,"temp":{"day":281.82,"min":278.52,"max":281.82,"night":278.52,"eve":280.04,"morn":280.76},"pressure":1013.96,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":3.37,"deg":344,"clouds":44,"rain":6.5,"uvi":4.45},{"dt":1490176800,"temp":{"day":284.4,"min":280.24,"max":284.4,"night":280.3,"eve":281.76,"morn":280.24},"pressure":1016.65,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":3.72,"deg":76,"clouds":0,"uvi":4.45},{"dt":1490263200,"temp":{"day":284.21,"min":279.75,"max":284.21,"night":279.75,"eve":280.87,"morn":281.08},"pressure":1013.68,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":4.73,"deg":30,"clouds":32,"uvi":4.45},{"dt":1490349600,"temp":{"day":283.04,"min":280.56,"max":283.04,"night":280.56,"eve":281.26,"morn":280.61},"pressure":1011.58,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":5.68,"deg":47,"clouds":56,"rain":1.49,"uvi":4.45},{"dt":1490436000,"temp":{"day":282.25,"min":280.84,"max":282.25,"night":280.84,"eve":281.27,"morn":280.91},"pressure":1007.31,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":4.84,"deg":40,"clouds":94,"rain":6.67,"uvi":4.45},{"dt":1490522400,"temp":{"day":283.37,"min":279.9,"max":283.37,"night":279.9,"eve":281.78,"morn":281.07},"pressure":1007.33,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":2.05,"deg":358,"clouds":31,"rain":1.7,"uvi":4.45},{"dt":1490608800,"temp":{"day":286.2,"min":282.05,"max":286.2,"night":283.39,"eve":283.86,"morn":282.05},"pressure":1011.33,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":2.22,"deg":193,"clouds":8,"uvi":4.45},{"dt":1490695200,"temp":{"day":290.23,"min":284.45,"max":290.23,"night":284.75,"eve":286.65,"morn":284.45},"pressure":1015.32,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":2.25,"deg":162,"clouds":0,"rain":0.27,"uvi":4.45},{"dt":1490781600,"temp":{"day":284.75,"min":284.75,"max":284.75,"night":284.75,"eve":284.75,"morn":284.75},"pressure":1016.98,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01ddd"}],"speed":1.91,"deg":133,"clouds":23,"uvi":4.45}]},
      {"city":{"id":3496831,"name":"Mao","country":"DO","coord":{"lon":-71.078133,"lat":19.551861}},"time":1489465075,"data":[{"dt":1489420800,"temp":{"day":296.15,"min":295.43,"max":296.15,"night":295.43,"eve":296.15,"morn":296.15},"pressure":1013.41,"humidity":77,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"02n"}],"speed":5.61,"deg":111,"clouds":8,"uvi":12.08},{"dt":1489507200,"temp":{"day":299.76,"min":294.86,"max":302.1,"night":296.83,"eve":302.1,"morn":294.86},"pressure":1015.53,"humidity":80,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":4.65,"deg":118,"clouds":8,"rain":1.27,"uvi":11.67},{"dt":1489593600,"temp":{"day":299.98,"min":294.57,"max":300.61,"night":297.06,"eve":299.3,"morn":294.57},"pressure":1015.11,"humidity":78,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":0.07,"deg":243,"clouds":68,"rain":2.1,"uvi":11.74},{"dt":1489680000,"temp":{"day":299.43,"min":296.58,"max":299.43,"night":296.58,"eve":297.3,"morn":297.18},"pressure":1015.35,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":4.63,"deg":66,"clouds":54,"rain":4.35,"uvi":11.78},{"dt":1489766400,"temp":{"day":297.61,"min":296.07,"max":297.61,"night":296.07,"eve":296.66,"morn":296.55},"pressure":1017.01,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":7.41,"deg":74,"clouds":59,"rain":6.29,"uvi":13.18},{"dt":1489852800,"temp":{"day":297.91,"min":296.1,"max":297.91,"night":296.55,"eve":296.79,"morn":296.1},"pressure":1017.35,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":7.78,"deg":80,"clouds":32,"rain":5.91,"uvi":12.6},{"dt":1489939200,"temp":{"day":298.45,"min":296.15,"max":298.45,"night":296.15,"eve":296.68,"morn":296.17},"pressure":1015.63,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":5.88,"deg":72,"clouds":33,"rain":3.4,"uvi":11.96},{"dt":1490025600,"temp":{"day":298.5,"min":295.91,"max":298.5,"night":295.91,"eve":297,"morn":296.22},"pressure":1015.58,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":7.14,"deg":79,"clouds":8,"rain":2.9,"uvi":11.99},{"dt":1490112000,"temp":{"day":298.44,"min":296.07,"max":298.44,"night":296.49,"eve":297.42,"morn":296.07},"pressure":1015.35,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":7.41,"deg":87,"clouds":65,"rain":1.63,"uvi":11.99},{"dt":1490198400,"temp":{"day":299.11,"min":296.6,"max":299.11,"night":296.63,"eve":297.6,"morn":296.6},"pressure":1013.91,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":8.59,"deg":96,"clouds":56,"rain":1.51,"uvi":11.99},{"dt":1490284800,"temp":{"day":299.92,"min":295.61,"max":299.92,"night":295.61,"eve":297.3,"morn":296.71},"pressure":1011.35,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":4.28,"deg":99,"clouds":60,"rain":5.29,"uvi":11.99},{"dt":1490371200,"temp":{"day":300.51,"min":296.24,"max":300.51,"night":297.21,"eve":298.31,"morn":296.24},"pressure":1010.97,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":0.99,"deg":349,"clouds":10,"rain":0.68,"uvi":11.99},{"dt":1490457600,"temp":{"day":301.02,"min":296.77,"max":301.02,"night":296.77,"eve":298.49,"morn":297.2},"pressure":1011.34,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":1.96,"deg":16,"clouds":12,"rain":0.84,"uvi":11.99},{"dt":1490544000,"temp":{"day":300.83,"min":296.45,"max":300.83,"night":296.45,"eve":298.75,"morn":297.57},"pressure":1013.64,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":4.74,"deg":25,"clouds":6,"rain":4.72,"uvi":11.99},{"dt":1490630400,"temp":{"day":298.56,"min":296.6,"max":298.56,"night":296.65,"eve":297.09,"morn":296.6},"pressure":1015.43,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":8.12,"deg":67,"clouds":35,"rain":9.98,"uvi":11.99},{"dt":1490716800,"temp":{"day":299.5,"min":296.58,"max":299.5,"night":298.05,"eve":298.05,"morn":296.58},"pressure":1013.78,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":7.99,"deg":89,"clouds":30,"rain":4.35,"uvi":11.99}]},
      {"city":{"id":1259229,"name":"Pune","country":"IN","coord":{"lon":73.855347,"lat":18.519569}},"time":1489465115,"data":[{"dt":1489474800,"temp":{"day":303.42,"min":288.61,"max":306.08,"night":288.61,"eve":304.76,"morn":292.28},"pressure":951.35,"humidity":19,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":3.75,"deg":86,"clouds":0,"uvi":11.18},{"dt":1489561200,"temp":{"day":303.99,"min":286.93,"max":305.62,"night":289.91,"eve":302.15,"morn":286.93},"pressure":951.84,"humidity":37,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":3.89,"deg":137,"clouds":0,"rain":0.41,"uvi":10.83},{"dt":1489647600,"temp":{"day":301.28,"min":287.32,"max":302.84,"night":290.16,"eve":302.32,"morn":287.32},"pressure":952.08,"humidity":50,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":1.63,"deg":155,"clouds":0,"rain":0.79,"uvi":11.61},{"dt":1489734000,"temp":{"day":305.83,"min":288.15,"max":305.83,"night":292.61,"eve":305.75,"morn":288.15},"pressure":958.63,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":2.26,"deg":7,"clouds":0,"uvi":11.66},{"dt":1489820400,"temp":{"day":305.82,"min":287.31,"max":305.82,"night":293.96,"eve":305.8,"morn":287.31},"pressure":958.71,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":1.22,"deg":359,"clouds":0,"uvi":10.84},{"dt":1489906800,"temp":{"day":305.45,"min":288.04,"max":305.87,"night":293.5,"eve":305.87,"morn":288.04},"pressure":959.22,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":1.91,"deg":324,"clouds":0,"uvi":11.3},{"dt":1489993200,"temp":{"day":306.5,"min":288.58,"max":306.5,"night":294.3,"eve":306.12,"morn":288.58},"pressure":959.7,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":1.81,"deg":2,"clouds":0,"rain":0.62,"uvi":11.79},{"dt":1490079600,"temp":{"day":306.71,"min":289.35,"max":307.77,"night":294.59,"eve":307.77,"morn":289.35},"pressure":960.15,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":3.84,"deg":78,"clouds":0,"uvi":11.79},{"dt":1490166000,"temp":{"day":307.39,"min":290.02,"max":308.35,"night":294.41,"eve":308.35,"morn":290.02},"pressure":960.79,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":3.65,"deg":94,"clouds":0,"uvi":11.79},{"dt":1490252400,"temp":{"day":308.08,"min":289.25,"max":308.56,"night":293.62,"eve":308.56,"morn":289.25},"pressure":958.76,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":0.76,"deg":92,"clouds":0,"uvi":11.79},{"dt":1490338800,"temp":{"day":306.01,"min":288.9,"max":307.39,"night":294.11,"eve":307.39,"morn":288.9},"pressure":958.7,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":1.69,"deg":317,"clouds":0,"rain":0.24,"uvi":11.79},{"dt":1490425200,"temp":{"day":306.41,"min":288.96,"max":306.85,"night":295.37,"eve":306.85,"morn":288.96},"pressure":958.5,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":1.73,"deg":314,"clouds":0,"rain":0.51,"uvi":11.79},{"dt":1490511600,"temp":{"day":305.22,"min":289.19,"max":305.22,"night":294.78,"eve":305.17,"morn":289.19},"pressure":958.44,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":2.37,"deg":299,"clouds":2,"rain":0.63,"uvi":11.79},{"dt":1490598000,"temp":{"day":304.85,"min":290.2,"max":305.65,"night":294.41,"eve":305.65,"morn":290.2},"pressure":958.94,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":1.88,"deg":325,"clouds":8,"rain":0.71,"uvi":11.79},{"dt":1490684400,"temp":{"day":304.75,"min":289.59,"max":305.08,"night":294.75,"eve":305.08,"morn":289.59},"pressure":961.57,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":2.23,"deg":9,"clouds":6,"rain":0.36,"uvi":11.79},{"dt":1490770800,"temp":{"day":289.45,"min":289.45,"max":289.45,"night":289.45,"eve":289.45,"morn":289.45},"pressure":959.83,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01dd"}],"speed":1.21,"deg":292,"clouds":0,"uvi":11.79}]}
    ];
    
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
      fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=ff5d084541aac5b27ef0f46c449da8ca`)
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
    const data = dataGroupedByDate[date][0];
    const dateSplit = data.dt_txt.split(" ")[0].split("-");
    return <>
    <div className="title">
        <div className="title-date-day-group">
          <div>{getDay(data.dt)}</div>
          <div className="title-date">{`${dateSplit[2]} / ${dateSplit[1]}`}</div>
        </div>
        <div className="title-first">
          {convertToCelcius(data.main.temp)} &deg;C 
          <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}/>
        </div>
      </div>
      <div className="title-footer">
        <div>
        <div>Feels like {convertToCelcius(data.main.feels_like)} &deg;C &#5867; Humidity {data.main.humidity} %</div>
        </div>
    <div>Details</div>
      </div>
      </>
    }

    const getContent = (date) => {
      const data = dataGroupedByDate[date];
      return data.map(i => {
        const dateSplit = i.dt_txt.split(" ")[1].split(":");
        return (
          <div key={i.dt}>
            <div className="hourly-metrics">
              <div className="title-date">
              {`${dateSplit[0]}:${dateSplit[1]}`}
              </div>
              <div className="title-first smaller">
                {convertToCelcius(i.main.temp_min)} &deg;C / {convertToCelcius(i.main.temp_max)} &deg;C
                <img src={`http://openweathermap.org/img/wn/${i.weather[0].icon}.png`} alt={i.weather[0].description} />
              </div>
            </div>
            <div className="title-footer">
              <div>
              <div>
                {i.weather[0].main}
                </div>
                <div>
                  Feels like {convertToCelcius(i.main.feels_like)} &deg;C
                </div>
                <div>
                  Humidity {i.main.humidity} %
                </div>
                <div>
                  Wind speed {_.round(i.wind.speed * 3.6, 1)} kmph at {i.wind.deg}&deg;
                </div>
                {
                  i.rain && <div>
                  Rainfall last 3 hours {i.rain["3h"]} mm
                </div>
                }
                <div>
                  Pressure {i.main.pressure} hPa
                </div>
              </div>
            </div>
        </div>) 
      });
    }

    const getDay = (timestamp) => {
      const a = new Date(timestamp*1000);
      const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      return days[a.getDay()]
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
        'No data'
      }
      </div>
    </section>
   )
}

export default Home;