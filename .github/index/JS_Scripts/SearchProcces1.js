function searchFiles() {
            const searchTerm = document.getElementById("searchInput").value.toLowerCase();
            const files = [
                { name: "Search_Pages/page1.html", displayName: "Board Customization" },
                { name: "Search_Pages/page2.html", displayName: "About HTML Searcher" },
                { name: "Language_Arts_Istamgram_Project/Language_Arts_Istamgram_Project_SlideManager.html", displayName: "Language Arts Instagram Project" },
                //{ name: "Water_Bottle_Clicking_Simulator/Water_Bottle_Clicking_Simulator.html", displayName: "Water Bottle Simulator" },
                //Files URLMappings ect
            ];


            const result = files.filter(file => file.displayName.toLowerCase() === searchTerm);


            // Display result in iframe
            const iframe = document.getElementById("resultFrame");
            iframe.src = result.length > 0 ? result[0].name : "about:blank";
        }
