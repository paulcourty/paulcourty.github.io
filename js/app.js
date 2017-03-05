function search() {
	var query = document.getElementById("search").value;
	open("https://www.google.com?q=" + query);
}
