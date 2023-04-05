
function gg(){
    let link = document.getElementById("link").value
    // console.log(link)

    const site = document.createElement("iframe");
    // site.src = link;
    site.src = "https://github.com/Danielm2003/Fruandes-test"

    document.body.appendChild(site);
}