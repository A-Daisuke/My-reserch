const Benchmark = {
    run: function() {
        let VAR_1 = new Array(100000).fill(0);
        let VAR_2 = [1];
        for (let VAR_3 of VAR_1) VAR_2.push(VAR_3);
    }
};