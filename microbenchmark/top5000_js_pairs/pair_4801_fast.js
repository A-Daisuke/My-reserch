const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return VAR_1.substring(0, 7) === "in valu";
        }
        VAR_2 = "in value";
        VAR_3 = "of value";
        var VAR_4 = 100;
        while (--VAR_4 !== 0) {
          FUNCTION_1(VAR_2);
          FUNCTION_1(VAR_3);
        }
    }
};