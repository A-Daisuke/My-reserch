const Benchmark = {
    run: function() {
        Number.prototype.FUNCTION_1 = function (VAR_1) {
          return this + VAR_1;
        };
        Number.prototype.VAR_2 = true;
        var VAR_3, VAR_4, VAR_5;
        for (var VAR_6 = 0; VAR_6 < 1000; VAR_6++) {
          VAR_6.FUNCTION_1(2);
        }
    }
};