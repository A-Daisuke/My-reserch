const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = 100000,
          VAR_3 = [],
          FUNCTION_1 = function () {};
        while (VAR_2--) {
          VAR_3.push(Math.random() < 0.5 ? [42] : [1, 2, 3]);
        }
        var VAR_4;
        while (VAR_3.length > 0) {
          if ((VAR_4 = VAR_3.pop()).length === 1) {
            FUNCTION_1.call(this, VAR_4[0]);
          } else {
            FUNCTION_1.apply(this, VAR_4);
          }
        }
    }
};