// const Project = require('../models/project');

// exports.getAllProjects = async (req, res) => {
//     try {
//         // const projects = await Project.find().populate('event').populate('teamMembers');
//         const projects = await Project.find().populate('eventId').populate('teamMembers');
//         res.json(projects);
//     } catch (err) {
//         res.status(500).send(err.message);
//     }
// };

// exports.getProjectById = async (req, res) => {
//     try {
//         // const project = await Project.findById(req.params.projectId).populate('event').populate('teamMembers');
//         const project = await Project.findById(req.params.projectId).populate('eventId').populate('teamMembers');
//         if (!project) {
//             return res.status(404).send('Project not found');
//         }
//         res.json(project);
//     } catch (err) {
//         res.status(500).send(err.message);
//     }
// };

// exports.createProject = async (req, res) => {
//     try {
//         const newProject = new Project(req.body);
//         const savedProject = await newProject.save();
//         res.status(201).json(savedProject);
//     } catch (err) {
//         res.status(400).send(err.message);
//     }
// };

// exports.updateProject = async (req, res) => {
//     try {
//         const updatedProject = await Project.findByIdAndUpdate(
//             req.params.projectId,
//             req.body,
//             { new: true }
//         );
//         if (!updatedProject) {
//             return res.status(404).send('Project not found');
//         }
//         res.json(updatedProject);
//     } catch (err) {
//         res.status(400).send(err.message);
//     }
// };

// exports.deleteProject = async (req, res) => {
//     try {
//         const deletedProject = await Project.findByIdAndDelete(req.params.projectId);
//         if (!deletedProject) {
//             return res.status(404).send('Project not found');
//         }
//         res.status(200).send('Project deleted');
//     } catch (err) {
//         res.status(500).send(err.message);
//     }
// };


const Project = require('../models/project');

// Obtener todos los proyectos
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Obtener un proyecto por ID
exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.projectId);
        if (!project) {
            return res.status(404).send('Project not found');
        }
        res.json(project);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Crear un nuevo proyecto
exports.createProject = async (req, res) => {
    try {
        const newProject = new Project(req.body);
        await newProject.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Actualizar un proyecto por ID
exports.updateProject = async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(
            req.params.projectId,
            req.body,
            { new: true }
        );
        if (!updatedProject) {
            return res.status(404).send('Project not found');
        }
        res.json(updatedProject);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Eliminar un proyecto por ID
exports.deleteProject = async (req, res) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.projectId);
        if (!deletedProject) {
            return res.status(404).send('Project not found');
        }
        res.status(200).send('Project deleted');
    } catch (err) {
        res.status(500).send(err.message);
    }
};
