$(function(){
    

    $('#fullpage').fullpage({
		//options here
        navigation: false,
        sectionsColor: ['white', '#F7F7F8', 'white'],
        anchors: ['sect1', 'sect2', 'sect3'],
		autoScrolling:true,
		scrollHorizontally: true,
        nagivation: true,
        navigationPosition: 'right'
	});

    //menu
    var shadow = $("ul.menu>li");

    shadow.find("a").click(function(){
        shadow.removeClass("active");
        $(this).parent().addClass("active");
    });



    //section2 box
    var go = $("div.tbox1")

    go.on("mouseover",function(){
        $("#gonow").css({
            "opacity":"1"
        });
    });
    go.on("mouseout",function(){
        $("#gonow").css({
            "opacity":"0"
        });
    });

    var go = $("div.tbox2")

    go.on("mouseover",function(){
        $("#gonow2").css({
            "opacity":"1"
        });
    });
    go.on("mouseout",function(){
        $("#gonow2").css({
            "opacity":"0"
        });
    });
    
});