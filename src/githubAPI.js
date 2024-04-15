require('dotenv').config();
const fetch = require("node-fetch");
const codeCoverage = require('../tests/coverage-summary.json');

module.exports = {
	postGithubCommitStatus: async (repository, sha) => {
		const url = `https://api.github.com/repos/${repository}/statuses/${sha}`;
		const { lines, statements, functions, branches } = codeCoverage.total;

		if (!process.env.TOKEN_GITHUB) {
			console.log('env vars \"TOKEN_GITHUB\" not found');
			process.exit(1);
		}

		try {
			const res = await fetch(url, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${process.env.TOKEN_GITHUB}`,
					Accept: 'application/vnd.github+json',
					"Content-Type": 'application/json'
				},
				body: JSON.stringify({
					context: 'code-coverage',
					state: 'success',
					description: `${lines.pct}% of lines | ${statements.pct}% of statements | ${functions.pct}% of functions | ${branches.pct}% of branches`
				}),
			})

			if (res.ok) {
				console.log('Successfully create status. Status Code:', res.status)
			} else {
				console.log('Failed to create status. Status Code:', res.status)
				console.log('response:', res)
			}
		} catch (e) {
			throw e;
		}
	}
}