const Benchmark = {
    run: function() {
        var VAR_1 = "21312312312*324432432";
        var VAR_2 = 1000;
        while (--VAR_2) {
          for (var VAR_3 = 0, VAR_4 = VAR_1.length; VAR_3 < VAR_4; VAR_3++) {
            if (VAR_1[VAR_3] === "*") break;
          }
        }
    }
};