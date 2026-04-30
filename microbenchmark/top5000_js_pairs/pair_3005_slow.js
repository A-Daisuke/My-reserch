const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = [
            [1000, "M"],
            [900, "DM"],
            [500, "D"],
            [400, "CD"],
            [100, "C"],
            [90, "XC"],
            [50, "L"],
            [40, "XL"],
            [10, "X"],
            [9, "IX"],
            [5, "V"],
            [4, "IV"],
            [1, "I"],
          ];
          for (var VAR_3 = 0; VAR_3 < VAR_2.length; ++VAR_3) {
            if (VAR_1 >= VAR_2[VAR_3][0]) {
              return VAR_2[VAR_3][1] + FUNCTION_1(VAR_1 - VAR_2[VAR_3][0]);
            }
          }
          return "";
        }
        FUNCTION_1(499999);
    }
};