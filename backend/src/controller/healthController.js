const healthCheck = (req, res) => {
    res.json({status: "API is running"})
}

module.exports = {
    healthCheck
}