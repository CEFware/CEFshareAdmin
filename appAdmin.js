Router.route('/stripe', function () {
    this.response.writeHead(200, {'Content-Type': 'text/html'});
    this.response.end("<!DOCTYPE html>\n"+'<html><head><script type="text/javascript">function storeAndClose() {window.close();}</script></head><body onload="storeAndClose()"><p id="completedText" style="display:none;">Login completed. <a href="#" onclick="window.close()">Click here</a> to close this window.</p></body></html>','utf-8');

    var str=this.request.query.state;

    this.request.query['user_id']=str.slice(str.indexOf('/')+1, str.indexOf('http'));
    this.request.query.state=str.substr(0, str.indexOf('/'));

    var newurl=str.substr(str.indexOf('http'),str.length+1);
    if ((newurl.match(/.cefware.com/g) || []).length>1)
        newurl.replace('.cefware.com','');
    console.log(newurl);
    HTTP.get(newurl, {params: this.request.query}, function (e,r) {
	if (!e) {
	} else {
	    console.log(e);
	};
    });


}, {where:'server'});
