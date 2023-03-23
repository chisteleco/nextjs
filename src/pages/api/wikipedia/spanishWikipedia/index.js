const fetch = require('node-fetch');

const WIKIPEDIA_HOST = 'es.wikipedia.org';

const getWikipediaURL = (pageName) => {
  return `https://${WIKIPEDIA_HOST}/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${pageName}`;
}

const wikipediaDeadOrAliveSp = {
  getStatus: async (pageName) => {
    // todo what if pageName empty
    if (! pageName || pageName.length === 0) {
      throw new Error('pageName not provided!');
    }
    console.log("checkeando pagina en español");
    const response = await fetch(getWikipediaURL(pageName));

    if (response.status !== 200) {
      throw new Error(`Wikipedia responded with status code ${response.status}!`);
    }
    
  

    const pageSummary = await response.json();
 

    let extractText = pageSummary.query.pages[Object.keys(pageSummary.query.pages)[0]].extract;
    console.log(extractText);
    if (! extractText) {
      throw new Error('No extract: Page doesn\'t exist, or wrong type of page!');
    }

    extractText = extractText.replace(/Jr./g, 'Jr');
    extractText = extractText.replace(/Sr./g, 'Sr');

    const firstSentence = extractText.substring(0, extractText.indexOf('.') + 1);
    console.log(firstSentence)
    const openBracketPos = firstSentence.indexOf('(');
    const closeBracketPos = firstSentence.lastIndexOf(')');

    const descriptionPart1 = firstSentence.substring(0, openBracketPos).trim();
    const descriptionPart2 = firstSentence.substring(closeBracketPos + 1).trim();
    const description = `${descriptionPart1}${descriptionPart2.startsWith(',') ? '' : ' '}${descriptionPart2}`;
    
    let datePart = firstSentence.substring(openBracketPos, closeBracketPos + 1).trim();
    const firstSemicolonPos = datePart.indexOf(';');

    if (firstSemicolonPos !== -1) {
      datePart = datePart.substring(firstSemicolonPos + 1).trim();
    }

   
    const dead = datePart.indexOf('–') !== -1;

    let born=datePart.substring(datePart.length-5,datePart.length-1);
    let died = null;

    if (dead) {
      died = datePart.substring(datePart.lastIndexOf(' ') + 1, datePart.length - 1);
    }

    return {
      name: pageName.replace(/_/g, ' '),
      born,
      dead,
      died,
      description
    };
  }
};

module.exports = wikipediaDeadOrAliveSp;