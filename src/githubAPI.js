require('dotenv').config()
const codeCoverage = require('../tests/coverage-summary.json')

module.exports = {
	postGithubCommitStatus: async (repository, sha) => {
		const url = `https://api.github.com/repos/${repository}/statuses/${sha}`;
		const { lines, statements, functions, branches } = codeCoverage.total;

		try {
			const res = await fetch(url, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${process.env.TOKEN_GITHUB}`
				},
				body: {
					context: 'code-coverage',
					state: 'Success',
					description: `Coverage: 
                        ${lines.pct}% of lines
                        ${statements.pct}% of statements
                        ${functions.pct}% of functions
                        ${branches.pct}% of branches`
				}
			})
			console.log('Successfully create status')
		} catch (e) {
			throw e;
		}
	}
}