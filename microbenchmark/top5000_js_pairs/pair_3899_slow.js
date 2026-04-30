const Benchmark = {
    run: function() {
        var VAR_1 = /^\[object (?:Object|Array|Map|Set|WeakMap|WeakSet)\]$/;
        var VAR_2 = 1000;
        while (VAR_2--) {
          var VAR_3 = VAR_1.test("[object Object]");
        }
    }
};