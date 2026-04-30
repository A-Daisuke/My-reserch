const Benchmark = {
    run: function() {
        var VAR_1 = "1e";
        for (var VAR_2 = 0; VAR_2 < 300; VAR_2++) {
          (VAR_1 + VAR_2).toString();
        }
    }
};