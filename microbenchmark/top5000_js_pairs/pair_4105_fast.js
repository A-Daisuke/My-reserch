const Benchmark = {
    run: function() {
        var VAR_1 = "";
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          VAR_1 = VAR_1.concat(
            "<div>",
            "<h2>Premio </h2>",
            '<img src="" alt="" id="article-" height="200" width="200">',
            '<a class="productLink" href="#" data-articleid=""  rel="#showProduct">Ver Producto</a>',
            "</div>",
          );
        }
    }
};