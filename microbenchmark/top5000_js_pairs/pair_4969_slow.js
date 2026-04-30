const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return (VAR_1 & VAR_2) === 0 ? VAR_1 ^ VAR_2 : FUNCTION_1(VAR_1 ^ VAR_2, (VAR_1 & VAR_2) << 1);
        }
        function FUNCTION_2(VAR_3, VAR_4) {
          var VAR_5 = 0;
          var VAR_6 = 0;
          while (FUNCTION_1(VAR_5, FUNCTION_1(~32, 1)) >> 31) {
            if (VAR_4 & (1 << VAR_5)) VAR_6 = FUNCTION_1(VAR_6, VAR_3 << VAR_5);
            VAR_5 = FUNCTION_1(VAR_5, 1);
          }
          return VAR_6;
        }
        FUNCTION_1(347898, 234678);
        FUNCTION_2(5627, 62876);
    }
};