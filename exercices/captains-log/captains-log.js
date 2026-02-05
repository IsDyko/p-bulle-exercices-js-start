// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
	const start = "NCC-";
	const random = Math.floor(Math.random() * (9999 - 1000) + 1000);
	return start + random;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
	return Math.random() * (42000.0 - 41000.0) + 41000.0;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
	const classes = ["D", "H", "J", "K", "L", "M", "N", "R", "T", "Y"];
	return classes.sort(() => 0.5 - Math.random())[0];
}
