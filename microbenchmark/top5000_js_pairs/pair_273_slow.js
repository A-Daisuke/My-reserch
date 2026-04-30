const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          Object.defineProperties(this, {
            KEY_1: { KEY_2: VAR_1 },
            KEY_3: { KEY_4: VAR_2 },
          });
        }
        for (var VAR_3 = 0; VAR_3 < 100; ++VAR_3) {
          (function (VAR_4, VAR_5) {
            for (var VAR_6 = 0; VAR_6 < VAR_4; ++VAR_6) {
              VAR_5.push(new FUNCTION_1(VAR_3, VAR_6));
            }
          })(100, []);
        }
    }
};