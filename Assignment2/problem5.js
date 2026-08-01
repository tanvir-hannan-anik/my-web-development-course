function averageResponseTime(times) {
  let obj = Object.values(times);
  if (Array.isArray(times) === false) {
    return "Invalid";
  }

  if (times.length == 0) {
    return "Invalid";
  }

  let total = 0;
  for (let i = 0; i < times.length; i++) {
    if (typeof times[i] !== "number") {
      return "Invalid";
    } else {
      total = total + times[i];
    }
  }

  return total / times.length;
}

let result = averageResponseTime([]);
console.log(result);
