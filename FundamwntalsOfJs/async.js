
async function abcd() {
    var blob = await fetch(`https://randomuser.me/api/`);
    var res = await blob.json();
    console.log(res.results[0].name)
}
abcd()