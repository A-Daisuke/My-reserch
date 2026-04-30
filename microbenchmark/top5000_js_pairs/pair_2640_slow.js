const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push(Math.random());
        }
        var FUNCTION_1 = function (VAR_3, VAR_4, VAR_5) {
          var VAR_6 = VAR_1.slice();
          (function next() {
            VAR_4(VAR_6.shift());
            if (VAR_6.length) return next();
            else if (VAR_5) return VAR_5(VAR_1);
          })();
        };
        FUNCTION_1(VAR_1.slice(), function (VAR_7) {});
    }
};