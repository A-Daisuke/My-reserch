const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_4, VAR_5, VAR_6) {
          return VAR_6(function () {
            var VAR_7;
            VAR_6((VAR_7 = { KEY_1: 10 }));
            return VAR_7;
          }, true);
        }
        var VAR_8 = FUNCTION_1("type", [], function (VAR_9, VAR_10) {
          VAR_9.FUNCTION_3 = function () {
            return VAR_9.KEY_1;
          };
          return VAR_9;
        });
        var VAR_11 = VAR_8();
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_11.FUNCTION_3();
        }
    }
};