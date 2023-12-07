const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events');

// Mostrar todos los eventos
router.get('/', eventsController.getAllEvents);

// Ruta para obtener eventos pasados
router.get('/past', eventsController.getPastEvents);

// Ruta para obtener eventos futuros
router.get('/future', eventsController.getFutureEvents);

// Mostrar información de un evento específico
router.get('/:eventId', eventsController.getEventById);

// Crear un nuevo evento
router.post('/create', eventsController.createEvent);

// Editar información de un evento
router.put('/:eventId/edit', eventsController.editEvent);

// Eliminar un evento
router.delete('/:eventId/delete', eventsController.deleteEvent);

module.exports = router;
