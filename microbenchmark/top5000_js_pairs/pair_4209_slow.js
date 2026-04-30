const Benchmark = {
    run: function() {
        var VAR_1 = "Alma";
        String.prototype.FUNCTION_1 = function (VAR_2) {
          return new Array(VAR_2 + 1).join(this);
        };
        VAR_1.FUNCTION_1(1000);
    }
};