# evaluacion
# Examen para programador Front-End en Day Store Confidencial
# Se solicita que el programador realice un proyecto que realice lo siguiente:
#   • Mostrar una gráfica que se alimente de un set de datos en código C# o Python, que estén contenidos en una constante de la siguiente manera:
#     o Ciudades: México, Monterrey, Guadalajara, Puebla, Tijuana, Toluca, Ciudad Juarez.
#     o Indicador 1 - Número de servicios diarios: 9, 1,4, 8, 5, 10, 7.
#     o Indicador 2 – Meta para la ciudad: 15, 10, 10, 8, 8,9, 10, 9.
#   • Para poder consumir los datos de este set de datos en C# o Python, puede realizarlo mediante llamada asíncronas por Ajax o React y poder gestionarlos desde un objeto en el DOM de preferencia.
#   • Una vez obtenidos estos datos, deberán poder visualizar una grafica de barras con 2 indicadores, elija el formato.
#   • Se deberán poder descargar en formato PDF e imagen la gráfica que se muestra.
#   • Use un botón de filtrado de ciudades, para que pueda actualizar dicha grafica.
# Consideraciones:
#   • Lo no previsto en el examen, está realizado así a propósito, por favor analice y solucione donde tenga duda.
#   • NO se admiten consultas de ningún tipo para este examen.
#   • Se aceptan documentos que permitan analizar de mejor forma la solución propuesta: UML, Levantamiento de requerimiento, etc.
#   • El candidato tiene solo 72 horas a partir de recibirlo en su buzón para mandar la solución.
# *********************************** SOLUCION *********************************
# Se crea una app en react utilizando vite en su última versión (fecha 27-oct-2022)
# Se instalan las dependencias:
#  • "highcharts": "^10.2.1" (Para realizar el gráfico de barras)
#  • "highcharts-react-official": "^3.1.0" (Para realizar el gráfico de barras)
#  • "html2canvas": "^1.4.1" (Para exportar gráfico en formato png)
#  • "jspdf": "^2.5.1" (Para exportar gráfico en formato pdf)
# Para utilizar esta app se crearon varios componentes, cada uno de estos tiene su propia hoja de estilos.
# Los componentes se guardaron en la carpeta components y los estilos en la carpeta styles.
# Dentro del componente DisplayCharts se encuentran comentadas tres formas en las cuales se pueden cargar los datos.
# Esta evaluación incluye responsive design (probado en diferentes dispositivos desde 280x653 hasta )
# Built available in: https://singular-salmiakki-a5eab6.netlify.app/
# Este ejercicio es una evaluación para puesto de trabajo en Day Store y es de caracter confidencial.
# Ejercicio realizado por Fernando Bello +52 646 197 90 27