const Benchmark = {
    run: function() {
        var VAR_2 = new RegExp("^\\s*$");
        function FUNCTION_1(VAR_1) {
          return typeof VAR_1 !== "string" || VAR_2.test(VAR_1);
        }
        var VAR_3;
        for (VAR_3 = 0; VAR_3 < 10000; VAR_3 += 1) {
          FUNCTION_1("string");
        }
    }
};