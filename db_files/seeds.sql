DROP
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

INSERT INTO genres(genre, genreId, image)
Values
('Crime', 80, 'images/Crime.jpg'),
('Romance', 10749,'images/Romance.jpg' ),
('Drama', 18, 'images/Drama.jpg'),
('Action', 28, 'images/Action.jpg'),
('Adventure', 12, 'images/Adventure.jpg'),
('Science Fiction', 878,'images/SciFi.jpg'),
('Documentary', 99, 'images/Documentary.jpg'),
('Comedy', 35, 'images/Comedy.jpg'),
('Horror', 27, 'images/Horror.jpg'),
('Thriller', 53,'images/Thriller.jpg'),
('Animation', 16,'images/Animation.jpg'),
('Family', 10751, 'images/Family.jpg'),
('Fantasy', 14,'images/Fantasy.jpg'),
('Western', 37,'images/Western.jpg'),
('War', 10752,'images/War.jpg'),
('History', 36,'images/History.jpg'),
('Music', 10402,'images/Music.jpg'),
('Mystery', 9648,'images/Mystery.jpg'),
('TV Movie', 10770,'images/TVMovie.jpg')

