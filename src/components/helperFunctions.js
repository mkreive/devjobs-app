export const filterByFullTime = function (jobs) {
    return jobs.filter((job) => job.contract === 'Full Time');
};
