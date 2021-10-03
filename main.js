menu_list_array = ["1. Super Veggie Pizza,","2. Super Paneer Jain Pizza,","3. Veg Extravaganza Ched Pizza,","4. Veggie Margherita Pizza,","5. Veggie Supreme Plaza Pizza,","6. Supreme Margherita Pizza,"];
/*menu_list_array1 = ["6. Supreme Veg Margherita Pizza"];
menu_list_array1.push("1.  Super Veggie Pizza",
"2. Super Paneer Jain Pizza",
"3. Veg Extravaganza Ched Pizza",
"4. Veggie Margherita Pizza",
"5. Veggie Supreme Plaza Pizza");*/
menu_list_array.sort();
var imgtags = "<img src='Pizza.png' id='im1'>";
function getmenu(){
var htmldata;
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        //give the appropriate id name as display_menu  
}

function add_item(){
    //document.getElementById("display_addedmenu").innerHTML = menu_list_array;         
var htmldata;
var item=document.getElementById("add_item").value;
        // use the sort function as - menu_list_array.sort();
        menu_list_array.sort();
        htmldata="";
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
         //menu_list_array.push(add_item);
    }
function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	//document.getElementById("display_menu").innerHTML = menu_list_array;
    add_item();
}

