/**
 * Turns an object, to a url query string.
 *
 * @param {Object} params The params to encode and add to the url.
 * @returns
 */
 export const encodeUrlParams = (params: Object) => {
    return Object.keys(params)
        .map(key => {
            if (Array.isArray(params[key])) {
                return params[key].map(item => [`${key}[]`, item].map(encodeURIComponent).join('=')).join('&');
            }

            return [key, params[key]].map(encodeURIComponent).join('=');
        })
        .join('&');
};

/**
 * Builds query string to attach to the url.
 * e.g. Makes this `{id: 1}` to this `?id=1`
 *
 * @param {Object} queryParams
 * @returns
 */
 export const buildQueryString = (queryParams: Object) => {
    const query = queryParams != null ? { ...queryParams } : {};

    let queryString = encodeUrlParams(query);
    if (queryString.length > 0) {
        queryString = '?' + queryString;
    }
    return queryString;
};
