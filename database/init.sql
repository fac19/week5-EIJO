BEGIN;

    DROP TABLE IF EXISTS recipes;

    CREATE TABLE recipes
    (
        id SERIAL PRIMARY KEY,
        recipeTitle VARCHAR(255),
        type VARCHAR(255),
        ingredients VARCHAR(255),
        method TEXT,
        vegetarian BOOLEAN
    );

    INSERT INTO recipes
        (recipeTitle, type, ingredients, method, vegetarian)
    VALUES
        ('Pesto pasta', 'dinner', 'pasta, pesto', 'cook it', '1'),
        ('Shepherds pie', 'dinner', 'mash potato, meat', 'oven it', '0'),
        ('pancakes', 'breakfast', 'eggs + stuff', 'flip it', '1');

    COMMIT;