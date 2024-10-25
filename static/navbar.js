function loadNavbar() {
    const navbar = `
    <div class="topnav">
        <div class="left-icons">
            <a href="index.html">
                <img src="static/home_icon.svg" style="width:3em;height:3em" alt="Home">
            </a>
        </div>
        <div class="right-icons">
            <a href="static/CV.pdf" target="_blank" download="Vincent_Onggo_Resume.pdf">
                <img src="static/folder_icon.svg" style="width:3em;height:3em" alt="Download PDF">
            </a>
            <a href="index.html#info-page"><img src="static/info_icon.svg" style="width:3em;height:3em" alt="Info"></a>
        </div>
    </div>
    `;

    document.getElementById('navbar').innerHTML = navbar;
}

// Call the function to load the navbar when the page loads
document.addEventListener("DOMContentLoaded", loadNavbar);
