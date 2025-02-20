import osUtils from 'os-utils';

const POLLING_INTERVAL = 500;

export function pollRecources(){
    setInterval(() => {
        getCpuUsage();
    }, POLLING_INTERVAL);
}

function getCpuUsage(){
    osUtils.cpuUsage((percentage) => console.log(percentage));
}