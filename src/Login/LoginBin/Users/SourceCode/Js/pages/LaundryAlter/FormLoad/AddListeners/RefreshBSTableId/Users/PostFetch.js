import urlJson from '../../../../url.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchUrl = urlJson.GetEndPoint;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

