function Book (title, author, year, status, chapters) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.status = status;
    this.chapters = chapters;
    this.addChapters = function(chapter) {
        this.chapters.push(chapter);
    }
    this.removeChapters = function() {
        this.chapters.pop();
    }
    this.description = function() {
        const available = this.status ? 'available' : "not available";
        const chaptersInfo = this.chapters.length ? `There are currently ${this.chapters.length} chapters, which are the following: ${this.chapters}"` : 'Currently there is no information about its chapters.';
        return `The book "${this.title}" was written by ${this.author} in ${this.year}, and it's ${available}. ${chaptersInfo}`
    }
}

const book1 = new Book("A Game of Thrones", "George R.R. Martin", 1996, false, [])
const book2 = new Book("A Clash of Kings", "George R.R. Martin", 1999, true, [])
const book3 = new Book("A Storm of Swords", "George R.R. Martin", 2000, false, [])
const book4 = new Book("A Feast for Crows", "George R.R. Martin", 2005, true, [])
const book5 = new Book("A Dance with Dragons", "George R.R. Martin", 2011, false, [])
const book6 = new Book("Cien Años de Soledad", "Gabriel García Márquez", 1967, true, [])

console.log(
    `1. ${book1.description()}

2. ${book2.description()}

3. ${book3.description()}

4. ${book4.description()}

5. ${book5.description()}`
)
book1.addChapters("Prologue");
book1.addChapters("Bran I");
book1.addChapters("Catelyn I");
book1.addChapters("Daenerys I");
book1.addChapters("Eddard I");
book1.addChapters("Jon I");
book1.addChapters("Catelyn II");
book1.addChapters("Arya I");
book1.addChapters("Bran II");
book1.addChapters("Tyrion I");

book2.addChapters("Prologue");
book2.addChapters("Arya I");
book2.addChapters("Sansa I");
book2.addChapters("Tyrion I");
book2.addChapters("Bran I");
book2.addChapters("Arya II");
book2.addChapters("Jon I");
book2.addChapters("Catelyn I");
book2.addChapters("Tyrion II");
book2.addChapters("Davos I");

book3.addChapters("Prologue");
book3.addChapters("Jaime I");
book3.addChapters("Catelyn I");
book3.addChapters("Arya I");
book3.addChapters("Tyrion I");
book3.addChapters("Sansa I");
book3.addChapters("Jon I");
book3.addChapters("Daenerys I");
book3.addChapters("Bran I");
book3.addChapters("Davos I");

book4.addChapters("Prologue");
book4.addChapters("The Prophet");
book4.addChapters("The Captain of Guards");
book4.addChapters("Cersei I");
book4.addChapters("Brienne I");
book4.addChapters("Samwell I");
book4.addChapters("Arya I");
book4.addChapters("Cersei II");
book4.addChapters("Jaime I");
book4.addChapters("Brienne II");

book5.addChapters("Prologue");
book5.addChapters("Tyrion I");
book5.addChapters("Daenerys I");
book5.addChapters("Jon I");
book5.addChapters("Bran I");
book5.addChapters("Tyrion II");
book5.addChapters("Davos I");
book5.addChapters("Jon II");
book5.addChapters("Daenerys II");
book5.addChapters("Reek I");

console.log(
    `1. ${book1.description()}.

2. ${book2.description()}.

3. ${book3.description()}.

4. ${book4.description()}.

5. ${book5.description()}.`
)

book1.removeChapters()
book1.removeChapters()
book2.removeChapters()
book2.removeChapters()
book3.removeChapters()
book3.removeChapters()
book4.removeChapters()
book4.removeChapters()
book5.removeChapters()
book5.removeChapters()

console.log(
    `1. ${book1.description()}.

2. ${book2.description()}.

3. ${book3.description()}.

4. ${book4.description()}.

5. ${book5.description()}.`
)