window.onload = function() {
    // Show the dropdown when the search input is focused or the search icon is clicked
    document.getElementById("search-input").addEventListener("focus", function() {
        document.getElementById("search-dropdown").classList.add("show");
    });

    document.getElementById("search-icon").addEventListener("click", function() {
        document.getElementById("search-dropdown").classList.add("show");
        const dropdown = document.getElementById("search-dropdown");
    dropdown.classList.add("show");
    console.log("Dropdown has " + dropdown.children.length + " items.");

    Array.from(dropdown.children).forEach((child, index) => {
        console.log(`Link ${index + 1}:`, child.textContent);
    });
    });

    // Hide the dropdown when the user clicks outside the search box
    document.addEventListener("click", function(event) {
        var searchBox = document.querySelector(".search-box");
        var dropdown = document.getElementById("search-dropdown");
        if (!searchBox.contains(event.target)) {
            dropdown.classList.remove("show");
        }
    });
}






