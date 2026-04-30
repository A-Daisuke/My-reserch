const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000).fill(null);
        var VAR_2 = new Array(1000).fill("a");
        function FUNCTION_1(VAR_3) {
          return VAR_3;
        }
        function FUNCTION_2(VAR_4) {
          return VAR_4 !== null;
        }
        function FUNCTION_3(VAR_5) {
          return VAR_5.filter(FUNCTION_2).map(FUNCTION_1);
        }
        FUNCTION_3(VAR_1);
        FUNCTION_3(VAR_2);
    }
};