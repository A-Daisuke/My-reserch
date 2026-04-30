const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return VAR_1 == "ARRAY" ? [] : VAR_1 == "OBJECT" ? {} : VAR_1;
        }
        var VAR_2 = ["ARRAY", "OBJECT", 1];
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          FUNCTION_1(VAR_2[VAR_3 % VAR_2.length]);
        }
    }
};