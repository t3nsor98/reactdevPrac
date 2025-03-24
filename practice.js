var countDays = function (days, meetings) {
  let daysArr = [];
  for (let i = 1; i <= days; i++) {
    daysArr.push(i);
  }
  meetings.forEach((each) => {
    daysArr.splice(each[0] - 1, each[1] - each[0]);
  });

  return daysArr.length;
};
