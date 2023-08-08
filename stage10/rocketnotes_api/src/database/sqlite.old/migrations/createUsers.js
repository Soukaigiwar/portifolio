const createUsers = `
    DROP TABLE IF EXISTS users;

    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR,
        email VARCHAR,
        password VARCHAR,
        avatar VARCHAR NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    INSERT INTO users (name, email, password)
        VALUES 
        ('Sergio Henrique Pedroso Mello',
         'sergiomello@email.com',
         '$2a$08$9YZkjZcmido2uNAYJvG7jucUrF.1Vff6.e6muarScsLFA4IBMU7IG'
        ),
        ('Helena Pedroso Mello',
         'helena@email.com',
         '$2a$08$rmUjFWFdCZiwKXlmtjcX7eYxyaToD/60RgAQG/8I9oCmLDvlovrii'
        ),
        ('Antonio Henrique Caldas Mello',
         'antonio@email.com',
         '$2a$08$HgbVqAfx7LSReeAlBHWxFOdiuEp2QfI5de4rgd84UzO5sX7mA9gla'
        ),
        ('Jordana Pedroso Mello',
         'jordana@email.com',
         '$2a$08$83Akjam1kn8OOK3pWUcCDOd5sGIw1wPRwK.0OWOE2VlwoVEe39QS2'
        ),
        ('Melissa Rodrigues Pedroso',
         'melissa@email.com',
         '$2a$08$nrFMLT/K8S8iidK/n31k/eV06NeNvv7QZT5oTSy82PFoCSdf7jwx.'
        ),
        ('Euripedes Vieira Pedroso',
         'euripedes@email.com',
         '$2a$08$UCyVPiDv65EK32coHp6FTOFOQ0bLcCxoJcC56.nqAdKRVAPKc9.ju'
        ),
        ('Raquel Alvarenga Costa',
         'raquel@email.com',
         '$2a$08$kSqAiwm6WZci8kUePbri1ulPirw1KRbuwOgJcowUPh7cG2ZOZT.5e'
        ),
        ('Alfredo Luis Costa',
         'alfredo@email.com',
         '$2a$08$LkyH6/2RV3PlgjpIr4xk0OTedDEFPo.lwG.09AdQGEJNs3HzZ9xEW'
        )
`;

module.exports = createUsers;
