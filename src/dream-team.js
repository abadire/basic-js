const CustomError = require("../extensions/custom-error");

function createDreamTeam(members)
{
  if (!Array.isArray(members)) return false;
  return members.filter(x => typeof x === 'string')
                .map(x => x.trim().toUpperCase())
                .sort()
                .reduce((acc, curr) => acc += curr[0], '');
};

module.exports = createDreamTeam;

// console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]));