window.onload = () => {
    fetch('https://peapix.com/bing/feed?country=us')
	.then((response) => response.json())
	.then((data) => {
		let imageUrl = data[0].imageUrl;
        document.body.style.backgroundImage = "url('" + imageUrl + "')";

        let infoText = document.getElementById("wallpaper-info-text");
        infoText.innerText = data[0].title;
        infoText.href = data[0].pageUrl;
    }).catch((error) => console.error);
}