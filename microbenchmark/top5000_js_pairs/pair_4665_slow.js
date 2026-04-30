const Benchmark = {
    run: function() {
        const VAR_1 = 100;
        const VAR_2 = 0;
        let VAR_3;
        VAR_3 = Array.from(Array(VAR_1), () => VAR_2);
    }
};