//Javascript Doucment
function validasi() {
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	if (user == "" && pass == "") {
		alert('Username / Password Tidak Boleh Kosong');
		return false;
	}
	else if (user == "aisyah" && pass == "aisyah"){
		alert('Anda Berhasil Login');
		window.location = "home login.html";
		return false;
	}else{
		alert("Username / Password Anda Salah, Coba Lagi");
	}
		
}