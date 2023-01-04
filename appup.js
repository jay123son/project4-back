import {Router} from 'express';
import { show, details, add } from './albumcontrollers.js';
const router = Router()

router.get("/",show)
router.get("/:id", details)
router.post("/", add)

export {router}