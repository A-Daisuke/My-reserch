const Benchmark = {
    run: function() {
        (function () {
          function FUNCTION_1(VAR_6) {
            VAR_6 = ((VAR_6 + 53.4070751) % 6.2831853) - 3.1415927;
            if (VAR_6 < 0) return 1.27323954 * VAR_6 + 0.405284735 * VAR_6 * VAR_6;
            else return 1.27323954 * VAR_6 - 0.405284735 * VAR_6 * VAR_6;
          }
          var VAR_1 = 0;
          var VAR_2 = 1000000;
          var VAR_3 = Math.PI;
          var VAR_4 = (2 * VAR_3) / VAR_2;
          for (var VAR_5 = 0; VAR_5 < VAR_2; ++VAR_5) {
            VAR_1 += FUNCTION_1(VAR_4 * VAR_5 - VAR_3);
          }
        })();
    }
};