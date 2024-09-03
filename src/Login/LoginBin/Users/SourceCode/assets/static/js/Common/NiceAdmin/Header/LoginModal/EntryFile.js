// import { StartFunc as StartFuncCheckCookie } from "./CheckCookie.js";
// import { StartFunc as StartFuncSetFocus } from "./SetFocus.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";

import { StartFunc as validate } from "./validate.js";

const StartFunc = ({ inSuccessFunc }) => {
    validate();

    StartFuncAddListeners({ inSuccessFunc });
};

export { StartFunc };