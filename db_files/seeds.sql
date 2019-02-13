USE reelplanner_db;

INSERT INTO users (FirstName, LastName, email, password)
VALUES ("Jarvis", "Vision", "email@address.com", "test");

INSERT INTO users (FirstName, LastName, email, password)
VALUES ("Bruce", "Banner", "email1@address.com", "test");

INSERT INTO users (FirstName, LastName, email, password)
VALUES ("Natasha", "Romanoff", "email2@address.com", "test");

INSERT INTO users (FirstName, LastName, email, password)
VALUES ("Tony", "Stark", "email3@address.com", "test");

INSERT INTO users (FirstName, LastName, email, password)
VALUES ("Steve", "Rogers", "email4@address.com", "test");

INSERT INTO genres(genre, genreId)
Values
('Crime', 80, 'images/Crime.jpg'),
('Romance', 10749,'images/Romance.jpg' ),
('Drama', 18, 'images/Drama.jpg'),
('Action', 28, 'images/Action.jpg'),
('Adventure', 12, 'images/Adventure.jpg'),
('Science Fiction', 878),
('Documentary', 99),
('Comedy', 35),
('Horror', 27),
('Thriller', 53),
('Animation', 16),
('Family', 10751),
('Fantasy', 14),
('Western', 37),
('War', 10752),
('History', 36),
('Music', 10402),
('Mystery', 9648),
('TV Movie', 10770);

