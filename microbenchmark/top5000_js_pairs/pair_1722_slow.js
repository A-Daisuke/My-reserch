const Benchmark = {
    run: function() {
        var VAR_1 = 1000,
          VAR_2 = "transform me to pascal case",
          VAR_3;
        for (VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
          VAR_2.replace(/(?:^|\s)\S/g, function (VAR_4) {
            return VAR_4.toUpperCase();
          });
        }
    }
};