const Benchmark = {
    run: function() {
        let VAR_1 = new Array(10000);
        VAR_1.fill(1);
        let VAR_2 = 0;
        VAR_1.forEach((VAR_3) => (VAR_2 += VAR_3));
        console.log(VAR_2);
    }
};