const Benchmark = {
    run: function() {
        var VAR_1 = "regexes are fun";
        var VAR_5 = new RegExp("x", "i");
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          VAR_5.test(VAR_1);
        }
    }
};