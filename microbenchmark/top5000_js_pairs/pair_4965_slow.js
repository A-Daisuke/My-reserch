const Benchmark = {
    run: function() {
        var VAR_1 = ['{"number": 1.235}', '{"number": NaN}'];
        for (var VAR_2 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          try {
            JSON.parse(VAR_1[VAR_2]);
          } catch (VAR_3) {
            var VAR_4 = VAR_1[VAR_2].replace("NaN", "null");
            JSON.parse(VAR_4);
          }
        }
    }
};