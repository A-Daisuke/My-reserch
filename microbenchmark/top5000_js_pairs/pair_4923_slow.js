const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = 0,
          VAR_3 = 1000;
        for (var VAR_4 = 0; VAR_4 < VAR_3; VAR_4++) {
          if (Object.prototype.toString.call(VAR_1) === "[object Undefined]") VAR_2++;
        }
    }
};