//Regex is a way to search through string and text

//Syntax : /Forward slash /Backslash e.g /some text/g

//Expression flags
// g : Global
// i : case Insensitive
// m : Multiline
// s : Single line (dotall)
// u : Unicode
// y : stickY

const str = 'The fat cat ran down the street.\nIt was searching for mouse to eat. 1 * _ text.';
const emoji = '😂';

// g : Global
const gF = str.match(/at/g); // Matches anywhere in the string
const withoutG = str.match(/at/); // Matches the first result
//console.log('Using global flag', g); // Output: [ 'at', 'at', 'at' ]
//console.log('Not using global flag', withoutG); // Output: [ 'at' ]

// i : case Insensitive
// Matches anywhere in the string but being case insensitive
const iF = str.match(/The/ig);
//console.log('Using the case sensitive flag', iF); // Output: [ 'The', 'the' ]

// m : Multiline
//Match any newline beginning/end.
// It treats \n and \r as delimiters
const mF = str.match(/^It/m);
console.log('Using multiline flag', mF);

// s : Single line (dotall)

// u : Unicode
// Treats string as sequence of unicode characters
// Suitable for string that contains a character whose codepoint is >= 2^16 e.g emoji
console.log('Using Unicode flag', /\ud83d/u.test(emoji));
console.log('Not using Unicode flag', /\ud83d/.test(emoji));

// y : stickY
// Finds all consecutive/adjacent matches

//Using + indicator
const plus = str.match(/e+a/g); // Match one or more of the preceding token
const plusOption = str.match(/ea?/g) // Match one or more of the preceding token but not strict
console.log('Matching preceding token using + ', plus); // output : [ 'ea', 'ea' ]
console.log('Matching preceding token using + and ? option', plusOption); // Output : [ 'e', 'e', 'ee', 'ea', 'e', 'ea' ]

//Using * indicator
//Combination of + and ? indicators
//Match many characters as possible in a row
const star = str.match(/at*/g);
console.log('Matching preceding token using star indicator', star); // Output : [ 'at', 'at', 'a', 'a', 'a', 'at' ]

// Using . indicator
//Matches anything in a string
const beforePeriod = str.match(/.at/g); // Before the token
const afterPeriod = str.match(/f./g); // After the token
const doublePeriod = str.match(/t../g); //Using multiple periods. it will not match a new line
const allPeriods = str.match(/\./g); // '\' Treats '.' as a normal period
const matchBeforePeriod = str.match(/.\./g); // Matching any character that comes before '.'
console.log('Matching anything before a string using period indicator', beforePeriod); // Output : [ 'fat', 'cat', 'eat' ]
console.log('Matching anything after a string using period indicator', afterPeriod); // Output : [ 'fa', 'fo' ]
console.log('Matching anything after a string using multiple period indicator', doublePeriod); //Output : [ 't c', 't r', 'the', 'tre', 't w', 'to ' ]
console.log('Matching "." in a string', allPeriods); // Output : [ '.', '.' ]
console.log('Matching charactes that comes before "."', matchBeforePeriod); // Output : [ 't.', 't.' ]

//Using \w operator
//Using \W will match all the characters that are not words
const word = str.match(/\w/g); //Matches any word character (alphanumeric & underscore);
const wordLength = str.match(/\w{4}/g); // Matches all the words that have 4 characters
const wordLengthApprox = str.match(/\w{4,5}/g); // Matches all the words that have 4 to 5 characters
console.log('matching word characters', word); // Output : [ 'T', 'h', 'e', 'f', 'a', 't', 'c', 'a', 't', 'r', 'a', 'n', 'd', 'o', 'w', 'n', 't', 'h', 'e', 's', 't', 'r', 'e', 'e', 't', 'I', 't', 'w', 'a', 's', 's', 'e', 'a', 'r', 'c', 'h', 'i', 'n', 'g', 'f', 'o', 'r', 'm', 'o', 'u', 's', 'e', 't', 'o', 'e', 'a', 't', '1']
console.log('Matching 4 letter word', wordLength); // Output : [ 'down', 'stre', 'sear', 'chin', 'mous' ]
console.log('Matching 4 to 5 letter word', wordLengthApprox); // Output : [ 'down', 'stree', 'searc', 'hing', 'mouse' ]

