function parse_query(query){
	if(query === undefined) return;
	var queryies = query.split("&");
	var ret = {};
	for(var key in queryies){
		var obj = queryies[key].split("=");
		ret[obj[0]] = obj[1];
	}
	return ret;
}

function parse_url(){
	var url = location.href;
	var parsed = url.match(/(\w*):\/\/([\w|\.|-]*)\/(.*)/);
	return {
		method:parsed[1],
		domain:parsed[2],
		directory:parsed[3].split("?")[0],
		query:parsed[3].split("?")[1]
	}
}

function login(user,passwd){
	if(user === undefined || passwd === undefined) return;
	var login_img = document.getElementById("login_img");
	login_img.src = "https://acsu.shinshu-u.ac.jp/ActiveCampus/module/Login.php?mode=Login&clickcheck=0&login="+user+"&passwd="+passwd;
}

window.onload = function(){
	var parsed_url = parse_url();
	if(parsed_url.method === "http"){
		location.replace("https://" + parsed_url.domain + "/" + parsed_url.directory + (parsed_url.query !== undefined?"?" + parsed_url.query:""));
	}
	var query = parse_query(parsed_url.query);
	login(query.id, query.passwd);
}
