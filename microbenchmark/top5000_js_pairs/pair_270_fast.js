const Benchmark = {
    run: function() {
        var VAR_1 = [10, 10, 10];
        var VAR_2 = new Float32Array([10, 10, 10]);
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
          var VAR_4 = Array.prototype.slice.call(VAR_1);
        }
    }
};