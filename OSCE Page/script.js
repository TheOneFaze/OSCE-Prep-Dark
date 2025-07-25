
document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".search-icon");
    const searchContainer = document.querySelector(".search-container");
    const searchInput = document.getElementById("searchInput");
    const logo = document.getElementById("logo");

    let userOpenedSearch = false;

    if (searchIcon && searchContainer) {
        searchIcon.addEventListener("click", function (e) {
            e.stopPropagation();
            const isOpen = searchContainer.classList.toggle("active");
            userOpenedSearch = isOpen;

            if (isOpen) {
                setTimeout(() => searchInput.focus(), 100);
                logo?.classList.add("hidden-on-search-active");
            } else {
                searchInput.value = "";
                searchInput.blur();
                logo?.classList.remove("hidden-on-search-active");
            }
        });

        // 🔒 Prevent keyboard resize from collapsing the search box
        let lastWindowHeight = window.innerHeight;
        window.addEventListener("resize", function () {
            const heightDiff = Math.abs(window.innerHeight - lastWindowHeight);
            // Skip collapse if virtual keyboard opened (small height change)
            if (userOpenedSearch && heightDiff < 200) {
                return;
            }

            if (!userOpenedSearch) {
                searchContainer.classList.remove("active");
                logo?.classList.remove("hidden-on-search-active");
            }

            lastWindowHeight = window.innerHeight;
        });

        // Close if tapping outside
        document.addEventListener("click", function (e) {
            if (
                !searchContainer.contains(e.target) &&
                !searchIcon.contains(e.target) &&
                userOpenedSearch
            ) {
                searchContainer.classList.remove("active");
                logo?.classList.remove("hidden-on-search-active");
                userOpenedSearch = false;
            }
        });
    }
});
