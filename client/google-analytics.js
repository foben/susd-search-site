
module.exports = function sendAnalyticsBasedOnStateChanges(stateRouter) {
	stateRouter.on('stateChangeStart', () => {
		ga('set', 'page', currentHashPath())
		ga('send', 'pageview')
	})
}

function currentHashPath() {
	return removeHashFromPath(location.hash)
}

function removeHashFromPath(path) {
	return (path && path[0] === '#') ? path.substr(1) : path
}
