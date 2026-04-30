const Benchmark = {
    run: function() {
        var VAR_1 = {};
        var VAR_2 = "width";
        VAR_1.VAR_3 = "200px";
        for (var VAR_4 = 0; VAR_4 < 1000000; VAR_4++) {
          var VAR_5 = VAR_1[VAR_2];
        }
    }
};