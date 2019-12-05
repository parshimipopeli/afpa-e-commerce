$(function () {
    // Autocomplete searchbar
    let availableTags = [
        "Acer",
        "Antivirus",
        "Aorus",
        "Asus",
        "Apple",
        "BitDefender",
        "Barette Mémoire",
        "Carte graphique",
        "Carte Mère",
        "Casque",
        "Clavier",
        "Disque dur",
        "Disque dur SSD",
        "Ecran",
        "ESET",
        "Galaxy",
        "Ipad",
        "Materiel.net",
        "Micro",
        "Microphone",
        "Microsoft",
        "Office",
        "PC portable",
        "PC fixe",
        "PC Gamer",
        "Périphérique",
        "Samsung",
        "Souris",
        "SSD",
        "Tablette",
        "Windows 10",
    ];
    $("#tags").autocomplete({
        source: availableTags
    });

    $(".fa-search").on("click", function () {
        $("#searchBar").slideToggle();
    })


    // BOUTONS MEGA-MENU
    $("#mega-btn1").on("mouseover mouseout", function () {
        $("#mega-menu1").toggle();
    })

    $("#mega-menu1").on("mouseover mouseout", function () {
        $("#mega-menu1").toggle();
    })
    $("#mega-btn2").on("mouseover mouseout", function () {
        $("#mega-menu2").toggle();
    })

    $("#mega-menu2").on("mouseover mouseout", function () {
        $("#mega-menu2").toggle();
    })
    $("#mega-btn3").on("mouseover mouseout", function () {
        $("#mega-menu3").toggle();
    })

    $("#mega-menu3").on("mouseover mouseout", function () {
        $("#mega-menu3").toggle();
    })
    

    // IMAGES MEGA-MENU
    $("#categ1").on("mouseover mouseout", function () {
        $(".menu-img").attr("src","image/mega-menu/categories/categorie1.jpg")
        $(".menu-img").toggle();
    })
    $("#categ2").on("mouseover mouseout", function () {
        $(".menu-img").attr("src","image/mega-menu/categories/categorie2.jpg")
        $(".menu-img").toggle();
    })
    $("#categ3").on("mouseover mouseout", function () {
        $(".menu-img").attr("src","image/mega-menu/categories/categorie3.jpg")
        $(".menu-img").toggle();
    })
    $("#categ4").on("mouseover mouseout", function () {
        $(".menu-img").attr("src","image/mega-menu/categories/categorie4.jpg")
        $(".menu-img").toggle();
    })
    $("#categ5").on("mouseover mouseout", function () {
        $(".menu-img").attr("src","image/mega-menu/categories/categorie5.jpg")
        $(".menu-img").toggle();
    })
    $("#categ6").on("mouseover mouseout", function () {
        $(".menu-img").attr("src","image/mega-menu/categories/categorie6.jpg")
        $(".menu-img").toggle();
    })
    $("#categ7").on("mouseover mouseout", function () {
        $(".menu-img").attr("src","image/mega-menu/categories/categorie7.jpg")
        $(".menu-img").toggle();
    })
    $("#categ8").on("mouseover mouseout", function () {
        $(".menu-img").attr("src","image/mega-menu/categories/categorie8.jpg")
        $(".menu-img").toggle();
    })
    $("#categ9").on("mouseover mouseout", function () {
        $(".menu-img").attr("src","image/mega-menu/categories/categorie9.jpg")
        $(".menu-img").toggle();
    })
    $("#categ10").on("mouseover mouseout", function () {
        $(".menu-img").attr("src","image/mega-menu/categories/categorie10.jpg")
        $(".menu-img").toggle();
    })
    $("#categ11").on("mouseover mouseout", function () {
        $(".menu-img").attr("src","image/mega-menu/categories/categorie11.jpg")
        $(".menu-img").toggle();
    })
    $("#categ12").on("mouseover mouseout", function () {
        $(".menu-img").attr("src","image/mega-menu/categories/categorie12.jpg")
        $(".menu-img").toggle();
    })
    

});







