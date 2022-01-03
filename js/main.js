// var contentful = require('contentful');

var client = contentful.createClient({
    space: 'bxfzp74j7r2t',
    accessToken: 'eVVaLMJtEYOisuvIRcLPcbkBnmgRIqqMoAYPgNtaM3I',
  });

client.getEntries().then(function (entries) {
    console.log("here")
// log the title for all the entries that have it
    entries.items.forEach(function (entry) {
        console.log(entry)
        if (entry.fields.title) {
            console.log("sadas")
            console.log(entry.fields.title);
            console.log(entry.fields.slideshow);
            console.log('https:'+ entry.fields.hero.fields.file.url);
            document.getElementById('first').src = 'https:'+ entry.fields.hero.fields.file.url;
        }
    });
});
