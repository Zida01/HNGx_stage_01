const router = require('express').Router();





router.get('/api', (req, res) => {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = new Date()

    const data = {
        slack_name: req.query.slack_name,
        current_day: weekday[day.getDay()],
        utc_time: day,
        track: req.query.track,
        github_file_url: "https://github.com/Zida01/HNGx_stage_01/blob/main/routes/route.js",
        github_repo_url: "https://github.com/Zida01/HNGx_stage_01",
        status_code: 200,
    }
    return res.json({
        data
    })
})


module.exports = router;