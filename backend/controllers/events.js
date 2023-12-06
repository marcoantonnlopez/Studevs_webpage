const Event = require('../models/event');

const eventsController = {
  // Obtener todos los eventos y separarlos por futuros y pasados
  async getAllEvents(req, res) {
    try {
      const futureEvents = await Event.getFutureEvents();
      const pastEvents = await Event.getPastEvents();
      res.render('events', { futureEvents, pastEvents });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Obtener información de un evento específico por ID
  async getEventById(req, res) {
    const eventId = req.params.eventId;
    try {
      const event = await Event.findById(eventId);
      res.render('eventDetails', { event });
    } catch (err) {
      res.status(404).json({ message: 'Evento no encontrado' });
    }
  },

  // Crear un nuevo evento
  async createEvent(req, res) {
    const eventData = req.body;
    try {
      const newEvent = await Event.create(eventData);
      res.status(201).json(newEvent);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Editar información de un evento existente por ID
  async editEvent(req, res) {
    const eventId = req.params.eventId;
    const updatedEventData = req.body;
    try {
      const updatedEvent = await Event.findByIdAndUpdate(eventId, updatedEventData, { new: true });
      res.json(updatedEvent);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Eliminar un evento existente por ID
  async deleteEvent(req, res) {
    const eventId = req.params.eventId;
    try {
      await Event.findByIdAndDelete(eventId);
      res.json({ message: 'Evento eliminado exitosamente' });
    } catch (err) {
      res.status(404).json({ message: 'Evento no encontrado' });
    }
  }
};

module.exports = eventsController;
