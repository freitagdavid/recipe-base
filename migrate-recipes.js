import replace from 'replace-in-file';




function migrateImage() {

    const options = {

        files: [
            './src/content/recipes/*.md'
        ],

        //Replacement to make (string or regex) 
        from: /image:\s/g,
        to: 'image: ../images/',
    };

    try {
        let changedFiles = replace.sync(options);
        console.log('Modified files:', changedFiles.join(', '));
    }
    catch (error) {
        console.error('Error occurred:', error);
    }

}

function migrateRemoveLayout() {
    const options = {

        files: [
            './src/content/**/*.md'
        ],

        //Replacement to make (string or regex) 
        from: /layout:.*/g,
        to: '',
    };

    try {
        let changedFiles = replace.sync(options);
        console.log('Modified files:', changedFiles.join(', '));
    }
    catch (error) {
        console.error('Error occurred:', error);
    }
}

migrateRemoveLayout()