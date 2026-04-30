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
          var VAR_7 = VAR_1[VAR_6].KEY_1;
          var VAR_8 = VAR_1[VAR_6].KEY_2;
          var VAR_9 = VAR_1[VAR_6].KEY_3;
        }
    }
};