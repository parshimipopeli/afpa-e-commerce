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








        });