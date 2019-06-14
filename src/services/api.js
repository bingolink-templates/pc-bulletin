import util from 'ser/util'

module.exports = {
    getBulletins(success, error){
        app.linkplugin.ajax({
            url: window.env.comwidgetsUri + '/notice/list?limit=5&offset=0',
            success: function(res){
                var datas = res.data;
                util.each(datas, function(item){
                    try{
                        var url = JSON.parse(item.action).web;
                    } catch(e){}
                    item.url = url || '';
                })
                if(datas.length > 0)
                    success(datas);
                else 
                    error(i18n.ErrorData);
            },
            error: function(err){
                var m = '';
                try{
                    m = JSON.parse(err.responseText).message;
                }catch(e){}
                error(m || i18n.ErrorLoadData);
            }
        }) 
    }
}
