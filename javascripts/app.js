// Rover Object Goes Here
// ======================
function Rover(direction = "N", x = 0, y = 0) {
  this.direction = "N";
  this.x = x;
  this.y = y;
  this.travelLog = this.x + ", " + this.y;
}
let rover = new Rover();
// ======================
function turnLeft(rover) {
  if (rover.direction === "N") {
    rover.direction = "W";
  } else if (rover.direction === "E") {
    rover.direction = "N";
  } else if (rover.direction === "S") {
    rover.direction = "E";
  } else if (rover.direction === "W") {
    rover.direction = "S";
  }
  console.log("turnLeft was called!");
  console.log("Current direction is now " + rover.direction);
}

function turnRight(rover) {
  if (rover.direction === "N") {
    rover.direction = "E";
  } else if (rover.direction === "E") {
    rover.direction = "S";
  } else if (rover.direction === "S") {
    rover.direction = "W";
  } else if (rover.direction === "W") {
    rover.direction = "N";
  }
  console.log("turnRight was called!");
  console.log("Current direction is now " + rover.direction);
}

function moveForward(rover, distance) {
  console.log("moveForward was called");
  if (rover.direction === "N" && rover.y + distance <= 10) {
    console.log("Las coordenadas anteriores eran " + rover.travelLog);
    rover.y = rover.y + distance;
    rover.travelLog = rover.x + ", " + rover.y;
  } else if (rover.direction === "E" && rover.x + distance <= 10) {
    console.log("Las coordenadas anteriores eran " + rover.travelLog);
    rover.x = rover.x + distance;
    rover.travelLog = rover.x + ", " + rover.y;
  } else if (rover.direction === "S" && rover.y + distance <= 10) {
    console.log("Las coordenadas anteriores eran " + rover.travelLog);
    rover.y = rover.y - distance;
    rover.travelLog = rover.x + ", " + rover.y;
  } else if (rover.direction === "W" && rover.x + distance <= 10) {
    console.log("Las coordenadas anteriores eran " + rover.travelLog);
    rover.x = rover.x - distance;
    rover.travelLog = rover.x + ", " + rover.y;
  } else if (rover.y + distance > 10) {
    console.log("¡Aguas! Nuestra cuadrícula solo es 10x10!");
    console.log("Las coordenadas son " + rover.travelLog);
    console.log(
      "No se puede salir de la cuadrícula. O sea las coordenadas tienen que ser menos de 10."
    );
  }
}

function receiveInputs(commandsString, roverObject) {
  for (i = 0; i < commandsString.length; i++) {
    if (commandsString[i] === "f") {
      moveForward(roverObject, 1);
    } else if (commandsString[i] === "l") {
      turnLeft(roverObject);
    } else if (commandsString[i] === "r") {
      turnRight(roverObject);
    }
  }
}
