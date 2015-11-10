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
    lnk_events: function(link,option){
        var $lnk = jQuery(link);
        var vars = cdmu_links.vars;
        var lnk_id = $lnk.attr('href').replace('#','') || null;
        var $sectionShow = jQuery('#'+lnk_id);
        var lnk_class = $sectionShow.attr('class').match(/is-\w+/)[0];
        
        if(option=='click'){
            
            lnk_class = lnk_class +' '+ lnk_id;//add id secction
            
            vars.$din_sections.removeClass('show').addClass('hide');//hide all
            $sectionShow.removeClass('hide').addClass('show');//show section
            vars.$cdmu_general.attr('class','').addClass(lnk_class);//add class from id section
            
        }else if(option=='mouseenter'){
            
            vars.$cdmu_general.addClass( 'hover_'+lnk_id );//add class from id section
            
        }else if(option=='mouseleave'){
            var contGent_class = vars.$cdmu_general.attr('class').match(/hover_\w+/) || '';
            
            if( contGent_class ){
                contGent_class = contGent_class[0];
            }
            
            vars.$cdmu_general.removeClass(contGent_class);
            
        }else if(option=='quit'){
            var contGent_class = vars.$cdmu_general.attr('class','');
            
        }
        
    },
    quit: function(link,option){
        
        var vars = cdmu_links.vars;
        vars.$din_sections.removeClass('show').addClass('hide');//hide all
        vars.$cdmu_general.attr('class','');
        
    },
    actions: function(){
        var vars = cdmu_links.vars;
        
        vars.$din_lnks.each(function(ind,ele){
            var $lnk = jQuery(this);
            
            
            $lnk.hover(
              function(e){
                cdmu_links.lnk_events( $lnk, 'mouseenter' );
              
              },function(e){
                cdmu_links.lnk_events( $lnk, 'mouseleave' );
              
            });
            
            
            $lnk.click(function(e){
                e.preventDefault();
                
                cdmu_links.lnk_events( $lnk, 'click' );

            });
        });
        
        
    },
    ini: function(){
        cdmu_links.vars = {};
        var vars = cdmu_links.vars;
        vars.$cdmu_general = jQuery('#CDMU-CONT');
        vars.$din_sections = jQuery('#DIN-CON .intercambiable');
        vars.$din_lnks = jQuery('.lnk-gram a');
        vars.$lnks_quit = jQuery('a.CDMU-close');
        

        if( vars.$din_sections.length && vars.$din_lnks.length ){
            cdmu_links.actions();
        }
    }
};
jQuery(function(){cdmu_links.ini();});

//Preload images
var loadsImages= {
    img: [],
    ini: function(){
        
        var url = jQuery('script[src*="cdmu-dsn.js"]').attr('src').replace('js/cdmu-dsn.js','img/banner/');
        
        
        for(i=0; i<=8; i++){
            var img = document.createElement('img');
            loadsImages.img.push(img);
            img.src = url+'bg-0'+i+'.png';
            
        }

    }  
};jQuery(function(){loadsImages.ini();});

