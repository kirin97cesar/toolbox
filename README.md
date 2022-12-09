# Full Stack JS - Code Challenge 

![N|Solid](https://files.toolboxtve.com/wp-content/uploads/2018/04/15144954/logo-stycky.png)

[![Code Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/kirin97cesar/toolbox)

La prueba consta del desarrollo de una API (BACKEND) y una Web (FRONTEND)

# 1. BACKEND
- Desarrollo
    - Axios
    - Express
    - Helmet
    - Cors
- Pruebas
    - Mocha 
    - Chai 
    - Chai-http
- Documentación
    - Swagger-ui-express 
    
    ### DESCRIPCION
    - Esta api consume un servicio externo, el cual nos devuelve un listado de archivos, con el detalle de cada uno.
    - Los metodos creados son:
        - api/files
        - api/files/list
        - api/files/data?fileName=<Nombre del archivo>
        
    - Cuenta con swagger para su mayor detalle en los metodos creados
        - /api-docs
        
    ### INSTALACION
    
    - CONTAINER - DOCKER
        - Si se cuenta con docker en su maquina, solo bastara con irse a la carpeta __/api__ y ejecutar en el terminal
        - Esto creará la imagen del backend
            ```
                docker build . -t api-toolbox 
            ```
        - Esta correra la imagen en un contenedor
            ```
                docker run -p 4000:4000 api-toolbox
            ```
        - Por defecto correra en el puerto 4000, podemos aceder desde http://localhost:4000
    - LOCAL
        - Se debera de contar con Node14, y se procedera a ir a la carpeta __/api__ y ejecutar
             ```
                npm install
            ```
        - Para desplegarlo
            ```
                npm run start
            ```
         - Por defecto correra en el puerto 4000, podemos aceder desde http://localhost:4000
    
    ### PRUEBAS
    - Para ejecutar las pruebas, solo bastara con irnos a nuestra __/api__ y ejecutar:
        ```
            npm run test
        ```
        ![Imagen-prueba](https://i.ibb.co/f9LR9wG/Captura-de-Pantalla-2022-12-09-a-las-9-34-20.png)
    ### DOCUMENTACION
    - Al desplegar el api se contara con un SWAGGER en donde se visualiza los metodos creados:
    - Accederemos desde http://localhost:4000/api-docs
    ![SWAGGER-LOCAL](https://i.ibb.co/CJLnf12/Captura-de-Pantalla-2022-12-09-a-las-9-27-30.png)


# 2. FRONTEND
- Desarrollo
    - Redux
    - React
    - Bootstrap
    - Axios
    - Babel
    - webpack
- Pruebas
    - Jest
    
    ### DESCRIPCION
    - Esta pagina consta de consumir los servicios anteriormente creados.
    - Caracteristicas de la web:
        - Listado de todos los archivos
        - Busqueda por archivo
        - Loading para cada ejecucion

    ### INSTALACION
    
    - CONTAINER - DOCKER
        - Si se cuenta con docker en su maquina, solo bastara con irse a la carpeta __/front__ y ejecutar en el terminal
        - Esto creará la imagen del frontend
            ```
                docker build . -t front-toolbox 
            ```
        - Esta correra la imagen en un contenedor
            ```
                docker run -p 8080:8080 front-toolbox
            ```
        - Por defecto correra en el puerto 8080, podemos aceder desde http://localhost:8080
    - LOCAL
        - Se debera de contar con Node16, y se procedera a ir a la carpeta __/front__ y ejecutar
             ```
                npm install
            ```
        - Para desplegarlo
            ```
                npm run start
            ```
         - Por defecto correra en el puerto 8080, podemos aceder desde http://localhost:8080
    
    ### PRUEBAS
    - Para ejecutar las pruebas, solo bastara con irnos a nuestra __/front__ y ejecutar:
        ```
            npm run test
        ```
        ![Imagen-prueba](https://i.ibb.co/2dfkfwj/Captura-de-Pantalla-2022-12-09-a-las-9-42-47.png)
    ### DOCUMENTACION
    
    - La web consta:
        - Loading mientras espera la respuesta del api
            ![precarga-archivos](https://i.ibb.co/zf2P2yL/Captura-de-Pantalla-2022-12-09-a-las-9-45-12.png)
       - Listado de archivos
            ![listado-archivos](https://i.ibb.co/8XL50kn/Captura-de-Pantalla-2022-12-09-a-las-9-47-39.png)
       - Busqueda de archivo
            - En la esquina superior derecha se aprecia un buscador simple
                ![busqueda-archivos](https://i.ibb.co/RpXxPP3/Captura-de-Pantalla-2022-12-09-a-las-9-48-49.png)
            - Al ingresar un texto presionar enter o en el boton Search, empezara a buscar el archivo
                ![busqueda-de-archivo](https://i.ibb.co/wcZMjzv/Captura-de-Pantalla-2022-12-09-a-las-9-49-02.png)

# 3. DESPLIEGUE COMPLETO 
- Para desplegar ambos servicios tanto el backend + frontend, bastara con tener instalado __Docker-compose__
- Ir a la carpeta raiz del proyecto en donde se aprecia el archivo __docker-compose.yml__ y ejecutar lo siguiente:
- Para construir las imagenes
    ```
     docker-compose build
    ```
- Para desplegar los contenedores
    ```
     docker-compose up
    ```
## LICENSE

MIT

**Prueba desarrollada por Paulo Cesar Carbajal Jimenez!**

