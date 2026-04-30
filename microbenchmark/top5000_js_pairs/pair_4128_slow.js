const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          try {
            return VAR_1.b.c && true;
          } catch (VAR_2) {
            return false;
          }
        }
        FUNCTION_1({});
    }
};