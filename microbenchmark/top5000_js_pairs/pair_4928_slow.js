const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          JSON.parse("0");
        }
        function FUNCTION_2() {
          JSON.parse("");
        }
        try {
          FUNCTION_2();
        } catch (VAR_1) {}
    }
};