const Benchmark = {
    run: function() {
        let VAR_1 = [...new Array(1000)].map(() =>
          (Math.random() * 10000000 + 1000).toString(2),
        );
        VAR_1.map((VAR_2) => VAR_2.match(/\d{1,4}/g).join(" "));
    }
};