import ConfigJson from '../../../../../Config.json' with {type: 'json'};

let StartFunc = () => {
    let LocalUserName = jFLocalyourUsername();

    localStorage.setItem("BranchName", LocalUserName)
    window.location.href = ConfigJson.RedirectToUrl;
};

let jFLocalyourUsername = () => {
    let jVarLocalyourUsername = 'yourUsername'
    let jVarLocalHtmlId = document.getElementById(jVarLocalyourUsername);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };