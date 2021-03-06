;
//$.noConflict();
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
    lnk_events: function(link,option,event){
        var $lnk = jQuery(link);
        var vars = cdmu_links.vars;
        var lnk_id = $lnk.attr('href').replace('#','') || null;
        var $sectionShow = jQuery('#'+lnk_id);
            
            if(option=='click'){
                
                if( $sectionShow.length ){
                    event.preventDefault();
                    
                    var lnk_class = $sectionShow.attr('class').match(/is-\w+/)[0];
                    lnk_class = lnk_class +' '+ lnk_id;//add id secction
                
                    vars.$din_sections.removeClass('show').addClass('hide');//hide all
                    $sectionShow.removeClass('hide').addClass('show');//show section
                    vars.$cdmu_general.attr('class','').addClass(lnk_class);//add class from id section
                    vars.$cont_menu.removeClass('hover');//close menu
                    location.hash = lnk_id;

                }else{
                    console.log('No hay Id para link');
                }
                
            }else if(option=='mouseenter'){
                
                vars.$cdmu_general.addClass( 'hover_'+lnk_id );//add class from id section
                console.log(lnk_id);
                
            }else if(option=='mouseleave'){
                
                var contGent_class = vars.$cdmu_general.attr('class').match(/hover_\w+/) || '';
                
                if( contGent_class ){
                    contGent_class = contGent_class[0];
                }
                
                vars.$cdmu_general.removeClass(contGent_class);
                
            }else if(option=='quit'){

                var contGent_class = vars.$cdmu_general.attr('class','');
                console.log(123456);
                
            }

        
    },
    togglMenu: function(este, evento){
        
        var vars = cdmu_links.vars;
        
        if( vars.$cdmu_general.outerWidth() <= 768 ){
            
            if( vars.$cont_menu.is('.hover') ){
               
                vars.$cont_menu.removeClass('hover');
                
            }else{
                
                vars.$cont_menu.addClass('hover');
                if( !document.isAction_menu ){
                    
                    jQuery(document).click(function(e){
                        
                        var $target = jQuery(e.target);
                        
                        if( !$target.closest( '.menu-gram' ).length ){
                            
                            vars.$cont_menu.removeClass('hover');
                        }
                    });
                    document.isAction_menu= true;
                }
            }
        }
    },
    quit: function(link,option,event){
        var vars = cdmu_links.vars;
        
        if( vars.$din_lnks.attr('href').match(/^#/) ){
            
            event.preventDefault();
            vars.$din_sections.removeClass('show').addClass('hide');//hide all
            vars.$cdmu_general.attr('class','');
            location.hash = '';
            return false;

        }
    },
    actions: function(){

        var vars = cdmu_links.vars;
        
        vars.$din_lnks.each(function(ind,ele){
            var $lnk = jQuery(this);
            
            $lnk.hover(
              function(e){
                cdmu_links.lnk_events( $lnk, 'mouseenter', e);
              
              },function(e){
                cdmu_links.lnk_events( $lnk, 'mouseleave', e);
              
            });
            
            $lnk.click(function(e){

                //muul event to hash
                if ( $lnk.attr('href').match(/^#/) ){
                    e.preventDefault();
                }

                cdmu_links.lnk_events( $lnk, 'click', e);
                
            });
        });
        
    },
    autoCharge: function(){

        var vars = cdmu_links.vars;
        vars.url = location.hash;
        
        if( !vars.url ){
            vars.url = ( location.pathname.match(/\/\w+$/) ) ? location.pathname.match(/\/\w+$/)[0] : 'null';
        }

        vars.url = vars.url.replace(/((\/)|(#))/,'');

        var $lnk = vars.$din_lnks.removeClass('active').filter('[href="'+vars.url+'"]').addClass('active');


        $lnk.click();
        
    },
    resizer : function(){

        var vars = cdmu_links.vars;
        var height;


        height = jQuery('.din-txt').filter(':visible').outerHeight();


        vars.$cdmu_general.css('min-height',height+'px');


    },

    ini: function(){

        cdmu_links.vars = {};
        var vars = cdmu_links.vars;
        vars.$cdmu_general = jQuery('#CDMU-CONT');
        vars.$din_sections = jQuery('#DIN-CON .intercambiable');
        vars.$din_lnks = jQuery('.lnk-gram a');
        vars.$lnks_quit = jQuery('a.CDMU-close');
        vars.$cont_menu = jQuery('.menu-gram');
        

        if( vars.$din_lnks.length ){
            cdmu_links.actions();
            cdmu_links.autoCharge();

            //auto times
            CDMU_resize_interval = window.setInterval(
                function(){

                cdmu_links.resizer();

                },
                500
            );
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


