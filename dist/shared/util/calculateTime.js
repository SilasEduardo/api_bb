"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
function calculateTimeDifference(entryTime, exitTime) {
    const actualExitTime = exitTime || new Date();
    const entryMoment = moment(entryTime);
    const exitMoment = moment(actualExitTime);
    const differenceInMinutes = exitMoment.diff(entryMoment, 'minutes');
    return `${differenceInMinutes} minutes`;
}
exports.default = calculateTimeDifference;
//# sourceMappingURL=calculateTime.js.map