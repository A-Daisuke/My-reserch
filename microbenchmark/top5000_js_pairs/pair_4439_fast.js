const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_3 = 0;
          for (var VAR_4 = 0, VAR_5 = VAR_1.length; VAR_4 < VAR_5; ++VAR_4) {
            switch (VAR_1[VAR_4]) {
              case "(":
                ++VAR_3;
                break;
              case ")":
                --VAR_3;
                break;
            }
            if (VAR_3 < 0) {
              alert("error");
              break;
            }
          }
          return !!VAR_3;
        }
        FUNCTION_1("count(machineId)+count(toolId)");
    }
};