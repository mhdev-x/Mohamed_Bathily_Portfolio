document.addEventListener("DOMContentLoaded", () => {
    let boutonTheme = document.querySelector("#boutonTheme");

    let mettreAJourIcone = (theme) => {
        if (boutonTheme) {
            boutonTheme.innerHTML = theme === "sombre"
                ? '<i class="fa-solid fa-sun" style="color: var(--accent-signal);"></i>'
                : '<i class="fa-solid fa-moon" style="color: var(--text-primary);"></i>';
        }
    };

    let themeSauvegarde = localStorage.getItem("theme") || "sombre";

    document.body.classList.toggle("theme-clair", themeSauvegarde === "clair");
    mettreAJourIcone(themeSauvegarde);

    if (boutonTheme) {
        boutonTheme.addEventListener("click", () => {
            let estClair = document.body.classList.toggle("theme-clair");
            let nouveauTheme = estClair ? "clair" : "sombre";
            localStorage.setItem("theme", nouveauTheme);
            mettreAJourIcone(nouveauTheme);
        });
    }
});