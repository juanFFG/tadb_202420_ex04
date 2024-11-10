const express = require('express');
const CompuestoController = require('../Controllers/CompuestoController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Compuestos
 *   description: Operaciones de gestión de compuestos
 */

/**
 * @swagger
 * /api/compuestos:
 *   get:
 *     summary: Listar todos los compuestos
 *     tags: [Compuestos]
 *     responses:
 *       200:
 *         description: Lista de compuestos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Compuesto'
 */
router.get('/', CompuestoController.obtenerTodosLosCompuestos);

/**
 * @swagger
 * /api/compuestos/{id}:
 *   get:
 *     summary: Obtener un compuesto por ID
 *     tags: [Compuestos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del compuesto
 *     responses:
 *       200:
 *         description: Compuesto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Compuesto'
 *       404:
 *         description: Compuesto no encontrado
 */
router.get('/:id', CompuestoController.obtenerCompuestoPorId);

/**
 * @swagger
 * /api/compuestos:
 *   post:
 *     summary: Crear un nuevo compuesto
 *     tags: [Compuestos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Compuesto'
 *     responses:
 *       201:
 *         description: Compuesto creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Compuesto'
 *       400:
 *         description: Error en los datos proporcionados
 */
router.post('/', CompuestoController.crearCompuesto);

/**
 * @swagger
 * /api/compuestos/{id}:
 *   put:
 *     summary: Actualizar un compuesto por ID
 *     tags: [Compuestos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del compuesto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Compuesto'
 *     responses:
 *       200:
 *         description: Compuesto actualizado exitosamente
 *       404:
 *         description: Compuesto no encontrado
 */
router.put('/:id', CompuestoController.actualizarCompuesto);

/**
 * @swagger
 * /api/compuestos/{id}:
 *   delete:
 *     summary: Eliminar un compuesto por ID
 *     tags: [Compuestos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del compuesto
 *     responses:
 *       200:
 *         description: Compuesto eliminado exitosamente
 *       404:
 *         description: Compuesto no encontrado
 */
router.delete('/:id', CompuestoController.eliminarCompuesto);

module.exports = router;
