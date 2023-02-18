import type { NextApiRequest, NextApiResponse } from 'next'
const wikipediaDeadOrAlive = require('wikipediadeadoralive');
const wikipediaDeadOrAlivesp = require('./spanishWikipedia/index');
const wikipediaDeadOrAliveen = require('./englishWikipedia/index');

const deadOrAlive = async (name:String) => {
    console.log("checking data")
    try {
        console.log("checking english")
      const result = await wikipediaDeadOrAliveen.getStatus(name);
      
      console.log(`Resultado de la búsqueda: ${result}`);
      if((result.description=== ' ') || (result==="undefined"))//no data retrieved, check in spanish
      {
        console.log("checking spanish")
        const result = await wikipediaDeadOrAlivesp.getStatus(name);
        console.log(result);
      }
      return result;
    } catch (e) {
      // Oh no!
    }
  };

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    let name="IlloJuan"
    const result=deadOrAlive(name);

  res.status(200).json({ name: 'John Doe' })
}