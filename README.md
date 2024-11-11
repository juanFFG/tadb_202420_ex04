# API de Compuestos Químicos
### Por:  Juan Felipe Fernandez Grajales 000271761

## Descripción

Esta API permite gestionar elementos químicos y compuestos que se forman a partir de ellos. La API está diseñada para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en dos entidades principales:

- **Elementos**: Representan elementos químicos individuales.
- **Compuestos**: Representan compuestos formados por múltiples elementos.

## Requisitos Previos

- Node.js y npm instalados
- Docker (opcional, para ejecutar MongoDB en un contenedor)

## Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone https://github.com/juanFFG/ERPVacation.git
cd CompuestosQuimicos
```

### 2. Instalar dependencias
Para instalar las dependencias usadas solo debes ejecutar el siguiente comando:

```bash
npm install
```

### 3. Configurar Variables de Entorno
Crea un archivo .env en la raíz del proyecto y configura las siguientes variables:
```plaintext
MONGO_URI=mongodb://localhost:32768/compuestosQuimicos
APP_PORT=3000
```
- **MONGO_URI**: URI de conexión a la base de datos MongoDB (puedes modificar el puerto y nombre de la base de datos según tu configuración).
- **APP_PORT**: Puerto en el cual se ejecutará la API.

### 4. Iniciar MongoDB en Docker (Opcional)
Si estás usando Docker, puedes iniciar MongoDB con el siguiente comando:

```bash
docker run --name mongodb -p <puerto_que_elijas>:27017 -d mongo
```

### 5. Iniciar la API
Para iniciar el API, ejecuta el comando en la raíz del proyecto:

```bash
node server.js
```

Si la conexión a MongoDB es exitosa, verás en la consola el mensaje:

```bash
Conexión a MongoDB exitosa
Servidor corriendo en el puerto 3000
Documentación Swagger disponible en: http://localhost:3000/api-docs
```

## Documentación de la API
La API está documentada utilizando Swagger. Puedes acceder a la documentación completa e interactiva en: http://localhost:3000/api-docs o el puerto que hayas indicado.

Swagger permite probar los endpoints directamente desde el navegador.

## Rutas Principales
### 1. Elementos

GET /api/elementos: Obtener todos los elementos
GET /api/elementos/{id}: Obtener un elemento por su ID
POST /api/elementos: Crear un nuevo elemento
PUT /api/elementos/{id}: Actualizar un elemento por su ID
DELETE /api/elementos/{id}: Eliminar un elemento por su ID

Ejemplo de Objeto Elemento para Crear o Actualizar:

```json
{
    "nombre": "Oxígeno",
    "simbolo": "O",
    "numeroAtomico": 8,
    "configuracionElectronica": "1s2 2s2 2p4"
}
```

### 2. Compuestos

GET /api/compuestos: Obtener todos los compuestos
GET /api/compuestos/{id}: Obtener un compuesto por su ID, incluyendo los elementos que lo componen
POST /api/compuestos: Crear un nuevo compuesto, incluyendo los elementos
PUT /api/compuestos/{id}: Actualizar un compuesto por su ID, incluyendo los elementos
DELETE /api/compuestos/{id}: Eliminar un compuesto por su ID

Ejemplo de Objeto Compuesto para Crear o Actualizar:

> Nota: Reemplaza `"ID_DEL_HIDROGENO"` y `"ID_DEL_OXIGENO"` con los IDs reales de los elementos en tu base de datos.

```json
{
    "nombre": "Agua",
    "formulaQuimica": "H2O",
    "masaMolar": 18.015,
    "estadoAgregacion": "Líquido",
    "elementos": [
        { "elementoId": "ID_DEL_HIDROGENO", "cantidadAtomos": 2 },
        { "elementoId": "ID_DEL_OXIGENO", "cantidadAtomos": 1 }
    ]
}
```

## Estructura del Proyecto

```bash
CompuestosQuimicos/
├── Datos/                      # Carpeta para datos de carga inicial y esquemas de validación
│   ├── compuestos.json         # Archivo JSON de compuestos de ejemplo para carga inicial
│   ├── elementos.json          # Archivo JSON de elementos de ejemplo para carga inicial
│   ├── esquema_compuesto.json  # Esquema de validación JSON para documentos de compuestos
│   ├── esquema_elemento.json   # Esquema de validación JSON para documentos de elementos
│
├── src/                        # Código fuente de la API
│   ├── Controllers/            # Controladores para manejar la lógica de cada ruta
│   ├── Models/                 # Modelos de Mongoose para MongoDB
│   ├── Repositories/           # Capa de repositorio para la gestión de datos
│   ├── Routes/                 # Definición de rutas de la API
│   ├── Services/               # Lógica de negocio y validación
│   └── Database/               # Configuración de conexión a MongoDB
├── app.js                      # Configuración principal de la aplicación Express
├── server.js                   # Punto de entrada del servidor
├── swagger.js                  # Configuración de Swagger para la documentación de la API
└── .env                        # Archivo de variables de entorno
```

## Archivos de Datos
Los archivos JSON de datos están en la carpeta Datos y contienen la totalidad de información inicial para las colecciones Elementos y Compuestos.

- Datos/elementos.json - Elementos iniciales
- Datos/compuestos.json - Compuestos iniciales

## Pruebas
Para realizar pruebas, puedes utilizar herramientas como Postman o la interfaz Swagger en http://localhost:3000/api-docs o el puerto que hayas indicado.

# **¡Gracias por usar la API de Compuestos Químicos!**
