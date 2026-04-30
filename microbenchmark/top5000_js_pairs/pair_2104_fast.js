const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9],
          VAR_2,
          VAR_3;
        function FUNCTION_1(VAR_4, VAR_5) {
          var VAR_6 = Math.abs(VAR_4).toString();
          VAR_5 = VAR_5 || 2;
          while (VAR_5 > VAR_6.length) {
            VAR_6 = "0" + VAR_6;
          }
          return VAR_6;
        }
        for (VAR_2 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          for (VAR_3 = 1000; VAR_3 >= 0; VAR_3--) {
            FUNCTION_1(VAR_3, VAR_2);
            FUNCTION_1(VAR_3);
          }
        }
    }
};