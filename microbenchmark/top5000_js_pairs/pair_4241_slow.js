const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = 0;
          while (VAR_1 < VAR_2) {
            VAR_1.setDate(VAR_1.getDate() + 1);
            if (VAR_1.getDay() === 0 || VAR_1.getDay() == 6) {
              ++VAR_3;
            }
          }
          return VAR_3;
        }
        FUNCTION_1(new Date(2011, 6, 2), new Date(2011, 7, 2));
    }
};