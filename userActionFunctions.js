function waterPlant(x,y,id){
  if(gameBoard[x][y].type!="blank" && gameBoard[x][y].type!="house"){
    gameBoard[x][y].needWater=false;
    playSound("water")
    gameBoard[x][y].nextWater=Date.now() + waterTimer;
    if (gameBoard[x][y].stateId == 0 && gameBoard[x][y].growthPoints <= teenPoints)
      { gameBoard[x][y].growthPoints += 1;}
    if (gameBoard[x][y].stateId == 1)
      { gameBoard[x][y].growthPoints += 1;}


    //tutorial
      flashLoop = 10;
      tutorialCounter = 4;
  }
}

function harvestPlant(x,y,id){
  if(gameBoard[x][y].stateId==2){
    playSound("pop");
    gameBoard[x][y].type = "blank";
    gameBoard[x][y].stateId = 0;
    gameBoard[x][y].objectId = 0;
    gameBoard[x][y].harvest = true;
    gameBoard[x][y].growthPoints = 0;
    gameBoard[x][y].effects = false;
    currency.suncoins += 10;
    updateEnergyAndSuncoins();
  }
}

function fertilizePlant(x, y, id){
  if(currency.energy >= actionEnergyAmount && currency.suncoins >= sunFertCost && gameBoard[x][y].type!="blank" && gameBoard[x][y].type!="house"){
    gameBoard[x][y].needFertilizer = false;
    gameBoard[x][y].nextFertilizer = Date.now() + fertilizerTimer;
    playSound("jingle");
    currency.energy = currency.energy - actionEnergyAmount;
    currency.suncoins = currency.suncoins - sunFertCost;
    updateEnergyAndSuncoins();

    if (gameBoard[x][y].stateId == 0 && gameBoard[x][y].growthPoints <= teenPoints)
    {
      gameBoard[x][y].growthPoints += 10;
      if (gameBoard[x][y].growthPoints > teenPoints)
      {
        gameBoard[x][y].growthPoints = teenPoints;
      }
    }
    if (gameBoard[x][y].stateId == 1)
    { gameBoard[x][y].growthPoints += 10;}


  //tutorial
      flashLoop = 10;
      tutorialCounter = 5;
  }
}

function terraformCell(x,y,id) {
  //  if it's a house don't do it, or if it's already terraformed
  if(currency.energy >= actionEnergyAmount && gameBoard[x][y].usable==true && gameBoard[x][y].needTerraform==true)
  {
    gameBoard[x][y].needTerraform = false;
    playSound("rake")
    currency.energy = currency.energy - actionEnergyAmount;
    updateEnergyAndSuncoins()

    //tutorial
      flashLoop = 10;
      tutorialCounter = 2;

  }
  else if(currency.energy>= actionEnergyAmount && gameBoard[x][y].type!= "blank" && gameBoard[x][y].usable == true && gameBoard[x][y].stateId != 2){
    gameBoard[x][y].objectId = 0;
    gameBoard[x][y].stateId = 0;
    gameBoard[x][y].needWater = true;
    gameBoard[x][y].type = "blank";
    gameBoard[x][y].needFertilizer = true;
  }
}

function placeGraphic(x,y,id, dropped){
  if(gameBoard[x][y].type=="blank" && currency.energy >= actionEnergyAmount){
    if(dropped=="house"){
      $(".toolbar").css("width", "42%");
      gameBoard[x][y].type = "house";
      playSound("jingle");
      gameBoard[x][y].objectId = 4;
      gameBoard[x][y].stateId = 0;
      gameBoard[x][y].usable = false;

      //tutorial
      flashLoop = 10;
      tutorialCounter = 1;

    }
  }
  if(gameBoard[x][y].needTerraform==false && gameBoard[x][y].type=="blank" && currency.energy >= actionEnergyAmount)
  {
    if (dropped=="rose") {
      gameBoard[x][y].type = "rose";
      gameBoard[x][y].objectId = 1;
      gameBoard[x][y].stateId = 0;
    }
    else if (dropped=="tulip") { 
      gameBoard[x][y].type = "tulip";
      gameBoard[x][y].objectId = 2;
      gameBoard[x][y].stateId = 0;

      //tutorial
      flashLoop = 10;
      tutorialCounter = 3;
    }
    else if (dropped=="sunflower") {
      gameBoard[x][y].type = "sunflower";
      gameBoard[x][y].objectId = 3;
      gameBoard[x][y].stateId = 0;
    }
    /*You would need to add in new "else if" statements here if you wanted to include new flowers or decorations.*/
    currency.energy = currency.energy - actionEnergyAmount;
    updateEnergyAndSuncoins();
  }
}

function unlockGraphic(lockedItemId, cost){
  var flowerCost = cost;
  if(currency.suncoins>=flowerCost){
    playSound("click")
    currency.suncoins = currency.suncoins - flowerCost;
    updateEnergyAndSuncoins();
    $("#" + lockedItemId + "01").show();
    $("#" + lockedItemId).hide();
  }
}