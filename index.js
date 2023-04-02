function saturdayFun(x = "roller-skate") {
  return `This Saturday, I want to ${x}!`;
}

function mondayWork(x = "go to the office") {
  return `This Monday, I will ${x}.`;
}


const wrapAdjective = function (num="*") {
  return function (name="special") {
    return `You are ${num}${name}${num}!`;
  };
};
