const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = [
            [1, 1],
            [1, 0],
          ];
          if (VAR_1 <= 0) return 0;
          for (var VAR_3 = 2; VAR_3 <= VAR_1 - 1; VAR_3++)
            VAR_2 = [
              [VAR_2[0][0] + VAR_2[0][1], VAR_2[0][0]],
              [VAR_2[1][0] + VAR_2[1][1], VAR_2[1][0]],
            ];
          return VAR_2[0][0];
        }
        FUNCTION_1(300);
    }
};