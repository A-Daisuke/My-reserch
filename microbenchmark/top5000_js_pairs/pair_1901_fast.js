const Benchmark = {
    run: function() {
        var VAR_1 = Array.apply(null, new Array(1000)).map((VAR_2) =>
          Math.floor(Math.random() * 10000000000000),
        );
        var VAR_5 = Math.log(10);
        var VAR_6 = VAR_1.map((VAR_7) => Math.floor(Math.log(VAR_7) / VAR_5));
    }
};