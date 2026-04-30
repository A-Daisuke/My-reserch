const Benchmark = {
    run: function() {
        var VAR_1 = Array.apply(null, new Array(1000)).map((VAR_2) =>
          Math.floor(Math.random() * 10000000000000),
        );
        var VAR_3 = VAR_1.map((VAR_4) => (VAR_4 + "").length);
    }
};