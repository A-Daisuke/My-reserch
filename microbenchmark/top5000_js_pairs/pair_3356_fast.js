const Benchmark = {
    run: function() {
        const VAR_1 = Array(100).join(Math.random()).split(".");
        const VAR_6 = [];
        VAR_1.forEach((VAR_8) => VAR_6.push(VAR_8 * 2));
    }
};