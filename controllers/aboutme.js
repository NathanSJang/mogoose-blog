
module.exports = {
  index,
}

function index(req, res) {
  res.render('aboutme/index', { title: 'About Me' })
};