const Benchmark = {
    run: function() {
        var VAR_1 = ",";
        var VAR_2 = new RegExp(VAR_1, "g"),
          VAR_3 = 0,
          VAR_4 = "";
        for (var VAR_5 = 0; VAR_5 < 1000; VAR_5++) {
          for (var VAR_6 = 0; VAR_6 < 100; VAR_6++) {
            VAR_4 += "foo";
          }
          VAR_4 += ",";
        }
        VAR_3 = VAR_4.match(VAR_2).length;
    }
};