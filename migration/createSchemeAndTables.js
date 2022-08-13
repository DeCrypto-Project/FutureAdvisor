const mysql = require('../utils/mysql')

(async () => {
        try {
            await mysql.runQuery(`CREATE SCHEMA IF NOT EXISTS \`future_advisor\` DEFAULT CHARACTER SET utf8;`)
            await mysql.runQuery(`CREATE TABLE \`future_advisor\`.\`users\`
                                  (
                                      \`id\`                 SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
                                      \`first_name\`         VARCHAR(256) NULL,
                                      \`last_name\`          VARCHAR(256) NULL,
                                      \`email\`              VARCHAR(256) NULL,
                                      \`temp_pass\`          VARCHAR(256) NULL,
                                      \`questionnaire_rank\` VARCHAR(256) NULL,
                                      PRIMARY KEY (\`id\`)
                                  );`)

        } catch (error) {
            console.error(`Error migrating: ${error.message}`)
        }
    }
)();
