var move_menu = {
  mv : function(){
  	var vars = move_menu.vars;
  	//vars.$divClass = vars.$contMenu.find('.menurecursos').removeClass('menurecursos');
  	vars.$divSearch = jQuery('#search-personalizado-form');
  	vars.$MENU_CDMU = jQuery('#MENU-CDMU');
  	vars.$divBreadcrumb = jQuery('#content-inside .breadcrumb');
  	vars.$divSearchBtn = jQuery('#edit-submit').attr('src','');
  	vars.$divSearchBtn[0].setAttribute('type','button');

  	//move elements
  	vars.$newcontMenu.append( vars.$divSearch );
  	vars.$newcontMenu.append( vars.$contMenu );
  	vars.$MENU_CDMU.append(vars.$divBreadcrumb);

  },
  ini : function(){
		move_menu.vars = {};
		var vars = move_menu.vars;

		vars.$contMenu = jQuery('#sidebar-first');
		vars.$newcontMenu = jQuery('#cont-newmenu');
		if( vars.$contMenu.length && vars.$newcontMenu.length ){
			move_menu.mv();
		}
  	
  }
};jQuery(function(){ move_menu.ini(); });