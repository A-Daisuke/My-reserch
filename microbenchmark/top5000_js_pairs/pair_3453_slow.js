const Benchmark = {
    run: function() {
        const VAR_1 = /^H/;
        const VAR_2 = "Hello";
        const VAR_3 = 1000;
        for (let VAR_4 = 0; VAR_4 < VAR_3; VAR_4 += 1) {
          VAR_2.match(VAR_1);
        }
    }
};