const fetch = require('node-fetch');

const WIKIPEDIA_HOST = 'en.wikipedia.org';

const getWikipediaURL = (pageName) => {
  return `https://${WIKIPEDIA_HOST}/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${pageName}`;
}

const wikipediaDeadOrAliveEn = {
  getStatus: async (pageName) => {
    // todo what if pageName empty
    if (! pageName || pageName.length === 0) {
      throw new Error('pageName not provided!');
    }
    console.log("checkeando pagina en inglés");
    const response = await fetch(getWikipediaURL(pageName));

    if (response.status !== 200) {
      throw new Error(`Wikipedia responded with status code ${response.status}!`);
    }
    
    console.log("checkeando 2");

    const pageSummary = await response.json();
    console.log("checkeando 3");

    let extractText = pageSummary.query.pages[Object.keys(pageSummary.query.pages)[0]].extract;
    console.log(`checkeando: ${extractText}`);

    if ((! extractText)||(typeof extractText==='undefined')) {
      console.log("checkeando 4.5");
      return {
        name: pageName.replace(/_/g, ' '),
        dead:"Not Found",
        died:"N/A",
        description:"Not found"
      };
      //throw new Error('No extract: Page doesn\'t exist, or wrong type of page!');
    }
    console.log("checkeando 4");
    extractText = extractText.replace(/Jr./g, 'Jr');
    extractText = extractText.replace(/Sr./g, 'Sr');

    const firstSentence = extractText.substring(0, extractText.indexOf('.') + 1);

    const openBracketPos = firstSentence.indexOf('(');
    const closeBracketPos = firstSentence.lastIndexOf(')');

    const descriptionPart1 = firstSentence.substring(0, openBracketPos).trim();
    const descriptionPart2 = firstSentence.substring(closeBracketPos + 1).trim();
    const description = `${descriptionPart1}${descriptionPart2.startsWith(',') ? '' : ' '}${descriptionPart2}`;
    
    let datePart = firstSentence.substring(openBracketPos, closeBracketPos + 1).trim();
    const firstSemicolonPos = datePart.indexOf(';');
    console.log("checkeando 5");
    if (firstSemicolonPos !== -1) {
      datePart = datePart.substring(firstSemicolonPos + 1).trim();
    }

    const dead = datePart.indexOf('–') !== -1;

    let died = null;

    if (dead) {
      died = datePart.substring(datePart.lastIndexOf(' ') + 1, datePart.length - 1);
    }

    return {
      name: pageName.replace(/_/g, ' '),
      dead,
      died,
      description
    };
  }
};

module.exports = wikipediaDeadOrAliveEn;