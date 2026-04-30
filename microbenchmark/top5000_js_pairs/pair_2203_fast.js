const Benchmark = {
    run: function() {
        var VAR_1 = "<ul>";
        for (var VAR_2 = 0; VAR_2 < 5000; VAR_2++) {
          VAR_1 += "<li>" + VAR_2 + "</li>";
        }
        VAR_1 += "</ul>";
    }
};