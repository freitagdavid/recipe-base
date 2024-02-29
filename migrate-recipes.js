import replace from 'replace-in-file';


function migrateFile(glob, from, to) {
    const options = {

        files: [
            glob
        ],

        //Replacement to make (string or regex) 
        from: from,
        to: to,
    };

    try {
        let changedFiles = replace.sync(options);
        console.log('Modified files:', changedFiles.join(', '));
    }
    catch (error) {
        console.error('Error occurred:', error);
    }
}

function runMigrations() {
    migrateFiles('./src/content/recipes/*.md', /image:\s/g, 'image: ../images/'); // Fix image paths;
    migrateFiles('./src/content/**/*.md', /layout:.*/g, ''); // Remove layout frontmatter;
}