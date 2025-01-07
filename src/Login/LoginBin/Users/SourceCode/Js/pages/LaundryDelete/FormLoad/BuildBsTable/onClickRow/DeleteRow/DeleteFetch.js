const StartFunc = async ({ inRowpk }) => {
    let LocalUrl = `/${inRowpk}`;

    let LocalFetchObj = {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    };

    let responce = await fetch(LocalUrl, LocalFetchObj);

    return responce;
};

export { StartFunc };