//NEEDS ALL IMAGE PATHS UPDATED
<script>
var graphicId = [{name:"House", state:[0,1]},{name:"Rose", state:[0,1,2]},{name:"Tulip", state:[0,1,2]},{name:"Sunflower", state:[0,1,2]}];

graphicId[0].state[0] = "house.png";
graphicId[0].state[1] = "house_with_alert.png";
graphicId[0].state[2]="";
//Perhaps you have an alert timed if the user doesn't finish his to do list

graphicId[1].state[0] = "baby_rose.png";
graphicId[1].state[1] = "teen_rose.png";
graphicId[1].state[2] = "final_rose.png";
graphicId[1].state[3]="";

graphicId[2].state[0] = "baby_tulip.png";
graphicId[2].state[1] = "teen_tulip.png";
graphicId[2].state[2] = "final_tulip.png";
graphicId[2].state[3]="";

graphicId[3].state[0] = "baby_sunflower.png";
graphicId[3].state[1] = "teen_sunflower.png";
graphicId[3].state[2] = "final_sunflower.png";
graphicId[3].state[3]="";

//my functions i'm trying to do
function terraformCell(x,y) {
  var cell = gameboard[x,y];

  //  if it's a house don't do it, or if it's already terraformed
  if(!cell.graphicId.name="House" || cell.needsTerraform==false)
  {
    cell.needTerraform = false;
  }

}

function harvestPlant(x,y) {
  var cell = gameboard[x,y];

  //Removes a plant
  //Returns it to terraformed state
  //Increment player coins/money

  //  if it's a house don't do it, or if it's already terraformed
  if(!cell.graphicId.name="House" || cell.needsTerraform==false)
  {
    cell.needTerraform = false;
  }
  // if the cell is game state 0 and does not have a house
}


// marc's old functions

function waterTile(x,y){
  if(gameBoard[x][y].graphicId.state!="" && gameBoard[x][y].graphicId>0){
    return false;
  }
  else {
    return true;
  }
}

function terraformDirt(x,y){
  if(gameBoard[x][y].isTerraformed==false){
    return true;
  }
  else{
    return false;
  }
}

</script>