//Using \s operator
//Using \S will match all the characters that are not whitespaces
//Matches all the whitespaces in a string
const whitespace = str.match(/\s/g);
console.log('Matching whitespaces in a string', whitespace); // Output : [ ' ', ' ', ' ',  ' ', ' ', ' ', '\n', ' ', ' ', ' ', ' ',  ' ', ' ', ' ', ' ',  ' ' ]

//Grouping
//All the characters inside of a group
const group = str.match(/[fc]at/g); //Matches all the characters that start with 'f' or 'c' and ends with 'at'
const groupAZ = str.match(/[a-z]n/g); //Matching using ranges
const groupUsingBracket = str.match(/(t|T)he/g); //Matching using own group
console.log('Matching characters that end with preceding token', group); // Output : [ 'fat', 'cat' ]
console.log('Matching characters that start with "a-z" and ends with preceding token', groupAZ); // Output : [ 'an', 'wn', 'in' ]
console.log('Matching characters that start with "t" or "T" and ends with "he"', groupUsingBracket); // Output : [ 'The', 'the' ]

// Using ^ indicator
// Matches the beginning of a line
const caret = str.match(/^I/gm);
console.log('Matching uing caret indicator', caret); // Output : [ 'I' ]

//using $ indicator
// Matches the end of a line
const dollarSign = str.match(/\.$/gm);
console.log('Matching characters at the end of a line', dollarSign); // Output : [ '.', '.' ]

//Look behind
const positiveLookBehind = str.match(/(?<=[tT]he)./g); //Matches any character that is followed by the preciding token 'the'
const negativeLookBehind = str.match(/(?<![tT]he)./g); //Matches any character that is not followed by the preciding token 'the'
console.log('Matching characters followed by the word "the" using positive look behind', positiveLookBehind); // Output : [ ' ', ' ' ]
console.log('Matching characters not followed by the word "the" using negative look behind', negativeLookBehind); // Output : [ 'T', 'h', 'e', 'f', 'a', 't', ' ', 'c', 'a', 't', ' ', 'r', 'a', 'n', ' ', 'd', 'o', 'w', 'n', ' ', 't', 'h', 'e', 's', 't', 'r', 'e', 'e', 't', '.', 'I', 't', ' ', 'w', 'a', 's', ' ', 's', 'e', 'a', 'r', 'c', 'h', 'i', 'n', 'g', ' ', 'f', 'o', 'r', ' ', 'm', 'o', 'u', 's', 'e', ' ', 't', 'o', ' ', 'e', 'a', 't', '.', ' ', '1', ' ', '*', ' ', '_', ' ', 't', 'e', 'x', 't', '.' ]

//Look forward
const positiveLookForward = str.match(/.(?=at)/g); //Matches any character that is followed by "at"
const negativeLookForward = str.match(/.(?!at)/g); //Matches any character that is not followed by "at"
console.log('Matching characters after the preciding token using positive look forward', positiveLookForward); // Output : [ 'f', 'c', 'e' ]
console.log('Matching characters after the preciding token using negative look forward', negativeLookForward); // Output : [ 'T', 'h', 'e', ' ', 'a', 't', ' ', 'a', 't', ' ', 'r', 'a', 'n', ' ', 'd', 'o', 'w', 'n', ' ', 't', 'h', 'e', ' ', 's', 't', 'r', 'e', 'e', 't', '.', 'I', 't', ' ', 'w', 'a', 's', ' ', 's', 'e', 'a', 'r', 'c', 'h', 'i', 'n', 'g', ' ', 'f', 'o', 'r', ' ', 'm', 'o', 'u', 's', 'e', ' ', 't', 'o', ' ', 'a', 't', '.', ' ', '1', ' ', '*', ' ', '_', ' ', 't', 'e', 'x', 't', '.' ]
