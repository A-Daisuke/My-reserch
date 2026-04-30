const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = {};
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_1.push(VAR_3 + "string");
          VAR_2[VAR_3 + "string"] = VAR_3 + "string";
        }
        var VAR_4 = [];
        for (var VAR_5 = 0; VAR_3 < 1000; VAR_3++) {
          if (typeof VAR_2[VAR_3 + "string"] !== "undefined") {
            VAR_4.push(VAR_2[VAR_3]);
          }
        }
    }
};