import type { NextApiRequest, NextApiResponse } from 'next'
const wikipediaDeadOrAlive = require('wikipediadeadoralive');
const wikipediaDeadOrAlivesp = require('./spanishWikipedia/index');
const wikipediaDeadOrAliveen = require('./englishWikipedia/index');

const deadOrAlive = async (name:string) => {
    console.log("checking data")
    try {
        console.log("checking english")
      const result = await wikipediaDeadOrAliveen.getStatus(name);
     // console.log(result)
      if((result.description=== 'Not found') || (typeof(result)==="undefined"))//no data retrieved, check in spanish
      {
        console.log("checking spanish")
        const result = await wikipediaDeadOrAlivesp.getStatus(name);
        //console.log(result);
        return result;
      }
      else
       return result;
     
    } catch (e) {
      // Oh no!
    }
  };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const  {nombre} = req.query;
  console.log(`nombre a checkear: ${nombre}`);
    let name:string=nombre as string;
    const result=await deadOrAlive(name);
    console.log(`La API devuelve ${JSON.stringify(result)}`);
  res.status(200).json(result)
}