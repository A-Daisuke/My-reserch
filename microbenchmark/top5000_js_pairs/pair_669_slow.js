const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          this.VAR_3 = VAR_1;
          this.VAR_4 = VAR_2;
        }
        FUNCTION_1.VAR_5 = Object.create(null);
        function FUNCTION_2(VAR_6, VAR_7) {
          return [VAR_6, VAR_7];
        }
        (function (VAR_8, VAR_9) {
          var VAR_10 = 0;
          for (var VAR_11 = 0; VAR_11 < 1000; ++VAR_11) {
            for (var VAR_12 = 0; VAR_12 < VAR_8; ++VAR_12) {
              if (VAR_9.VAR_3 % VAR_12) {
                --VAR_9.VAR_3;
              }
            }
          }
        })(100, new FUNCTION_1(10, 10));
    }
};