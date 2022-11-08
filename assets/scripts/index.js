window.onload = () => {
    fetch('https://peapix.com/bing/feed?country=us')
	.then((response) => response.json())
	.then((data) => {
        let selectedWallpaper = Math.floor(Math.random() * 7)
		let imageUrl = data[selectedWallpaper].imageUrl;
        document.body.style.backgroundImage = "url('" + imageUrl + "')";

        let infoText = document.getElementById("wallpaper-info-text");
        infoText.innerText = data[selectedWallpaper].title;
        infoText.href = data[selectedWallpaper].pageUrl;
    }).catch((error) => console.error);
}