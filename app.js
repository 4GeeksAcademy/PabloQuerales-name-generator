let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

let dominio = [".com", ".es", ".io", ".gov"];

for (let i = 0; i < pronoun.length; i++) {
	for (let ib = 0; ib < adj.length; ib++) {
		for (let iv = 0; iv < noun.length; iv++) {
			for (let ie = 0; ie < dominio.length; ie++) {
				console.log(pronoun[i] + adj[ib] + noun[iv] + dominio[ie]);
			}
		}
	}
}
