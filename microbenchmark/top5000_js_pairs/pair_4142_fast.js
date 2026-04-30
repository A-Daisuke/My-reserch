const Benchmark = {
    run: function() {
        var VAR_1 = 1000,
          VAR_2 = 0,
          VAR_3 = "x",
          VAR_4;
        String.prototype.FUNCTION_1 = function (VAR_5) {
          return new Array(VAR_5 + 1).join(this);
        };
        VAR_4 = VAR_3;
        VAR_4.repeat(VAR_1);
    }
};