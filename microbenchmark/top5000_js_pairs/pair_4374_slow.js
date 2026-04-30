const Benchmark = {
    run: function() {
        var VAR_1 = {};
        for (var VAR_2 = 0; VAR_2 < 100; ++VAR_2) {
          VAR_1["val_" + VAR_2 * 3] = "not empty";
        }
        for (var VAR_3 = 0; VAR_2 < 300; ++VAR_2) {
          var VAR_4 = "val_" + VAR_2;
          if (typeof VAR_1[VAR_4] === "string") delete VAR_1[VAR_4];
        }
    }
};