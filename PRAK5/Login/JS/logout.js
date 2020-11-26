// JavaScript Document
function logout() {
	var yakin = confirm("Are you sure?");
	if (yakin) {
		document.write("Logout");
		window.location = "login.html";
	} else {
		document.write("Thanks :)");
		window.location = "home login.html"
	}
}