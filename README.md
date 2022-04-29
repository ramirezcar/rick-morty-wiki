# Rick&Morty: Challenge React
## Consideraciones Técnicas
Queda a criterio del evaluado:
- La elección del framework CSS a utilizar (bootstrap, material, etc)
- La elección de un componente de terceros para renderizado de tablas
- La elección de una biblioteca http para comunicación con APIs

## **Enunciado**
Haciendo uso de la [API Pública](https://rickandmortyapi.com/) de Rick & Morty, resolver:

## Barra de búsqueda
Desarrollar una barra de búsqueda que permita realizar consultas por episodios, ubicaciones o personajes. La visualización de resultados debera realizarse por medio de cards

### Búsqueda por Personaje
Mostrar:
- Nombre
- Género
- Ubicación
- Un episodio en el que haya aparecido (debe variar cada vez que se muestra el personaje)
- Foto

### Búsqueda por Ubicación
Mostrar:
- Nombre
- Tipo
- Dimensión
- Cantidad de residentes
- Fecha de creación

### Búsqueda por Episodios
Mostrar:
- Nombre
- Fecha de emisión
- Código de episodio

## Comparativa de personajes
Reutilizando la barra de búsqueda del punto anterior, permitir realizar una comparación entre personajes teniendo en cuenta los siguientes campos:
- Nombre
- Género
- Ubicación
- Especie
- Estado
- Cantidad de episodios que compartieron con cada personaje comparado

### Consideraciones
- El máximo de comparaciones es de 3 personajes por búsqueda
- La visualización de esta sección queda a criterio del evaluado

## Detalle de episodios
Al realizar una búsqueda por episodios, se debe poder ofrecer un mayor nivel de detalle de los episodios por medio de una acción de “+ info”

### Consideraciones
- El detalle debe mostrar:
  - La información presentada en los resultados de la búsqueda
  - Un listado de personajes que participaron en el episodio, mostrando nombre e imagen de cada uno
- La visualización de esta sección queda a criterio del evaluado

