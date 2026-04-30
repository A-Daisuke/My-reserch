const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = Math.max(0, VAR_1 - 1230966000000);
          var VAR_3 = Math.round(VAR_2 / 86400000);
          var VAR_4 = 144 * VAR_3;
          var VAR_7 = Math.floor(VAR_4 / 210000);
          var VAR_8 = VAR_4 - 210000 * VAR_7;
          var VAR_9 = Math.pow(0.5, VAR_7);
          var VAR_10 = 21000000 * (1 - VAR_9);
          VAR_10 += 50 * VAR_8 * VAR_9;
          return VAR_10;
        }
        FUNCTION_1(Date.now());
    }
};