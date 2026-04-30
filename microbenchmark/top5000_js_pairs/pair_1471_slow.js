const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          this.VAR_3 = VAR_1;
          this.VAR_4 = VAR_2;
        }
        for (var VAR_5 = 0; VAR_5 < 100; ++VAR_5) {
          (function (VAR_6, VAR_7) {
            for (var VAR_8 = 0; VAR_8 < VAR_6; ++VAR_8) {
              VAR_7.push(new FUNCTION_1(VAR_5, VAR_8));
            }
          })(100, []);
        }
    }
};