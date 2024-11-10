const express = require('express');
const ElementoController = require('../Controllers/ElementoController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Elementos
 *   description: Operaciones de gestión de elementos
 */

/**
 * @swagger
 * /api/elementos:
 *   get:
 *     summary: Listar todos los elementos
 *     tags: [Elementos]
 *     responses:
 *       200:
 *         description: Lista de elementos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Elemento'
 */
router.get('/', ElementoController.obtenerTodosLosElementos);

/**
 * @swagger
 * /api/elementos/{id}:
 *   get:
 *     summary: Obtener un elemento por ID
 *     tags: [Elementos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del elemento
 *     responses:
 *       200:
 *         description: Elemento encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Elemento'
 *       404:
 *         description: Elemento no encontrado
 */
router.get('/:id', ElementoController.obtenerElementoPorId);

/**
 * @swagger
 * /api/elementos:
 *   post:
 *     summary: Crear un nuevo elemento
 *     tags: [Elementos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Elemento'
 *     responses:
 *       201:
 *         description: Elemento creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Elemento'
 *       400:
 *         description: Error en los datos proporcionados
 */
router.post('/', ElementoController.crearElemento);

/**
 * @swagger
 * /api/elementos/{id}:
 *   put:
 *     summary: Actualizar un elemento por ID
 *     tags: [Elementos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del elemento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Elemento'
 *     responses:
 *       200:
 *         description: Elemento actualizado exitosamente
 *       404:
 *         description: Elemento no encontrado
 */
router.put('/:id', ElementoController.actualizarElemento);

/**
 * @swagger
 * /api/elementos/{id}:
 *   delete:
 *     summary: Eliminar un elemento por ID
 *     tags: [Elementos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del elemento
 *     responses:
 *       200:
 *         description: Elemento eliminado exitosamente
 *       404:
 *         description: Elemento no encontrado
 */
router.delete('/:id', ElementoController.eliminarElemento);

module.exports = router;
