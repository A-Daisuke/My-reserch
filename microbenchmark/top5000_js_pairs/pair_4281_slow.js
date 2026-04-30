const Benchmark = {
    run: function() {
        var VAR_1, VAR_2;
        function FUNCTION_1(VAR_3) {
          try {
            VAR_2.push(VAR_3);
          } catch (VAR_4) {
            VAR_2 = [VAR_3];
          }
        }
        for (VAR_1 = 0; VAR_1 < 75; VAR_1 += 1) {
          FUNCTION_1(VAR_1);
        }
    }
};