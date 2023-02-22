import fs from 'fs';

console.log(`New analytics market to store : ${process.env.ANALYTICS_MARKET}`);

fs.writeFileSync("./" + ANALYTICS_MARKET_KEY + ".json", process.env.ANALYTICS_MARKET, { encoding: 'utf8', flag: 'w' });
