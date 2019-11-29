export const GET_METADATA = "GET_METADATA";

export const getMetadata = result => {
    return {
        type: GET_METADATA,
        nextPageToken: result.nextPageToken,
        totalResult: result.totalResult
    };
};
