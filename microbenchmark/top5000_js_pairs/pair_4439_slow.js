const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          try {
            new Function(VAR_1);
            return true;
          } catch (VAR_2) {
            return !(VAR_2 instanceof SyntaxError);
          }
        }
        FUNCTION_1("count(machineId)+count(toolId))");
    }
};