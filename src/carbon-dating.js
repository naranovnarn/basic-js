const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  if ( (typeof sampleActivity) == "string" &&  isFinite(sampleActivity) && +sampleActivity <= 15 && +sampleActivity > 0) {
  sampleActivity = parseFloat(sampleActivity)
  let k = 0.693 / HALF_LIFE_PERIOD
  let t = (Math.log(MODERN_ACTIVITY / sampleActivity)) / k

  return +t.toFixed();
} else {
  return false
}
 
};



