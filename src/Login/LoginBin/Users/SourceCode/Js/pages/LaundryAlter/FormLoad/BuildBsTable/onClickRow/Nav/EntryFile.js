const StartFunc = async ({ inRowpk }) => {
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL("./LaundryUserAlter.html", url);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    new_url.searchParams.append('UuId', inRowpk);

    window.location.href = new_url.href;

};

export { StartFunc };

