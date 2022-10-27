import React from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const DownloadBar = () => {

  function handleFIG () {
    const input = document.getElementById("graph")
    html2canvas(input, {logging:true, letterRendering: 1, useCORS:true}).then(canvas=>{
      //se debe crear un nuevo elemento para renderizar la imagen.
      const a = document.createElement("a");
      a.href = canvas.toDataURL('img/png',1);
      a.download = "chart.png"
      a.click();
    })
  }

  function handlePDF () {
    const input = document.getElementById("graph")
    html2canvas(input, {logging:true, letterRendering: 1, useCORS:true}).then(canvas=>{
      //se deben agregar las condiciones para que ajuste al tamaño de la hoja.
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const imgData = canvas.toDataURL('img/png',1);
      const pdf = new jsPDF('p','mm','a4');
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save("chart.pdf")
    })
  }


  return (
    <div className="buttoms-container">
      <button onClick={e => handlePDF(e)}>Descarga PDF</button>
      <button onClick={e => handleFIG(e)}>Descarga img</button>
    </div>
  )
}

export default DownloadBar
