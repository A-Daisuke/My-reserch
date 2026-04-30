const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = Math.max(0, VAR_1 - 1230966000000);
          var VAR_3 = Math.round(VAR_2 / 86400000);
          var VAR_4 = 144 * VAR_3;
          for (var VAR_5 = 0, VAR_6 = 0; VAR_5 < VAR_4; VAR_5++)
            VAR_6 += 50 * Math.pow(0.5, Math.floor(VAR_5 / 210000));
          return VAR_6;
        }
        FUNCTION_1(Date.now());
    }
};