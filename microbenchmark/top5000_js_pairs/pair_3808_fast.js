const Benchmark = {
    run: function() {
        var VAR_1 = "";
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          VAR_1 += '<li><a href="' + "foo" + '">' + "bar" + "</a></li>";
        }
    }
};