
const contests = require('./data/contest.json');

function getContest(id) {
  return contests.find(c => c.id === id);
}

function getContests() {
  return contests;
}

function addContest({id, code, title, description}) {
  let contest = getContest(id);
  contest.code = code;
  contest.title = title;
  contest.description = description;
  return contest;
}

module.exports = {
  getContest: getContest,
  getContests: getContests,
  addContest: addContest
};