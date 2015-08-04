Router.route('/stripe', function () {
    this.response.writeHead(200, {'Content-Type': 'text/html'});
    this.response.end("<!DOCTYPE html>\n"+'<html><head><script type="text/javascript">function storeAndClose() {window.close();}</script></head><body onload="storeAndClose()"><p id="completedText" style="display:none;">Login completed. <a href="#" onclick="window.close()">Click here</a> to close this window.</p></body></html>','utf-8');

    var str=this.request.query.state;

    this.request.query['user_id']=str.slice(str.indexOf('/')+1, str.indexOf('http'));
    this.request.query.state=str.substr(0, str.indexOf('/'));

//console.log(str.substr(str.indexOf('http'),str.length+1));
//console.log(    HTTP.get(str.substr(str.indexOf('http'),str.length+1), {params: this.request.query, headers: this.request.headers}));
    HTTP.get(str.substr(str.indexOf('http'),str.length+1), {params: this.request.query});

}, {where:'server'});
