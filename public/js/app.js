(function($) {
    console.log('hi there');
    var books;
    $.get('/api/book', function(data) {
        // console.log(data);
        books = data;
        render(books)
    });

    function render(books) {
        $.each(books, function(index, book) {
            console.log(book);
            $('body').append('<a href="/book/' + book._id + '">'+book.name+"</a><br>")
        })
    }
}(jQuery))
