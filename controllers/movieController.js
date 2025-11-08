const movies = [
  { title: "Die Hard", year: 1988 },
  { title: "Mad Max: Fury Road", year: 2015 },
  { title: "Terminator 2", year: 1991 },
];

export function showMovies(req, res) {
  res.render("movies", { movies });
}
