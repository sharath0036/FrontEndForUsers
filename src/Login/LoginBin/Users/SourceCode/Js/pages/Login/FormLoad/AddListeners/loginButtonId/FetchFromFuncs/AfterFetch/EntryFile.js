let StartFunc = () => {
    let LocalUserName = jFLocalyourUsername();
    localStorage.setItem("BranchName", LocalUserName)

    window.location.href = "/NewOrders/HtmlFiles/Customer.html";
};

let jFLocalyourUsername = () => {
    let jVarLocalyourUsername = 'yourUsername'
    let jVarLocalHtmlId = document.getElementById(jVarLocalyourUsername);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };