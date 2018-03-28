module.exports = function (Doorman) {
	const facts = [
		'remæus\' third word was "combine".  His first was "truck," and his second "bobtail".',
		'remæus was the Director of SkyNet Operations at Mirascape.',
		'remæus prefers tau to pi.',
		'remæus once chopped down a tree with a baseball bat.',
		'remæus thinks Chuck Norris jokes aren\'t funny or impressive.',
		'remæus crashes browser tabs on purpose.',
		'remæus sometimes stealth-edits the posts of others to add borders to images.'
	];
	return {
		commands: [
			'remaeusfact'
		],
		'remaeusfact': {
			usage: '!remaeusfact',
			description: 'Blesses you with a fact about our humble leader, Remaeus.',
			process: (msg, suffix, isEdit, cb) => {
				var randomnumber = Math.floor(Math.random() * (facts.length - 1 + 1)) + 1;
				cb({
					embed: {
						color: Doorman.Config.discord.defaultEmbedColor,
						title: 'Remaeus Fact',
						description: facts[randomnumber]
					}
				}, msg);
			}
		}
	}
}