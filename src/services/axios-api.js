import axios from 'axios';
import {axiosBaseUrl} from '../utils';

const instance = axios.create({
    baseURL: axiosBaseUrl,
    timeout: 10000,
    headers: {'Content-Type': 'application/json'},
});

/**
 *
 * @param {object} config
 * @param {string} config.url
 * @param {string} config.method
 * @param {string} [config.params]
 * @param {object} [config.data]
 * @param {number} [config.timeout]
 * @param {object} [config.headers]
 *
 * @returns {Promise} Promise Object
 *
 */

export default async (config) =>
    new Promise((resolve, reject) => {
        instance(config)
            .then((res) => {
                resolve(res.data);
            })
            .catch((error) => {
                console.error('Request Failed:', error.config);

                if (error.response) {
                    console.error('Status:', error.response.status);
                    console.error('Data:', error.response.data);
                    console.error('Headers:', error.response.headers);
                } else {
                    console.error('Error Message:', error.message);
                }

                reject(error.response || error.message);
            });
    });
