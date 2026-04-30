const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = "push";
        var VAR_3 = VAR_1.push;
        function FUNCTION_1(VAR_4, VAR_5) {
          if (VAR_2 == "push") {
            VAR_1.push(VAR_5);
          } else {
            VAR_1.shift(VAR_5);
          }
          VAR_1.pop();
        }
        function FUNCTION_2(VAR_6, VAR_7) {
          VAR_1[VAR_2](VAR_7);
          VAR_1.pop();
        }
        FUNCTION_1("push", 1);
        FUNCTION_1("shift", 2);
    }
};