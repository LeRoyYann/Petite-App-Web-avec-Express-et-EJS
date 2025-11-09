const movies = [
  {
    id: 1,
    title: "Die Hard",
    year: 1988,
    director: "John McTiernan",
    cast: ["Bruce Willis", "Alan Rickman", "Bonnie Bedelia"],
    poster: "/images/diehard.jpg",
    summary:
      "Un policier affronte seul des preneurs d’otages dans un gratte-ciel.",
  },
  {
    id: 2,
    title: "Mad Max: Fury Road",
    year: 2015,
    director: "George Miller",
    cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
    poster: "/images/furyroad.jpg",
    summary: "Fuite à travers le désert pour échapper à un tyran et sa horde.",
  },
  {
    id: 3,
    title: "Terminator 2",
    year: 1991,
    director: "James Cameron",
    cast: ["Arnold Schwarzenegger", "Linda Hamilton", "Edward Furlong"],
    poster: "/images/t2.jpg",
    summary: "Un T-800 protège John Connor d’un Terminator plus avancé.",
  },
];

export function showMovies(req, res) {
  res.render("movies", { movies });
}

export function showMovieDetail(req, res) {
  const id = Number(req.params.id);
  const movie = movies.find((m) => m.id === id);
  if (!movie) return res.status(404).render("404");
  res.render("movie-detail", { movie });
}
