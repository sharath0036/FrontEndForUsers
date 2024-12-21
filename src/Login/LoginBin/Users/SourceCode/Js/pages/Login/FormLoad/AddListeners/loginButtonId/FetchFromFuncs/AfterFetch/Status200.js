import ConfigJson from '../../../../../Config.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalInKey = getUrlQueryParams({ inGetKey: "InKey" });

    let LocalUserName = jFLocalyourUsername();

    switch (jVarLocalInKey) {
        case "Branch":
            localStorage.setItem("BranchName", LocalUserName)
            window.location.href = ConfigJson.RedirectToUrl;

            break;
        case "Factory":
            localStorage.setItem("FactoryName", LocalUserName)
            window.location.href = "/Laundry/Factory/Inward/FromBranch/FromBranchVoucher/"

            break;

        case "WashFactory":
            localStorage.setItem("FactoryName", LocalUserName)
            window.location.href = "/Laundry/Factory/Process/WashingVoucher/"

            break;

        default:
            localStorage.setItem("BranchName", LocalUserName)
            window.location.href = ConfigJson.RedirectToUrl;
            break;
    }


};

// let LocalBranchFunch = () => {
//     let LocalUserName = jFLocalyourUsername();
//     localStorage.setItem("BranchName", LocalUserName)
//     window.location.href = ConfigJson.RedirectToUrl;
// };

let jFLocalyourUsername = () => {
    let jVarLocalyourUsername = 'yourUsername'
    let jVarLocalHtmlId = document.getElementById(jVarLocalyourUsername);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};


let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };