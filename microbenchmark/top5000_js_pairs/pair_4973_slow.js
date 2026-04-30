const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          try {
            return undefined !== eval(VAR_1);
          } catch (VAR_2) {
            return false;
          }
          return true;
        }
        FUNCTION_1("a.e.b.c.d");
    }
};