const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; ++VAR_2) {
          VAR_1.push({
            KEY_1: "bob",
            KEY_2: VAR_2,
            KEY_3: "bar",
          });
        }
        var VAR_3 = [];
        var VAR_4 = ["name", "age", "foo"];
        for (var VAR_5 = 0; VAR_5 < 10000; ++VAR_5) {
          VAR_3.push(["bob", VAR_5, "bar"]);
        }
        for (var VAR_6 = 0; VAR_6 < 10000; ++VAR_6) {
          var VAR_10 = VAR_3[VAR_6][0];
          var VAR_11 = VAR_3[VAR_6][1];
          var VAR_12 = VAR_3[VAR_6][2];
        }
    }
};