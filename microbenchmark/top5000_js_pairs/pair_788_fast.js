const Benchmark = {
    run: function() {
        var VAR_1 = Array.apply(null, Array(10000)).map(function () {
          return (Math.random() * 100).toFixed(0);
        });
        while (VAR_1.length >= 3) {
          var VAR_2 = VAR_1.splice(-3, 3);
        }
    }
};