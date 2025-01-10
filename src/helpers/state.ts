let isTracking = false;
let trackingInterval: NodeJS.Timeout | undefined;

export function getTrackingStatus() {
    return isTracking;
}

export function setTrackingStatus(status: boolean) {
    isTracking = status;
}

export function getTrackingInterval() {
    return trackingInterval;
}

export function setTrackingInterval(interval: NodeJS.Timeout | undefined) {
    trackingInterval = interval;
}
