import {Router} from 'express';
import { show, details, add, remove } from './albumcontrollers.js';
const router = Router()

router.get("/",show)
router.get("/:id", details)
router.post("/", add)
router.delete("/:id", remove)
export {router}