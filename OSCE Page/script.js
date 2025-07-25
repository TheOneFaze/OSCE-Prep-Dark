
document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".search-icon");
    const searchContainer = document.querySelector(".search-container");
    const searchInput = document.getElementById("searchInput");
    const logo = document.getElementById("logo");

    let userOpenedSearch = false;

    if (searchIcon && searchContainer) {
        searchIcon.addEventListener("click", function (e) {
            e.stopPropagation();
            searchContainer.classList.add("active");
            userOpenedSearch = true;
            setTimeout(() => searchInput.focus(), 100);
            logo?.classList.add("hidden-on-search-active");
        });

        // Prevent auto-closing on resize regardless of cause
        window.addEventListener("resize", function () {
            if (userOpenedSearch) {
                searchContainer.classList.add("active");
                logo?.classList.add("hidden-on-search-active");
                setTimeout(() => searchInput.focus(), 100);
            }
        });

        // Close only on manual click outside
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
