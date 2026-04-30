const Benchmark = {
    run: function() {
        var VAR_2 = (function () {
          var VAR_3 = 123456789,
            VAR_4 = 362436069,
            VAR_5 = 521288629,
            VAR_6 = 88675123;
          return function () {
            var VAR_7 = VAR_3 ^ (VAR_3 << 11);
            VAR_3 = VAR_4;
            VAR_4 = VAR_5;
            VAR_5 = VAR_6;
            VAR_6 = VAR_6 ^ (VAR_6 >> 19) ^ (VAR_7 ^ (VAR_7 >> 8));
            return VAR_6;
          };
        })();
        for (var VAR_1 = 0; VAR_1 < 1000; VAR_1++) {
          VAR_2();
        }
    }
};