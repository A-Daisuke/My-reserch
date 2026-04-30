const Benchmark = {
    run: function() {
        let VAR_1 = 10000;
        let VAR_2 = new Array(VAR_1).fill(0);
        let VAR_3 = new Array(VAR_1).fill(0);
        let VAR_4 = [];
        VAR_4.push(...VAR_2);
        VAR_4.push(...VAR_3);
    }
};