CREATE TABLE books (
  bookid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  publishdate INT,
  summary LONGTEXT,
  couverture VARCHAR(255),
  categories_id INT NOT NULL,
  CONSTRAINT fk_categories_id
  FOREIGN KEY (categories_id)
  REFERENCES categories(id)
);

CREATE TABLE statut (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nom VARCHAR(100)
);

CREATE TABLE categories (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  category VARCHAR(100)
);

INSERT INTO books (title, author, publishdate, summary, couverture,categories_id)
  VALUES ('Harry Potter and the
Philosopher s Stone', 'J.K. Rowling', 1997, 'On his eleventh birthday, Harry Potter, an orphan raised by an uncle and aunt who hate him, sees his life turned upside down. A giant comes to pick him up to take him to Hogwarts College, a school of witchcraft where a place has always been waiting for him. Who is Harry Potter? And who is the dreadful V..., the mage whose name no one dares to pronounce.
Friendship, surprises, dangers, comic scenes, Harry discovers his powers and life at Hogwarts. The first volume of the adventures of the young hero bewitches you immediately!', 'https://www.babelio.com/couv/bm_9068_aj_m_5285.jpg',1),
    ('Vertige', 'Franck THilliez', 2011, 'A man wakes up at the bottom of an abyss, two strangers and his faithful dog as the only companions in misfortune. He is chained at the wrist, one of the two men at the ankle, and the third is free, but his head is covered with a dreadful mask, which will explode if he moves away from the other two.
Who took them there? Why ?','https://www.babelio.com/couv/20044_1493829.jpeg',2),
    ('After', 'Anna Todd',  2014, "At 18, Theresa 'Tessa' Young is an ambitious, determined and reserved young student. His mother controls his life. Her boyfriend Noah is the perfect son-in-law. The one his mother adores, the one who won't make waves. His future is all mapped out: good studies, a good job, a happy marriage. But that was before he bumped into her in the college dorm. He is Hardin Scott, bad boy, tattooed, pierced, with a very nice English accent. He is rude, provocative and cruel, in short, he is the most hateful guy Tessa has ever met. And yet, the day she finds herself alone with him, she loses all control. This unmanageable man, with a dark character, constantly pushes her away, but he gives birth to an unlimited passion in her. A passion that, against all odds, seems mutual. Initiation, sex, jealousy, lies, between Tessa and Hardin, is it a destructive story or an absolute love?", 'https://www.babelio.com/couv/CVT_After-tome-1_4991.jpg',5),
    ('The Da Vinci Code', 'Dan Brown', 2003, 'Passing through Paris, Robert Langdon, professor at Havard and specialist in symbology, was called urgently to the Louvre, in the middle of the night. Jacques Saunière, the chief curator was found murdered in the middle of the Grande Galerie. Next to the corpse, the police found a coded message. Langdon and Sophie Neveu, a brilliant cryptographer member of the police force, try to solve it. They are amazed when the first clues lead him to the work of Leonardo da Vinci. They also discover that Saunière was a member of the Priory of Sion, a secret society to which Nexton, Botticelli, Leonardo da Vinci, Victor Hugo had belonged, and that he was protecting a millennial secret. The investigation of our two heroes will lead them through France and the United Kingdom, not only to seek a long hidden truth concerning Christianity, but also to escape those who would seize the secret. To succeed, they must solve many puzzles, and quickly, otherwise the secret risks being lost forever.','https://www.babelio.com/couv/33921_1616188.jpeg',3),
    ('Central Park', 'Guillaume Musso', 2014, "The novel tells the story of Alice Schäfer, a police captain in the Paris crime squad, and Gabriel Keyne, an American jazz pianist, who suddenly find themselves handcuffed to each other on a bench in Central Park at New York. Neither of them knows the other and they have no memory of their meeting. The day before, Alice was in Paris partying with three girlfriends on the Champs-Élysées, while Gabriel played the piano at a jazz club in Dublin, Ireland. The characters have no idea of ​​the circumstances of their arrival in New York, but Alice's blouse is stained with blood. Alice and Gabriel have no choice but to unite to discover the truth, and it will change their lives forever.",'https://www.babelio.com/couv/bm_CVT_Central-Park_5496.jpg',4),
    ("Socrate's shadow", 'Haley Riles', 2020, "When Kaya flies to Panama for her honeymoon, she is far from imagining that she will stay in the hotel of Socrates, this man, certainly canonissime but so arrogant, whom she met during her marriage.
She has never heard of him, although he bears the title of 'best friend' of her husband Allan, and his behavior towards her could easily rank him at the top of the asshole of the year!
Cherry on the cake ? Allan, obsessed with his work, will abandon the young bride in Bocas del Toro and return to Montreal, leaving it to Socrates to 'occupy' his wife.
If the latter is completely hermetic and at the height of his antipathy, Kaya, she, may want to pierce the shadows that surround her, and the attraction may ultimately outweigh the aversion.
Because don't we say that darkness sometimes attracts more than light?", 'https://www.babelio.com/couv/CVT_Socrates-shadow_9856.jpg',5);

INSERT INTO categories (category) VALUES ('Fantasy'), ('Thriller'), ('Polar'), ('Contemporary'), ('Romance');

ALTER TABLE books ADD statut VARCHAR(100);
ALTER TABLE categories MODIFY categories_id INT;


UPDATE books
SET statut = 'Unread';

ALTER TABLE books
ADD FOREIGN KEY (categories_id) REFERENCES categories(id);

ALTER TABLE categories CHANGE id categoryId INT;

