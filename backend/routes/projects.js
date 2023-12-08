const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projects');

// Obtener todos los proyectos
router.get('/', projectsController.getAllProjects);

// Obtener un proyecto por ID
router.get('/:projectId', projectsController.getProjectById);

// Crear un nuevo proyecto
router.post('/create', projectsController.createProject);

// Actualizar un proyecto por ID
router.put('/:projectId/edit', projectsController.updateProject);

// Eliminar un proyecto por ID
router.delete('/:projectId', projectsController.deleteProject);

module.exports = router;
