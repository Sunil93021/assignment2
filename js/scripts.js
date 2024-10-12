

function showIngredients(){
    
    var para = document.getElementById("ingredientsParagraph");
    var button1 = document.getElementById("b1");
    var s1 = "Show Ingredients";
    var s2 = "Hide Ingredients";

    if(button1.textContent == (s1)){
        para.innerHTML =("<table id = \"t1\"><tr><th>Ingredients</th></tr><tr> <td>1 cup (250 ml) Milk </td></tr><tr> <td>2 teaspoons Tea Powder</td></tr><tr><td>1/4 cup (approx. 60 ml) Water </td></tr> <tr><td>3 teaspoons Sugar</td></tr></table>");
        button1.innerHTML = s2;
        
    }else{
        para.innerHTML =("");
        button1.innerHTML = s1;
     
    }

    
}
var count = 1;

function startCook(){
    var para = document.getElementById("process");
    var button1 = document.getElementById("b2");
    var s1 = "Start Cooking";
    var pro = document.getElementById("pro");
    var tab;
    
    if(count == 5){
        
        return;
    }
    if(button1.textContent == s1){
        para.innerHTML= "<table id = \"t2\">\
            <tr><th> Process</th></tr> \
            <tr><td>Boil water in a saucepan.</td> </tr>\
            <tr><td> Add sugar and tea powder in it and boil it for 3-4 minutes on medium flame.</td></tr> \
            <tr><td>Add milk and boil it over medium flame for 6-7 minutes or until bubble starts to rise.</td></tr> \
            <tr><td>You will see the change in color of the tea from milky shade to brown shade when it is ready.\
                <br>Turn off the gas and strain tea in cups.</td></tr>\
        </table>";
        button1.innerHTML = "Next";
        
        
    }

        
        tab = document.getElementById("t2");
        tab.rows[count-1].style.backgroundColor = "white";
        tab.rows[count].style.backgroundColor = "yellow";
        pro.value = count * 25;
        count =count+ 1;

    
    

}