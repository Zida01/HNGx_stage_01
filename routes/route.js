const router = require('express').Router();





router.get('/api', (req, res) => {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = new Date()

    const data = {
        slack_name: req.query.name,
        current_day: weekday[day.getDay()],
        utc_time: day,
        track: req.query.track,
        github_file_url: "https://github.com/username/repo/blob/main/file_name.ext",
        github_repo_url: "https://github.com/username/repo",
        status_code: 200,
    }
    return res.json({
        data
    })
})


module.exports = router;