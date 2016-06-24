// cell attributes

// graphicId is an array of objects
// each object is a name and array that holds states
var graphicId = [
  { name: "blank", state:[] }
  { name: "rose", state:[] }
  { name: "tulip", state:[] }
  { name: "sunflower", state:[] }
  { name: "house", state:[] }
]

//example
foreach cell in game board
{
  needTerraform: bool,
  type: "blank",
  drawLayers: 0,
  stage: 0,
  needFertilizer: bool,
  growthPoints: 0,
  needWater: true,
  nextWater: Date.now() + 5 * (tickesPerMinute)
}
