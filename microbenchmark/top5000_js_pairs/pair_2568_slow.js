const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1, VAR_2) {
          VAR_2 = typeof VAR_2 === "string" ? VAR_2 : "";
          if (VAR_1.length > 3) {
            VAR_1 = VAR_1.replace(/\d{3}$/, function (VAR_3) {
              VAR_2 = "," + VAR_3 + VAR_2;
              return "";
            });
            return FUNCTION_1(VAR_1, VAR_2);
          } else {
            return VAR_1 + VAR_2;
          }
        };
        for (var VAR_4 = 0; VAR_4 < 50; VAR_4++) {
          var VAR_5 = "";
          for (var VAR_6 = 0; VAR_6 < VAR_4; VAR_6++) {
            VAR_5 = VAR_5 + "1";
          }
          FUNCTION_1(VAR_5);
        }
    }
};