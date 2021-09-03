const { Router } = require('express');
const { Activity } = require('../db');
const { Sequelize } = require('sequelize');

const router = Router();

router.post("/", async (req, res, next) => {

    const activity = req.body;
    console.log(req.body);
    try {
        let [act, created] = await Activity.findOrCreate({
            where: {
                name: activity.name,
                difficulty: activity.difficulty,
                duration: activity.duration,
                season: activity.season,
            }
        })
        console.log(created);
        await act.setCountries(activity.countries)
        return res.json(act);
    } catch (err) {
        next(err);
    }
})

module.exports = router;