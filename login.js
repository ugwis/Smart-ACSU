

function url_parse(){
	var url = location.href;
	var query = url.split("?")[1];
	if(query === undefined) return;
	var queryies = query.split("&");
	var ret = {};
	for(var key in queryies){
		var obj = queryies[key].split("=");
		ret[obj[0]] = obj[1];
	}
	return ret;
}

function login(){
	var query = url_parse();
	if(query.id === undefined || query.pass === undefined) return;
	var user = query.id;
	var passwd = query.pass;
	var login_img = document.getElementById("login_img");
	console.log(user);
	console.log(passwd);
	login_img.src = "https://acsu.shinshu-u.ac.jp/ActiveCampus/module/Login.php?mode=Login&clickcheck=0&login="+user+"&passwd="+passwd;
}
