const Benchmark = {
    run: function() {
        var VAR_1 = {};
        var VAR_4 = "width";
        for (var VAR_2 = 0; VAR_2 < 1000000; VAR_2++) {
          var VAR_3 = VAR_1[VAR_4];
        }
    }
};