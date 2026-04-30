const Benchmark = {
    run: function() {
        function FUNCTION_2() {
          return Math.round(123.321 * 100) / 100;
        }
        function FUNCTION_1() {
          return +(123.321).toFixed(2);
        }
        FUNCTION_2();
    }
};