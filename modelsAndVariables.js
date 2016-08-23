var ticksPerMinute = 6000;
var gameTick = 6000;
var currency = {suncoins:10, energy:100, addEnergy: Date.now()}; //100 is the max energy
var actionEnergyAmount = 10;
var toDoListEnergy = 5;
var journalSuncoins = 20;
var sunFertCost = 1;
var timedEnergy = 5;
var energyMax = 100;
var boardWidth = 7;
var boardLength = 4;
var teenPoints = 20;
var adultPoints = 50;
var waterTimer = 1 * ticksPerMinute; // the higher the number, the longer it'll take for water to "evaporate."
var fertilizerTimer = 3 * ticksPerMinute; // the higher the number, the longer it'll take for fertilizer to disappear.


//Tutorial
var tutorialOn = false;
var flashLoop = false;
var tutorialCounter = 0;
var textCounter = 0;


var badges = [
  {
    name: "1st Journal", 
    bImage: "<img src='./assets/1st_journal_badge.png'>",
    acquired:false
  },
  {
    name: "Finish Tutorial",
    bImage: "<img src='./assets/exclamation_alert.png'>",
    acquired:false
  }];

var noBadge = "<img src='./assets/empty_badge.png'>";

var graphicId = [
  {name:"blank", state:[]},
  {name:"rose", state:[]},
  {name:"tulip", state:[]},
  {name:"sunflower", state:[]},
  {name:"house", state:[]},
  {name: "alert", state:[]},
  {name: "currency", state:[]}
  ];
  //GraphicId[0].state[0] is the default which has nothing to layer at all.
graphicId[0].state[0] = "<img src='./assets/blank.png'>";
graphicId[1].state[0] = "<img src='./assets/stage_1_baby.png'>";
graphicId[1].state[1] = "<img src='./assets/stage_2_teen.png'>";
graphicId[1].state[2] = "<img src='./assets/stage_3_rose.png'>";
graphicId[2].state[0] = "<img src='./assets/stage_1_baby.png'>";
graphicId[2].state[1] = "<img src='./assets/stage_2_teen.png'>";
graphicId[2].state[2] = "<img src='./assets/stage_3_tulip.png'>";
graphicId[3].state[0] = "<img src='./assets/stage_1_baby.png'>";
graphicId[3].state[1] = "<img src='./assets/stage_2_teen.png'>";
graphicId[3].state[2] = "<img src='./assets/stage_3_sunflower.png'>";
graphicId[4].state[0] = "<img src='./assets/house.png'>";
graphicId[5].state[0] = "<img src='./assets/exclamation_alert.png'>";
graphicId[6].state[0] = "<img src='./assets/energy_icon.png'>";
graphicId[6].state[1] = "<img src='./assets/suncoin_icon.png'>";

//This is the default cell state at the beginning of the game.
gameBoard = new Array(boardLength); 
for (var i = 0; i < boardLength; i++) 
{
  gameBoard[i] = new Array(boardWidth);
  for (var j = 0; j < boardWidth; j++)
  {
    gameBoard[i][j] = {
      needTerraform: true,
      type: "blank",
      objectId: 0,
      stateId: 0,
      needFertilizer: true,
      nextFertilizer: Date.now(),
      harvest: false,
      growthPoints: 0,
      needWater: true,
      nextWater: Date.now(),
      effects: false,
      usable: true
    };
  }
}