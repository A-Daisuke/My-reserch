const Benchmark = {
    run: function() {
        var VAR_1 = "a";
        var VAR_2 = 1;
        for (var VAR_3 = "", VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          VAR_3 += "<div>" + VAR_1 + "</div>";
          VAR_3 += "<div>" + VAR_2 + "</div>";
        }
    }
};