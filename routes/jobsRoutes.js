import express from 'express';
const router = express.Router();

import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
} from '../controllers/jobControllers.js';

router.route('/').post(createJob).get(getAllJobs)
// remember about :id
router.route('/status').get(showStats)
router.route('/:id').delete(deleteJob).patch(updateJob)


export default router