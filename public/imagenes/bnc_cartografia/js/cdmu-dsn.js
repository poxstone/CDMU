;
var util = {
  agent_version : function(){
    var nav_list = ['MSIE_11p','MSIE','Firefox','Chrome','Opera','Safari'];
    navegador = navigator.userAgent;
    for(i=0; i < nav_list.length; i++){
      var regexp = new RegExp(nav_list[i],'i');
      if( nav_list[i]=='MSIE_11p' ){
        //msie11+
        is_navigator = ( navegador.match(/Trident\/\d+.+rv:\d+/i) )? [nav_list[i]] : null;
      }else{
        var is_navigator = ( nav_list[i].match('MSIE') )? navegador.match(/MSIE \d+/i) : navegador.match(nav_list[i]);
      }
      //console.log(is_navigator  );
      //si es el navegador ponga la clase
      if( is_navigator ){
        var clase = is_navigator[0].replace(' ','_').toLowerCase();
        var clase_actual = document.body.getAttribute('class');
        document.body.setAttribute( 'class', clase_actual+' '+clase );
        break;
      }
    }
  }
};
util.agent_version();