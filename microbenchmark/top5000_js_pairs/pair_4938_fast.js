const Benchmark = {
    run: function() {
        FUNCTION_1(1, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5);
        function FUNCTION_1() {
          var VAR_2,
            VAR_3,
            VAR_4 = 0;
          for (VAR_2 = 0, VAR_3 = arguments.length; VAR_2 < VAR_3; VAR_2++) {
            VAR_4 += arguments[VAR_2];
          }
          return VAR_4;
        }
    }
};