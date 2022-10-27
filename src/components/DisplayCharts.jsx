import {React, useState, useEffect} from "react";
import Highchart, { chart } from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import DownloadBar from "./DownloadBar";
import {output} from '../data/Data.js'

const DisplayCharts = () => {

    const [isLoaded,setIsLoaded] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');
    const [data, setData] = useState({});
    const [dataForGraph,setDataForGraph] = useState({});
  
    const LoadData = async () => {
      try{
        //Cargar datos de entrada. 
        //FORMA 1: Acá puede un endpoint para conectarme a una API.

        //FORMA2: Incluirlos directamente acá
        // let output = { 
        //   cities:  ["México", "Monterrey", "Guadalajara", "Puebla", "Tijuana", "Toluca", "Ciudad Juarez"],
        //   nServicios:  [9, 1, 4, 8, 5, 10, 7],
        //   meta: [15, 10, 10, 8, 9, 10, 9],
        // }

        //FORMA3: Importarlos desde un archivo externo. (Reviar línea 5 import {output} from '../data/Data.js'
  
        const options = {
          chart: {
            type: 'column',
          },
          title: {
            text: 'Cumplimiento de metas'
          },
          responsive: {
            rules: [{
            condition: {
            maxWidth: '200px'}}]
          },
          xAxis:{
            categories: output.cities
          },
          yAxis:{
            title: {
              text:'Valor'
            }
          },
          series:[
            {
              name: 'Número de servicios',
              data: output.nServicios,
            },
            {
              name: 'Meta',
              data: output.meta,
            }
          ]
        }
  
        output.options = options;
        setData(output)
        setIsLoaded(true)
        return;
      }
      catch(error){
        console.log(error)
      }
    }

    useEffect ( ()=> {
        LoadData();
        if (isLoaded){
          //primera carga de datos en el gráfico
          setDataForGraph(data.options);
        }
      },[isLoaded])


    function handleSelect(e) {
        //generar la estructura básica para en componente de Highcharts
        setSelectedCity(e.target.value)
        let dataForGraphTmp  = {
            chart: {
            type: 'column',
            events: {
                load: function () {
                const chart = this
                setTimeout ( ( ) => chart.exportChart ( { type: 'application/pdf'},1000))
                }
            }
            }};
        if (e.target.value == ''){
            //seleccionar todas las ciudades
            dataForGraphTmp.title  = {text: 'Cumplimiento de metas'};
            dataForGraphTmp.xAxis  = {categories: data.cities};
            dataForGraphTmp.series = [
            {
            name: 'Numero de servicios',
            data: data.nServicios,
            },
            {
                name: 'Meta',
                data: data.meta
            }
            ]
            setDataForGraph(dataForGraphTmp)
            }

        else{
            //Seleccionar una ciudad
            let idx = data.cities.indexOf(e.target.value)
            dataForGraphTmp.title  = {text: `Cumplimiento de metas de ${data.cities[idx]}`};
            dataForGraphTmp.xAxis  = {categories: data.cities[idx]};
            dataForGraphTmp.series = [
            {
            name: 'Numero de servicios',
            data: [data.nServicios[idx]]
            },
            {
                name: 'Meta',
                data: [data.meta[idx]]
            }
            ]
            setDataForGraph(dataForGraphTmp)
        }
    }

  return (
    <section className="main-section">
        {!isLoaded ? (
          <div>LOADING...</div> 
        ):(
          <div className="wrapper">
            <DownloadBar />
            <div id="graph" className="graph-container">
              <HighchartsReact highcharts={Highchart} options={dataForGraph}/>
            </div>

            <div className="selector-wrapper">
              <select 
                value = {selectedCity}
                onChange={e => handleSelect(e)}>
                <option value="">-- Todos las ciudades --</option>
                {data.cities.map( (icity,index) => (
                  <option key= {index} value={icity}>{icity}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </section>
  )
}

export default DisplayCharts
