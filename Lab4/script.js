function validateForm() {
	var email = document.getElementById("email").value;
	var comment = document.getElementById("com").value;
	var rating = document.getElementById("rate").value;
	var emailPattern = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/";
	if (email == "" || comment == "" || rating == "") {
		alert("Vui lòng không bỏ trống bất kỳ trường nào.");
		return false;
	}
	if (!emailPattern.test(email)) {
		alert("Email không hợp lệ.");
		return false;
	}
	if (isNaN(rating) || rating <= 0) {
		alert("Vui lòng nhập rating là một số hợp lệ.");
		return false;
	}
	return true;
}
