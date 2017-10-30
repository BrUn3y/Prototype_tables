$( document ).ready(function() {
 var tables = [];
 for (var i = 1; i <= 240; i++) {
   tables.push({
      table_no:i,
      status:true,
      total_chair:10,
      lead:""
   });
 }

/*     function getTables() {
        jQuery.ajax({
            type: "GET",
            url: "/posadaIBMMx/?class=Mapa&method=getTables",
            success: function (response) {
                response = JSON.parse(response);
                console.log(response);
            }
        });
    };
    getTables();*/


var table = "<div style='float:left;'>";
 $.each(tables, function( index, value ) {
   var mesa = "<div id='table_"+value.table_no+"' class='tables'> "+value.table_no+"</div>";
   table = table + mesa;

   switch (index) {
     case 19:
       table = table +"</div>";
       table = table + "<div style='float:left;'>";
       break;
     case 37:
       table = table +"</div>";
       table = table + "<div style='float:left;'>";
       break;
     case 55:
       table = table +"</div>";
       table = table + "<div style='float:left;'>";
       break;
     case 73:
       table = table +"</div>";
       table = table + "<div style='float:left;'>";
       break;
     case 91:
       table = table +"</div>";
       table = table + "<div style='float:left;'>";
       break;
     case 106:
       table = table +"</div>";
       table = table + "<div style='float:left;'>";
       break;
    case 107:
        table = table + "<p class='escenario'>ESCENARIO</p>";
    break;
     case 117:
       table = table +"</div>";
       table = table + "<div style='float:left;'>";
       break;
     case 126:
       table = table +"</div>";
       table = table + "<div style='float:left;'>";
       break;
     case 133:
       table = table +"</div>";
       table = table + "<div style='float:left;'>";
       break;
      case 136:
       table = table +"<p class='pista'> PISTA DE BAILE </p>";
       break;
     case 140:
       table = table +"</div>";
       table = table + "<div style='float:left;'>";
       break;
     case 149:
       table = table +"</div>";
       table = table + "<div style='float:left;'>";
       break;
     case 160:
       table = table +"</div>";
       table = table + "<div style='float:left;'>";
       break;
     case 175:
       table = table +"</div>";
       table = table + "<div style='float:left;'>";
       break;
     case 193:
       table = table +"</div>";
       table = table + "<div style='float:left;'>";
       break;
     case 209:
       table = table +"</div>";
       table = table + "<div style='float:left;'>";
       break;
     case 224:
       table = table +"</div>";
       table = table + "<div style='float:left;'>";
       break;
      case 239:
      table = table + "<p class='entrada'>Entrada</p>"
        $("#dashboard").html(table);
        break;
     default:
   }
 });

  $.each(tables, function( index, value ) {
    if (index >= 19) {
     $('#table_'+value.table_no).css("margin-bottom","14px");
    }
    switch (index) {
      case 99:
        $('#table_'+value.table_no).css("margin-bottom","131px");
      break;
      case 112:
        $('#table_'+value.table_no).css("margin-bottom","288px");
      break;
      case 118:
        $('#table_'+value.table_no).css("margin-top","79px");
      break;
      case 121:
        $('#table_'+value.table_no).css("margin-bottom","288px");
      break;
      case 127:
        $('#table_'+value.table_no).css("margin-top","79px");
      break;
      case 130:
        $('#table_'+value.table_no).css("margin-top","366px");
      break;
      case 134:
        $('#table_'+value.table_no).css("margin-top","79px");
      break;
      case 137:
        $('#table_'+value.table_no).css("margin-top","366px");
      break;
      case 141:
        $('#table_'+value.table_no).css("margin-top","79px");
      break;
      case 144:
        $('#table_'+value.table_no).css("margin-bottom","288px");
      break;
      case 155:
        $('#table_'+value.table_no).css("margin-bottom","288px");
      break;
      case 168:
        $('#table_'+value.table_no).css("margin-bottom","131px");
      break;
      default:
    }
  });

  function disabledButton (table){
    if (table.status == true) {
      $("#save_table").prop('disabled', false);
      $("#save_chair").prop('disabled', false);
      $("save_5chair").prop('disabled', false);
    }else {
      $("#save_table").prop('disabled', true);
      $('#save_table').addClass('btn-danger');
      $("#save_chair").prop('disabled', true);
      $('#save_chair').addClass('btn-danger');
      $("#save_5chair").prop('disabled', true);
      $('#save_5chair').addClass('btn-danger');
    }
    ///SHOW BUTTON FOR 10 CHAIRS
    if (table.total_chair == 10) {
      $("#save_table").prop('disabled', false);
    }else {
      $("#save_table").prop('disabled', true);
      $('#save_table').addClass('btn-danger');
    }
    ////SHOW BUTTON FOR 5 CHAIRS
    if (table.total_chair >= 5) {
      $("#save_5chair").prop('disabled', false);
    }else {
      $("#save_5chair").prop('disabled', true);
      $('#save_5chair').addClass('btn-danger');
    }
    if (table.total_chair == 0) {
      $("#save_chair").prop('disabled', true);
      $('#save_chair').addClass('btn-danger');
      $("#status").text("No Disponible");
    }
  }





  var table_reserver;
  $(".dashboard .tables").click(function(event){
    $('#save_table').removeClass('btn-danger');
    $('#save_5chair').removeClass('btn-danger');
    $('#save_chair').removeClass('btn-danger');
    var table_no = event.target.id;
    table_no = table_no.split("_");
    table_no = parseInt(table_no[1]) - 1;
    table_reserver = tables[table_no];
    $("#table_no").text(tables[table_no].table_no);
    $(".modal-title").text("Mesa "+tables[table_no].table_no);
    $("#status").text(tables[table_no].status);
    if (tables[table_no].status) {
        $("#status").text("Disponible");
    }else {
      $("#status").text("No Disponible");
    }
    $("#total_chair").text(tables[table_no].total_chair);
    $("#lead").text(tables[table_no].lead);
    disabledButton(tables[table_no]);

  });



  $("#save_table").click(function(){
    tables[table_reserver.table_no-1].total_chair=tables[table_reserver.table_no-1].total_chair-10;
    tables[table_reserver.table_no-1].status=false;
    disabledButton(tables[table_reserver.table_no-1]);
    $("#table_"+table_reserver.table_no).css('background-color', '#FC4349');
    $("#table_"+table_reserver.table_no).css('color', '#FFF');
     $('#myModal').modal('hide');
  });

  $("#save_chair").click(function(){
    tables[table_reserver.table_no-1].total_chair=tables[table_reserver.table_no-1].total_chair-1;
    $("#total_chair").text(tables[table_reserver.table_no-1].total_chair);
    $("#table_"+table_reserver.table_no).css('background-color', '#6DBCDB');
    $("#table_"+table_reserver.table_no).css('color', '#FFF');
    disabledButton(tables[table_reserver.table_no-1]);
    if (tables[table_reserver.table_no-1].total_chair == 0) {
      tables[table_reserver.table_no-1].status=false;
      $("#table_"+table_reserver.table_no).css('background-color', '#FC4349');
      $("#table_"+table_reserver.table_no).css('color', '#FFF');
    }
    $('#myModal').modal('hide');
  });

  $("#save_5chair").click(function(){
    tables[table_reserver.table_no-1].total_chair=tables[table_reserver.table_no-1].total_chair-5;
    $("#total_chair").text(tables[table_reserver.table_no-1].total_chair);
    $("#table_"+table_reserver.table_no).css('background-color', '#6DBCDB');
    disabledButton(tables[table_reserver.table_no-1]);
    $("#table_"+table_reserver.table_no).css('color', '#FFF');
    if (tables[table_reserver.table_no-1].total_chair == 0) {
      tables[table_reserver.table_no-1].status=false;
      $("#table_"+table_reserver.table_no).css('background-color', '#FC4349');
      $("#table_"+table_reserver.table_no).css('color', '#FFF');
    }
    $('#myModal').modal('hide');

  });


});
