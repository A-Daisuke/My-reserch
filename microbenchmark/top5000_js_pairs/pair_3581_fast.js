const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = [],
            VAR_3 = 2;
          while (VAR_1 > 1) {
            while (VAR_1 % VAR_3 === 0) {
              VAR_2.push(VAR_3);
              VAR_1 /= VAR_3;
            }
            if (VAR_3 === 2) {
              VAR_3 += 1;
            } else {
              VAR_3 += 2;
            }
          }
        }
        FUNCTION_1(600851475143);
    }
};