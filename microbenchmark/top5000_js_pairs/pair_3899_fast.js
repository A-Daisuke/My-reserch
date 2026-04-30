const Benchmark = {
    run: function() {
        var VAR_1 = Object.create(null);
        Object.assign(VAR_1, {
          "[object Object]": 1,
          "[object Array]": 1,
          "[object Map]": 1,
          "[object Set]": 1,
          "[object WeakMap]": 1,
          "[object WeakSet]": 1,
        });
        var VAR_2 = 1000;
        while (VAR_2--) {
          var VAR_3 = "[object Object]" in VAR_1;
        }
    }
};