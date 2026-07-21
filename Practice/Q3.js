/* 3. Smart Traffic Signal ⭐⭐⭐
Input

Signal Color
Emergency Vehicle?

Rules

Green
→ Go

Yellow
→ Slow Down

Red
→ Stop

But

If Emergency Vehicle == true
Always print
Give Way Immediately */

let Signal = "green";
let emergencyVehicle = false;

if (emergencyVehicle == true) {
  console.log("Give Way Immediately");
} else if (Signal == "red") {
  console.log("Stop");
} else if (Signal == "yellow") {
  console.log("Slow Down");
} else if (Signal == "green") {
  console.log("Go");
}
