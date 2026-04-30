const Benchmark = {
    run: function() {
        var VAR_1 = 1000000,
          VAR_2 = ["a", "b"];
        for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
          VAR_2.forEach(function (VAR_4) {
            return VAR_4 + "x";
          });
        }
    }
};