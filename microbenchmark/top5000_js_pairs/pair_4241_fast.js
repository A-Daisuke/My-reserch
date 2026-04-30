const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 =
            Math.abs(VAR_1.getTime() - VAR_2.getTime()) / (1000 * 60 * 60 * 24 * 7);
          VAR_3 -= 0.1;
          VAR_3 = Math.floor(VAR_3);
          VAR_3 *= 2;
          if (VAR_1.getDay() == 6) VAR_3 += 2;
          if (VAR_1.getDay() == 0) VAR_3 += 1;
          if (VAR_2.getDay() == 6) VAR_3 += 1;
          if (VAR_2.getDay() == 0) VAR_3 += 2;
          return VAR_3;
        }
        FUNCTION_1(new Date("06/02/2011"), new Date("07/02/2011"));
    }
};