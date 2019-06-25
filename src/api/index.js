import urljoin from 'url-join';

/**
 * Constants
 */
const AIRLY_API_KEY = 'RXUtzImxZDGs4C3PBM8WYYepFKvg9bhh';
const AIRLY_ENDPOINT = 'https://airapi.airly.eu/v2';

/**
 * Helper methods
 */

const getErrorMessage = error =>
    (error && error.message
        ? ` ${error.message}`
        : '');

/**
 * Fetch raw JSON response from Airly API v2
 * @param {String} request URL arguments string
 * @returns {Object} JSON object
 */
const getAirlyRawData = async request => {
    if (!request || request === '') {
        throw new Error('Airly API request is empty or undefined');
    }

    const response = await fetch(
        urljoin(AIRLY_ENDPOINT, request), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': 'en', // 'pl' is working
            apikey: AIRLY_API_KEY
        }
    });

    return await response.json();
};

/**
 * Public API methods
 */

/**
 * @param {String} latitude coordinate of the given geo point
 * @param {String} longitude coordinate of the given geo point
 * @param {Number} default value 3.0; all the returned Airly installations
 *                 must be located within this limit from the given point (in km);
 *                 negative value means no limit
 * @param {Number} default value 1; maximum number of Airly installations to return;
 *                 negative value means no limit
 * @return {Object} the detailed Airly measurement object
 */
export const getRawMeasurementsNearestTo = async (
        latitude,
        longitude,
        maxDistanceKm = 3,
        maxResults = 1
) => {
    const request = `measurements/nearest?indexType=AIRLY_CAQI&lat=${latitude}` +
                    `&lng=${longitude}&maxDistanceKM=${maxDistanceKm}&maxResults=${maxResults}`;

    try {
        return await getAirlyRawData(request);
    } catch (e) {
        throw new Error(`Failed to get Airly measurements.${getErrorMessage(e)}`);
    }
};

/**
 * @return {Object} the list of all the index types supported in the API
 *                 along with lists of levels defined per each index type.
 */
export const getRawIndexesMetadata = async () => {
    const request = 'meta/indexes';

    try {
        return await getAirlyRawData(request);
    } catch (e) {
        throw new Error(`Failed to get Airly indexe(s) metadata.${getErrorMessage(e)}`);
    }
};
