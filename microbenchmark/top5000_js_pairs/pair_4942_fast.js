const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          JSON.parse("0");
        }
        try {
          FUNCTION_1();
        } catch (VAR_1) {}
    }
};