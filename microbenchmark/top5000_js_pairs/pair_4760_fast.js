const Benchmark = {
    run: function() {
        var VAR_1 = 300,
          VAR_2 = "",
          VAR_4 = new Array(VAR_1);
        for (var VAR_5 = 0; VAR_5 < VAR_1; ++VAR_5) {
          VAR_2 = VAR_2.concat("String concatenation. ");
        }
    }
};