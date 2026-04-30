const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = 0;
          for (var VAR_3 = 0, VAR_4 = VAR_1.length; VAR_3 < VAR_4; ++VAR_3) {
            switch (VAR_1[VAR_3]) {
              case "(":
                ++VAR_2;
                break;
              case ")":
                --VAR_2;
                break;
            }
            if (VAR_2 < 0) {
              alert("error");
              break;
            }
          }
          return !!VAR_2;
        }
        function FUNCTION_2(VAR_5) {
          try {
            new Function(VAR_5);
            return true;
          } catch (VAR_6) {
            return !(VAR_6 instanceof SyntaxError);
          }
        }
        FUNCTION_2("count(machineId)+count(toolId)");
    }
};