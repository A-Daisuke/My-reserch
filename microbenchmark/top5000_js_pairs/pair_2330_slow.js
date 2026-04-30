const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push("1234567");
        }
        FUNCTION_1 = function (VAR_3) {
          var VAR_4 = -(VAR_3.length % 3);
          return VAR_3
            .split("")
            .map(function (VAR_5) {
              return ++VAR_2 % 3 == 0 ? VAR_5 + " " : VAR_5;
            })
            .join("");
        };
        for (var VAR_6 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          FUNCTION_1(VAR_1[VAR_2]);
        }
    }
};