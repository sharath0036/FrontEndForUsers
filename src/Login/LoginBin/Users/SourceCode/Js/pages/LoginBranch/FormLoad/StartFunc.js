import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";

const StartFunc = () => {
    LocalDeleteCookie();
    StartFuncAddListeners();
};

let LocalDeleteCookie = () => {
    let lcoalKTokenId = "KSToken";
    document.cookie = `${lcoalKTokenId}=; expires=Thu, 01 Jan 1947 00:00:00 UTC; path=/;`;
};

export { StartFunc };
