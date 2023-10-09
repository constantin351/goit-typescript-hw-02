/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum weekDay {
  Monday,
  Tuesday,
  Wednsday,
  Thirsday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: weekDay): boolean {
  if (day === weekDay.Saturday || day === weekDay.Sunday) {
    return true;
  } else {
    return false;
  };
};