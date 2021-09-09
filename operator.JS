<!DOCTYPE html> 
<html> 
    
<head> 
    <title>
        create the default parameter dynamically set the height,width,image of 
        a div element using JS?
    </title>
    <script src=
"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg.js">
    </script>
    
    <style> 
        #div1 { 
            height: 60px; 
            width: 350px; 
            border: 3px solid black;  
        } 
    
        h1 { 
            color: green; 
        }         .box{
            background: green;
            border: 2px solid #ccc;
            color: white;
        }
    </style> 
</head> 
    
<body> 
    <center> 
        <h1>operator in JS</h1> 
        <h3>the default parameter Dynamically set the height, width,image of
        a div element using JS</h3> 
    
        <div id="div1" class="box"> 
            Dynamically set content height,width,image of
            a div on JS.<br>
            JavaScript is 
            a programing language  which 
            helps students to create their   
            website more sophistically.   
        </div> 
        <br> 
        <form>
            <input type="text" class="JS1">
            <button type="button" class="JS2">
                Set Height
            </button>
        </form>
    
        <p id="p1"></p>
        <p id="p2"></p>
    </center> 
    
    <script> 
        $(document).ready(function(){
            $(".JS1").click(function(){
                  
                var demo ="Previous-height: "+ 
                           $("#div1").height(); 
                           + "px";
                $("#p1").text(demo);
                  
                var newHeight = $(".JS1").val();
                $(".box").height(newHeight);
                  
                demo = "New-height: "+ 
                           $("#div1").height(); 
                           + "px";
                $("#p2").text(demo);
            });
        });
    </script> 
</body> 
    
</html>

