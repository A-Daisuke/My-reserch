const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          this.VAR_3 = VAR_1;
          this.VAR_4 = VAR_2;
        }
        FUNCTION_1.VAR_5 = Object.create(null);
        function FUNCTION_2(VAR_11, VAR_12) {
          return [VAR_11, VAR_12];
        }
        (function (VAR_6, VAR_7) {
          var VAR_8 = 0;
          for (var VAR_9 = 0; VAR_9 < 1000; ++VAR_9) {
            for (var VAR_10 = 0; VAR_10 < VAR_6; ++VAR_10) {
              if (VAR_7[0] % VAR_10) {
                --VAR_7[0];
              }
            }
          }
        })(100, FUNCTION_2(10, 10));
    }
};