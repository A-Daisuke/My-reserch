const Benchmark = {
    run: function() {
        let VAR_1 = 1000;
        let VAR_2 = [].slice.apply(new Float32Array(VAR_1));
    }
};