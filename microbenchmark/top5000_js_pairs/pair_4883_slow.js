const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          try {
            JSON.parse(VAR_1);
          } catch (VAR_2) {}
        }
        FUNCTION_1({});
        FUNCTION_1("{}");
    }
};