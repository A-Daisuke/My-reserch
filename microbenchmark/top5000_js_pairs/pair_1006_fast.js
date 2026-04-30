const Benchmark = {
    run: function() {
        var VAR_1 = [10, 10, 10];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          var VAR_3 = Array.prototype.slice.call(VAR_1);
        }
    }
};