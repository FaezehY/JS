/**
* MAD LIB FUNCTION
* -A function that replaces normal words in a normal story,
* with normal words from a user(that's us),
* and returns a string with a story that is anything but normal
**/

function madLibPaulRevere(adjective1, adverb1, maleCeleb, nationality,
	noun1, noun2, noun3, noun4, noun5, place1, pluralNoun1, state, typeOfLiquid) {

	return "Paul Rever was born in Boston, " 
	+ state + ", in 1735. His  father taugt him to work with metals, and he soon became a" 
	+ adjective1 + " " + noun1 + ". He was a soldier in the French and " 
	+ nationality + " war and was at the famous Boston " 
	+ noun2 + "party when Americans dressed as Indians dumped tons of " 
	+ typeOfLiquid + " into the ocean. On April 18, 1775, Paul Rever waited in " 
	+ place1 + " for a signal light from a church tower. the signal was to be one if by " 
	+ noun3 + ", two id by "+ noun4 + ". when he got the message, he mounted his faithful " 
	+ noun5 + " and rode off " + adverb1 + ". On the way, he kept yelling, \"The " 
	+ pluralNoun1 + " are coming! This was the beginning of the American War for Independence from King " 
	+ maleCeleb + ".";
}

var theStory = madLibPaulRevere(
	'wonderful', 'silently', 'Tom Cruise', 'Canadian',
	'submarine', 'footnote', 'tiger', 'panther', 'thumb',
	'Outback Steak House', 'penquins', 'quilts', 'Florida',
	'Coca-Cola'
	);

  
console.log(theStory)



