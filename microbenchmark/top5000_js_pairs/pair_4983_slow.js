const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          return VAR_1.split("").reduce(function (VAR_2, VAR_3, VAR_4) {
            return VAR_3 === VAR_3.toUpperCase() ? VAR_2.concat(VAR_4) : VAR_2;
          }, []);
        };
        var FUNCTION_2 = function (VAR_5) {
          return VAR_1.split("").reduce(function (VAR_6, VAR_7, VAR_8) {
            var VAR_9 = VAR_3.charCodeAt(0);
            return VAR_9 >= 65 && VAR_9 <= 90 ? VAR_2.concat(VAR_4) : VAR_2;
          }, []);
        };
        FUNCTION_1("WiLDcArd wUz HeRe");
    }
};