const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          JSON.parse("0");
        }
        try {
          JSON.parse("0");
        } catch (VAR_1) {}
    }
};