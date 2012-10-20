/**
 Options.js file does the rendering of options popup page. (for manifest V2)
**/

$('document').ready(function($) {
	$('#message').html(esc).show();
	$('#container-dics').html('');
	
	// render all the options
	$('#container-dics').append('<ul id="dics-list">');
	var order = localStorage['order'];
	if (order == undefined) { // if not reordered
		for (var i in dicts) {
			title = dicts[i].title;
			$('#dics-list').append('<li id="'+i+'" title="Click-n-drag to reorder"><input type="checkbox" name="all-dicts" id="cb'+i+'" value="'+(i)+'" />'+
			'<label style="cursor:move;" for="cb'+i+'">'+title+'</label></li>');
		}
	} else { // user had reordered before
		var ds = order.split(',');
		for( var i in dicts) {
			title = dicts[ds[i]].title;
			$('#dics-list').append('<li id="'+(ds[i])+'" title="Click-n-drag to reorder"><input type="checkbox" name="all-dicts" id="cb'+ds[i]+'" value="'+(ds[i])+'" />'+
			'<label style="cursor:move;" for="cb'+(ds[i])+'">'+title+'</label></li>');
		};
	}
	// restore enabled options
	restoreOptions();
	
	// Save action
	$('.save').click(function(e) {
		e.preventDefault();
		$('#message').stop().fadeTo(1,1);
		saveDicts();
	});
	
	// Esc key action
	$(document).keyup(function(e) {
		if (e.keyCode == 27) { // Esc
			window.close();
		}
	});
	
	// Save order of dictionaries / drag-n-drop
	$( "#dics-list" ).sortable({
		update: function(){
			var newOrder = $('#dics-list').sortable('toArray');
			localStorage["order"] = newOrder;
		}
	});
	$( "#dics-list" ).disableSelection();
		
});