document.addEventListener("DOMContentLoaded", function() {
    const movies = [
        {
            name: "Up",
            year: 2009,
            director: "Pete Docter",
            picture: "https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg"
        },
        {
            name: "Alien",
            year: 1979,
            director: "Ridley Scott",
            picture: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/7-alien-movie-poster-alien-1979-jean-darmel.jpg"
        },
        {
            name: "The Lord of the Rings: The Two Towers",
            year: 2002,
            director: "Peter Jackson",
            picture: "https://www.originalfilmart.com/cdn/shop/files/lord_of_the_rings_the_two_towers_2002_original_film_art_5dd21feb-10ab-41a1-84a1-4c4b082e9626.webp?v=1705516902"
        }
    ];

    const movieList = document.getElementById("movie-list");

    movies.forEach(movie => {
        const listItem = document.createElement("li");

        const img = document.createElement("img");
        img.src = movie.picture;
        img.alt = `${movie.name} Poster`;
        img.width = 200;

        const details = document.createElement("p");
        details.textContent = `${movie.name} (${movie.year}) - Directed by ${movie.director}`;

        listItem.appendChild(img);
        listItem.appendChild(details);

        movieList.appendChild(listItem);
    });
});