import exspress from 'express';
import { 
     getCategories,
     insertCategories,
     showCategories,
     updateCategories,
     deleteCategories, 
} 

from '../controllers/categoriesControllers.js';

const router = exspress.Router();

router.get("/",getCategories);
router.post("/", insertCategories);
router.get("/:id", showCategories);
router.put("/:id", updateCategories);
router.delete("/:id", deleteCategories);

export default router;