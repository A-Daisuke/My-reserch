const Benchmark = {
    run: function() {
        String.prototype.FUNCTION_1 = function (VAR_1) {
          var VAR_2 = this;
          while (--VAR_1) VAR_2 += this;
          return VAR_2;
        };
        var VAR_3 = [];
        for (var VAR_4 = 0; VAR_4 < 100; VAR_4++) {
          VAR_3.push("0".FUNCTION_1(5 - VAR_4.toString().length) + VAR_4);
        }
    }
};