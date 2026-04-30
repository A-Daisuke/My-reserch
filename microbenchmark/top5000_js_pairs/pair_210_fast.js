const Benchmark = {
    run: function() {
        var VAR_1 = {};
        var VAR_2 = "width";
        for (var VAR_3 = 0; VAR_3 < 1000000; VAR_3++) {
          var VAR_4 = VAR_1[VAR_2];
        }
    }
};