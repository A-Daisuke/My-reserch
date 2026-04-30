const Benchmark = {
    run: function() {
        var VAR_1 = new Float32Array(9000);
        VAR_1.reduce(function (VAR_2, VAR_3) {
          return VAR_2 > VAR_3 ? VAR_2 : VAR_3;
        }, -Infinity);
    }
};