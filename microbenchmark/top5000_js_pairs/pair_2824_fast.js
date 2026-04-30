const Benchmark = {
    run: function() {
        var VAR_4 = "foo";
        for (var VAR_1 = 0; VAR_1 < 10000; VAR_1++) {
          var VAR_5 = VAR_4 == "bar" || VAR_4 == "foo";
        }
    }
};