const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        function FUNCTION_1(VAR_2, VAR_3) {
          return VAR_2 + VAR_3;
        }
        function FUNCTION_2(VAR_4, VAR_5) {
          if (typeof VAR_4 === "number" && typeof VAR_5 === "number") {
            return VAR_4 + VAR_5;
          }
          return null;
        }
        var VAR_6 = 0;
        for (var VAR_7 = 0; VAR_7 < VAR_1; ++VAR_7) {
          VAR_6 = FUNCTION_2(VAR_6, VAR_7);
        }
        console.log(VAR_6);
    }
};