const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_3, VAR_4) {
          this.VAR_9 = VAR_3;
          this.VAR_10 = VAR_4;
        }
        for (var VAR_5 = 0; VAR_5 < 100; ++VAR_5) {
          (function (VAR_6, VAR_7) {
            for (var VAR_8 = 0; VAR_8 < VAR_6; ++VAR_8) {
              VAR_7.push({
                KEY_5: VAR_5,
                KEY_6: VAR_8,
              });
            }
          })(100, []);
        }
    }
};