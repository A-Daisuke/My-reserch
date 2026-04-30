const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          Object.defineProperties(this, {
            KEY_1: { KEY_2: VAR_1 },
            KEY_3: { KEY_4: VAR_2 },
          });
        }
        function FUNCTION_2(VAR_3, VAR_4) {
          this.KEY_1 = VAR_3;
          this.KEY_3 = VAR_4;
        }
        for (var VAR_5 = 0; VAR_5 < 100; ++VAR_5) {
          (function (VAR_6, VAR_7) {
            for (var VAR_8 = 0; VAR_8 < VAR_6; ++VAR_8) {
              VAR_7.push(new FUNCTION_2(VAR_5, VAR_8));
            }
          })(100, []);
        }
    }
};