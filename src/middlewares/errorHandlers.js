function handleNotFound(req, res) {
    res.status(404).json({ message: 'Route not found' });
}

function handleErrors(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
}

module.exports = {
    handleNotFound,
    handleErrors,
};