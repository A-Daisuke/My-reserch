const Benchmark = {
    run: function() {
        var VAR_1 = [5, 10, 15, 20];
        var VAR_2 = [1000, 1100, 2000, 2200];
        var VAR_3;
        function FUNCTION_1(VAR_4, VAR_5) {
          try {
            var VAR_6 = (VAR_4 - VAR_1[0]) / (VAR_1[1] - VAR_1[2]);
            var VAR_7 = (VAR_5 - VAR_1[1]) / (VAR_1[2] - VAR_1[3]);
            VAR_6 += VAR_2[2] - VAR_2[0];
            VAR_7 += VAR_2[3] - VAR_2[1];
            VAR_6 -= VAR_3.w / 2;
            VAR_7 -= VAR_3.h / 2;
            return {
              KEY_1: VAR_6,
              KEY_2: VAR_7,
            };
          } catch (VAR_8) {
            return null;
          }
        }
        VAR_3 = null;
        FUNCTION_1(5, 5);
    }
};