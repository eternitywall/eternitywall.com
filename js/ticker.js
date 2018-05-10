// Ticker JavaScript


$.getJSON( "https://blog.eternitywall.com/feed.json", function( data ) {
    data.forEach(function(post){
        var e = $( document.createElement('li') );

        var date = new Date(Date.parse(post.date) );
        var locale = "en-us";
        var day = date.getDate();
        var month = date.toLocaleString(locale, { month: "long" });
        var year = date.getFullYear();

        e.addClass("post-preview")
            .css("height","200px")
            .append("<img src='" + post.image + "' class='thumb img-responsive'>")
            .append(
                "<a href='" + post.url +"'>" +
                    "<h3 class='post-title'>" + post.title + "</h3>" +
                    //"<h3 class='post-subtitle'>" + post.subtitle + "</h3>" +
                "</a>")
            .append("<p class='post-meta'>Posted by <a href='" + post.author_url + "'>" + post.author + "</a>"+
                " on " + month + " " + day + ", " + year + "</p>");

        $(e).appendTo($("#ticker"));
    })

    $('#ticker').newsTicker({
        row_height: 200,
        max_rows: 2,
        speed: 1000
    })
})
