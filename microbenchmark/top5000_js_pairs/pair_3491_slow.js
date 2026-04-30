const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = -1;
          LOOP: while (true) {
            switch (VAR_3) {
              case -1:
              case 0:
                var VAR_4 = VAR_2;
                VAR_2 = (VAR_2 + -1) | 0;
                if (VAR_4 <= 0) {
                  VAR_3 = 1;
                  continue LOOP;
                }
                VAR_1 = (VAR_1 + 1) | 0;
                VAR_3 = 0;
                continue LOOP;
              case 1:
                var VAR_5 = VAR_1;
                return VAR_5;
            }
            break;
          }
        }
        FUNCTION_1(42, 50000);
    }
};