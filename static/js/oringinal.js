$(document).ready(function() {
    /*
      最新公告項目抓取JSON資料
      抓取外來JSON並於頁面中顯示最新公告
    */

    //設定外來JSON檔之路徑
    var menu_JSONPath = "js/c_h_menu.json";
    var hotStatus;
    /*===================最新公告====================*/
    $.ajax({
        url: menu_JSONPath,
        type:"GET",
        dataType: "json",
        success: function(menuData, textStatus, jqXHR) {         //將各項資料一一帶出
            var checkArray=[];            
            $.each(menuData, function(i, d) {

                //設定本地變數，將json欄位轉為本地變數
                var menu_navId = d.NavId,
                    menu_url = d.URL,
                    menu_statusId = d.StatusID,
                    menu_effectSetting = d.EffectSetting,
                    menu_navKey = d.NavKey;
                //判斷是否為Hot狀態，是的話給值   
                if(menu_statusId==1){
                    hotStatus = "checked";
                }else{
                    hotStatus = "";
                }

                checkArray.push(
                    '<tr>'+
                        '<td>'+menu_navId+'</td>'+
                        '<td><input type="text" name="" value="'+menu_url+'"></td>'+                        
                        '<td><input class="ch-menu-hotStatus" type="checkbox" name="" value="" '+hotStatus+'></td>'+
                        '<td>'+
                            //設定顏色
                            '<input type="checkbox" class="ch-menu-color ch-menu-red">'+
                            '<input type="checkbox" class="ch-menu-color ch-menu-yellow">'+
                            '<input type="checkbox" class="ch-menu-color ch-menu-blue">'+
                            '<input type="checkbox" class="ch-menu-color ch-menu-purple">'+
                            '<input type="checkbox" class="ch-menu-color ch-menu-green">'+
                            '<input type="checkbox" class="ch-menu-color ch-menu-orange">'+
                        '</td>'+      
                        '<td><input type="text" name="" value="'+menu_navKey+'"></td>'+
                        '<td><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></td>'+
                    '</tr>'                    
                    )
                
                // function menu_chooseColor(i){
                    // var menu_check_limit = 2,
                    //     key1,
                    //     key2,
                    //     checkArray=[];
                    // // var checkArray;
                    // $('.ch-menu-color').on('change', function(evt) {
                    //     evt.preventDefault();
                    //     if(checkArray.length <= menu_check_limit){
                    //         checkArray.push(this);
                    //     }else{
                    //         console.log(checkArray[0]);
                    //         checkArray[0] = checkArray[1];
                    //         checkArray[1] = this;
                    //         this.checked = true;   
                    //     }

                    //     if($(this).siblings(':checked').length >= menu_check_limit) {
                    //         // this.checked = false;
                    //         checkArray[0].checked = false;

                    //     }
                    // });    
                    // var menu_check_limit = 2;
                    // $('.ch-menu-color').on('change', function(evt) {
                    //     if($(this).siblings(':checked').length >= menu_check_limit) {

                    //         this.checked = false;
                    //     }else{
                    //         this.checked = true;
                    //     }
                    // });   
                // }

            }); //each          
            $("#ch-menu").before(checkArray.join(''));
        },

        error: function(jqXHR, textStatus, errorThrown) {
            console.log('Errors: ' + textStatus);
            console.log(jqXHR);
            console.log(errorThrown);
        }

    });

   

}); //document.ready