jQuery( document ).ready(function() {
    loadData("#americas");
});
function loadData(target){
  jQuery.ajax({
      type: "GET",
      url: "/projects/dota/leaderboards.php?division="+target.substr(1),
      // url: "http://localhost/dota/leaderboards.php?division="+target.substr(1),
      error: function(data){
        alert("There was a problem");
      },
      success: function(data){
        
        var table = jQuery('<table class="table table-hover text-left"></table>');
        JSON.parse(data).leaderboard.map(function(value,index){
          var team_tag = value.team_tag != undefined ?value.team_tag + '.' : '';
          table.append('<tr><td>' + value.rank + '</td><td>' + team_tag + value.name +'</td><td>' + '<span class="flag-icon flag-icon-'+ value.country+'"></span>' + '</td><td>' + '</td>' + '<td>' + value.solo_mmr + '</td>' + '</tr>');
        })
        jQuery(target).html(table);
      }
  });
}
//jQuery('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	jQuery('a[data-toggle="tab"]').on('click', function (e) {
	console.log(e);
  var target = jQuery(e.target).attr("href") ;// activated tab
  if (jQuery(target).is(':empty')) {
    loadData(target);
    
 }
});