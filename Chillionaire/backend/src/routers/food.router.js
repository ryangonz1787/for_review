import { Router } from "express";
import { foods } from '../data.js';

const router = Router();

router.get('/', (req, res) => {
    res.send(foods);
});

router.get('/:foodId', (req, res) => {
    const {foodId} = req.params;
    const food = foods.find(item => item.id === foodId);
    res.send(food);
});

export default router;