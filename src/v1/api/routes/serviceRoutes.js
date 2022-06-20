import express from 'express';
import {
    createService,
    getAllService,
    showStatus,
    updateService,
    deleteService,
} from '../controllers/serviceController.js';
const router = express.Router();

router.post('/', createService);
router.get('/', getAllService);
router.get('/status', showStatus);
router.put('/:id', updateService);
router.delete('/:id', deleteService);

export default router;