import sideBarItemsJson from './sideBarItems.json' with {type: 'json'};

const StartFunc = () => {
    console.log("LocalSideBarArray : ", sideBarItemsJson);
    return sideBarItemsJson;
};

export { StartFunc };
