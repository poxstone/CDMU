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

var cdmu_links= {
    actions: function(){
        var vars = cdmu_links.vars;
        
        vars.$din_lnks.each(function(ind,ele){
            var $lnk = jQuery(this);
            $lnk.click(function(e){
                e.preventDefault();
                var $showElement = jQuery($lnk.attr('href'));
                var lnk_class = $showElement.attr('class');
                lnk_class = 'cont-'+lnk_class.replace(/intercambiable /,'');
                vars.$din_con.hide();
                $showElement.show();
                vars.$cdmu_con.attr('class','').addClass(lnk_class);

            });
        });
        
    },
    ini: function(){
        cdmu_links.vars = {};
        var vars = cdmu_links.vars;
        vars.$cdmu_con = jQuery('#CDMU-CONT');
        vars.$din_con = jQuery('#DIN-CON .intercambiable');
        vars.$din_lnks = jQuery('.lnk-gram a');

        if( vars.$din_con.length && vars.$din_lnks.length ){
            cdmu_links.actions();
        }
    }
};
jQuery(function(){cdmu_links.ini();});

links = ['tradicionales','festivales','expresiones','investigacion','bandas','tesauro','vocales','introcuccion',]